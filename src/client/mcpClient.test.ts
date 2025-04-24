import { createMcpClient } from './mcpClient.js';

describe('MCP Client Integration', () => {
  it('should connect and disconnect from the MCP server without error', async () => {
    const { client, transport } = await createMcpClient();
    expect(client).toBeDefined();
    expect(transport).toBeDefined();
    // Optionally, you could send a test request here and assert the response
    await transport.close();
  });
});
