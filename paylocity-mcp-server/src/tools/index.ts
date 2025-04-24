import { addSecurityRequirements } from "../oauth2.js";
import { McpToolDefinition } from "./definition.js";
import { toolDefinitionMap as employeeDemographicToolDefinitionMap } from "./employee-demographics.js";
import { toolDefinitionMap as paySetupToolDefinitionMap } from "./pay-setup.js";

export const toolDefinitionMap: Map<string, McpToolDefinition> = addSecurityRequirements(new Map([
    ...employeeDemographicToolDefinitionMap,
    ...paySetupToolDefinitionMap,
]));