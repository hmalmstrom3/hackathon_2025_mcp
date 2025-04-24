
/**
 * Web server setup for HTTP-based MCP communication
 */
import express, { Request, Response } from 'express';
import cors from 'cors';
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { Server } from "@modelcontextprotocol/sdk/server/index.js";

// Import server configuration constants
import { SERVER_NAME, SERVER_VERSION } from './index.js';

/**
 * Sets up a web server for the MCP server using Server-Sent Events (SSE)
 * 
 * @param server The MCP Server instance
 * @param port The port to listen on (default: 3000)
 * @returns The Express app instance
 */
export async function setupWebServer(server: Server, port = 3000) {
  // Create Express app
  const app = express();
  
  // Enable CORS
  app.use(cors());
  
  // Parse JSON requests
  app.use(express.json());
  
  // Add a simple health check endpoint
  app.get('/health', (_, res) => {
    res.json({ status: 'OK', server: SERVER_NAME, version: SERVER_VERSION });
  });
  
  // Store active SSE transports by session ID
  const transports: {[sessionId: string]: SSEServerTransport} = {};
  
  // SSE endpoint for clients to connect to
  app.get("/sse", async (req: Request, res: Response) => {
    // Set headers for SSE
    // res.setHeader('Content-Type', 'text/event-stream');
    // res.setHeader('Cache-Control', 'no-cache');
    // res.setHeader('Connection', 'keep-alive');
    
    // Enable CORS for SSE
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    
    // Send initial comment to establish connection
    //res.write(':\n\n');
    
    // Create new transport for this client
    const transport = new SSEServerTransport('/api/messages', res);
    const sessionId = transport.sessionId;
    
    console.error(`New SSE connection established: ${sessionId}`);
    transports[sessionId] = transport;
    
    // Clean up on connection close
    req.on('close', () => {
      console.error(`SSE connection closed: ${sessionId}`);
      delete transports[sessionId];
    });
    
    // Connect the transport to the MCP server
    try {
      await server.connect(transport);
    } catch (error) {
      console.error(`Error connecting transport for session ${sessionId}:`, error);
      // Don't try to send errors to the client here, as headers may already be sent
    }
  });
  
  // API endpoint for clients to send messages
  app.post("/api/messages", async (req: Request, res: Response) => {
    const sessionId = req.query.sessionId as string;
    if (!sessionId) {
      return res.status(400).send('Missing sessionId query parameter');
    }
    
    const transport = transports[sessionId];
    
    if (!transport) {
      return res.status(404).send('No active session found with the provided sessionId');
    }
    
    try {
      await transport.handlePostMessage(req, res, req.body);
    } catch (error) {
      console.error(`Error handling message for session ${sessionId}:`, error);
      
      // If the response hasn't been sent yet, send an error response
      if (!res.headersSent) {
        res.status(500).send('Internal server error processing message');
      }
    }
  });
  
  // Static files for the web client (if any)
  app.use(express.static('public'));
  
  // Start the server
  app.listen(port, () => {
    console.error(`MCP Web Server running at http://localhost:${port}`);
    console.error(`- SSE Endpoint: http://localhost:${port}/sse`);
    console.error(`- Messages Endpoint: http://localhost:${port}/api/messages?sessionId=YOUR_SESSION_ID`);
    console.error(`- Health Check: http://localhost:${port}/health`);
  });
  
  return app;
}
