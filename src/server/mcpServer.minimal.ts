import express from 'express';
import { McpServer, ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { randomUUID } from 'crypto';
import { z } from 'zod';

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Minimal MCP Server running on port ${PORT}`);
});

app.all('/mcp', async (req, res) => {
  console.log('Received request on /mcp (minimal)');
  try {
    const mcp = new McpServer({
      name: "MinimalMCPServer",
      version: "1.0.0"
    });

    mcp.tool(
      "ping",
      "Ping tool",
      {},
      async () => ({ content: [{ type: "text", text: "pong" }] })
    );

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

    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: () => randomUUID(),
    });
    await mcp.connect(transport);
    await transport.handleRequest(req, res);
  } catch (error) {
    console.error('Error in /mcp handler (minimal):', error);
    if (!res.headersSent) {
      res.status(500).send('Internal Server Error: ' + (error instanceof Error ? error.message : String(error)));
    }
  }
});
