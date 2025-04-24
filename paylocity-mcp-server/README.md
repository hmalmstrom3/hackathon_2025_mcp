1. Clone the `ExternalDeveloperPortalSpecifications` repo
2. Regenerate API file with `npx openapi-mcp-generator@2.5.1-beta.1 --input "C:\Paylocity\ExternalDeveloperPortalSpecifications\production\Latest Version\Employee Demographic API.json" --output paylocity-mcp-server --transport=web --port=3000 --force`
  * You might have to delete the `chmod` command from the `build` script
3. Start server `npm start`
4. Add MCP server to client with `localhost:3000`