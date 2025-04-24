import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';

// Example: Connect to an MCP server running locally
export async function createMcpClient() {
  const transport = new StreamableHTTPClientTransport(new URL('http://localhost:3000/mcp'));
  const client = new Client({
    name: "TestClient",
    version: "1.0.0"
  });
  await client.connect(transport);
  return { client, transport };
}
