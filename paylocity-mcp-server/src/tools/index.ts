import { addSecurityRequirements } from "../oauth2.js";
import { McpToolDefinition } from "./definition.js";
import { toolDefinitionMap as employeeDemographicToolDefinitionMap } from "./employee-demographics.js";
import { toolDefinitionMap as paySetupToolDefinitionMap } from "./pay-setup.js";
import { toolDefinitionMap as backgroundCheckDefinitionMap } from "./background-check.js";
import { toolDefinitionMap as punchDetailDefinitionMap } from "./punch-detail-api.js";
import { toolDefinitionMap as punchImportDefinitionMap } from "./punch-import-api.js";
import { toolDefinitionMap as marketplacePayEntryDefinitionMap } from "./marketplace-pay-entry.js";
import { toolDefinitionMap as payEntryDefinitionaMap } from "./pay-entry.js";
import { toolDefinitionMap as schedulingDefinitionMap } from "./pay-entry.js";
import { toolDefinitionMap as companyLevelInformationDefinitionMap } from "./company-level-information.js";




export const toolDefinitionMap: Map<string, McpToolDefinition> = addSecurityRequirements(new Map([
    ...employeeDemographicToolDefinitionMap,
    ...paySetupToolDefinitionMap,
    ...backgroundCheckDefinitionMap,
    ...punchDetailDefinitionMap,
    ...punchImportDefinitionMap,
    ...marketplacePayEntryDefinitionMap,
    ...payEntryDefinitionaMap,
    ...schedulingDefinitionMap,
    ...companyLevelInformationDefinitionMap
]));