import express from 'express';
import dotenv from 'dotenv';
import { registerEmployeeDemographicRoutes } from './routes/employeeDemographic.js';
import { McpServer, ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { randomUUID } from 'crypto';
import { paylocityApi } from './utils/paylocityApi.js';
import { z } from 'zod';

dotenv.config();

const app = express();

app.use(express.json());

registerEmployeeDemographicRoutes(app); // If JSON parsing is needed, it should be added inside the route registration, not globally.

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`MCP Server for Paylocity Employee Demographics running on port ${PORT}`);
});

// --- MCP Streamable HTTP Support ---
// Modern Streamable HTTP endpoint for MCP protocol

// --- MCP Session Management ---
const transports: Record<string, StreamableHTTPServerTransport> = {};

app.all('/mcp', async (req, res) => {
  console.log('Received request on /mcp');
  console.log('Request body:', req.body);
  try {
    const sessionId = req.headers['mcp-session-id'] as string | undefined;
    let transport: StreamableHTTPServerTransport | undefined;

    if (sessionId && transports[sessionId]) {
      // Reuse existing transport for session
      transport = transports[sessionId];
    } else if (!sessionId && req.body && req.body.method === 'initialize') {
      // New session initialization
      const mcp = new McpServer({
        name: "PaylocityMCPServer",
        version: "1.0.0"
      });

      // Register the Paylocity employee list API as an MCP tool
      mcp.tool(
        "getEmployees",
      "Fetch a list of employees for a company from Paylocity.",
      {
        companyId: z.string(),
        limit: z.string().optional(),
        nextToken: z.string().optional(),
        include: z.string().optional(),
        activeOnly: z.string().optional(),
      },
      async ({ companyId, limit, nextToken, include, activeOnly }) => {
        // Compose query params
        const params: Record<string, string | undefined> = {};
        if (limit) params.limit = limit;
        if (nextToken) params.nextToken = nextToken;
        if (include) params.include = include;
        if (activeOnly) params.activeOnly = activeOnly;
        const response = await paylocityApi.get(`/coreHr/v1/companies/${companyId}/employees`, {
          params,
        });
        return { content: [{ type: "text", text: JSON.stringify(response.data, null, 2) }] };
      }
    );

    // Register a minimal prompt so the MCP server is always initialized
    mcp.prompt(
      "echo",
      { message: z.string() },
      ({ message }) => ({
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: `Echo: ${message}`,
            },
          },
        ],
      })
    );

    // Employee data resource (list employees for a company)
    mcp.resource(
      "employees",
      new ResourceTemplate("employees://{companyId}", { list: undefined }),
      async (uri, { companyId }) => {
        const response = await paylocityApi.get(`/coreHr/v1/companies/${companyId}/employees`);
        return {
          contents: [
            {
              uri: uri.href,
              text: JSON.stringify(response.data, null, 2),
            },
          ],
        };
      }
    );

    // Client config resource (static)
    mcp.resource(
      "client-config",
      "config://client",
      async (uri) => ({
        contents: [
          {
            uri: uri.href,
            text: JSON.stringify({ name: "TestClient", version: "1.0.0" }, null, 2),
          },
        ],
      })
    );

    // Static hello resource
    mcp.resource(
      "hello",
      "hello://world",
      async (uri) => ({
        contents: [
          {
            uri: uri.href,
            text: "Hello, world!"
          }
        ]
      })
    );

      // Create and store transport for session
      transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: () => randomUUID(),
        onsessioninitialized: (sid) => {
          transports[sid] = transport!;
          console.log(`Session initialized: ${sid}`);
        },
      });
      await mcp.connect(transport);
      // Save to outer scope for handler below
      (transport as any)._mcp = mcp;
      // Clean up on close
      transport.onclose = () => {
        if (transport && transport.sessionId) {
          delete transports[transport.sessionId];
          if ((transport as any)._mcp?.close) (transport as any)._mcp.close();
          transport.close();
          console.log(`Session closed: ${transport.sessionId}`);
        }
      };
    } else {
      // Invalid request (no valid session)
      res.status(400).json({
        jsonrpc: '2.0',
        error: {
          code: -32000,
          message: 'Bad Request: Server not initialized',
        },
        id: req.body?.id ?? null,
      });
      return;
    }

    await transport.handleRequest(req, res, req.body);
  
  } catch (error) {
    console.error('Error in /mcp handler:', error);
    if (!res.headersSent) {
      res.status(500).send('Internal Server Error: ' + (error instanceof Error ? error.message : String(error)));
    }
  }
});
