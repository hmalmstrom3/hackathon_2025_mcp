import { createMcpClient } from './mcpClient.js';

describe('MCP Client Integration', () => {
  it('should connect and disconnect from the MCP server without error', async () => {
    const { client, transport } = await createMcpClient();
    expect(client).toBeDefined();
    expect(transport).toBeDefined();
    await transport.close();
  });

  it('should list employees using the MCP getEmployees tool', async () => {
    const { client, transport } = await createMcpClient();
    // Use a dummy companyId for test; replace with a real one if needed
    const companyId = 'B6001';
    const result = await client.callTool({
      name: 'getEmployees',
      arguments: { companyId }
    });
    expect(result).toBeDefined();
    expect(result.content).toBeDefined();
    expect(Array.isArray(result.content)).toBe(true);
    // Log the result content for debugging
    console.log('getEmployees result:', result.content);
    // Optionally, check that the content is a JSON string or object
    if (typeof result.content[0]?.text === 'string') {
      expect(() => JSON.parse(result.content[0].text)).not.toThrow();
    }
    await transport.close();
  });
});
