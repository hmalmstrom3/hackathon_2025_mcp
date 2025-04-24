import { McpToolDefinition } from "./definition.js";
import { toolDefinitionMap as employeeDemographicToolDefinitionMap } from "./employee-demographics.js";
import { toolDefinitionMap as paySetupToolDefinitionMap } from "./pay-setup.js";

export const toolDefinitionMap: Map<string, McpToolDefinition> = new Map([
    ...employeeDemographicToolDefinitionMap,
    ...paySetupToolDefinitionMap,
]);