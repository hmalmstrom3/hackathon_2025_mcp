import { McpToolDefinition } from "./definition.js";
import { toolDefinitionMap as employeeDemographicToolDefinitionMap } from "./employeeDemographic.js";

export const toolDefinitionMap: Map<string, McpToolDefinition> = new Map([
    ...employeeDemographicToolDefinitionMap,
]);