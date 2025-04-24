import { McpToolDefinition } from "./tools/definition.js";

export const OAUTH_TOKEN_URL = process.env['OAUTH_TOKEN_URL'] || "https://tinprovider.qa.paylocity.com/security/v1/token";

const SECURITY_SCHEME_NAME_PCTY_CC = "PCTY_CC";
const SECURITY_SCHEME_PCTY_CC = {
  type: "oauth2",
  flows: {
    clientCredentials: {
      tokenUrl: OAUTH_TOKEN_URL, 
      scopes: {
        none: "Scopes not needed",
      }
    }
  },
}

const SECURITY_REQUIREMENT_PCTY_CC = {
  [SECURITY_SCHEME_NAME_PCTY_CC]: ["none"]
};

export const SECURITY_SCHEMES = {
  [SECURITY_SCHEME_NAME_PCTY_CC]: SECURITY_SCHEME_PCTY_CC,
}

export function addSecurityRequirements(toolDefinitionMap: Map<string, McpToolDefinition>)
{
  for (const [key, toolDefinition] of toolDefinitionMap) {
    if (toolDefinition.securityRequirements) {
      toolDefinition.securityRequirements.push(SECURITY_REQUIREMENT_PCTY_CC);
    } else {
      toolDefinition.securityRequirements = [SECURITY_REQUIREMENT_PCTY_CC];
    }
  }
  return toolDefinitionMap;
}