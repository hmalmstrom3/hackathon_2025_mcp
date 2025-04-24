import {McpToolDefinition} from "./definition.js";
  
/**
 * Map of tool definitions by name
 */
export const toolDefinitionMap: Map<string, McpToolDefinition> = new Map([

    ["getcorehrv1companiesemployees", {
      name: "getcorehrv1companiesemployees",
      description: `**Summary Description**
  
  The GET Employee List by Company ID API endpoint provides a list of up to 20 employees per call from the Paylocity system. Designed for the initial population of user systems with Paylocity's employee data, it supports pagination for easy navigation through results. The 'include' parameter enables selective retrieval of payload elements, while the 'Active Only' filter helps obtain only those employees with an 'Active' Employee Status Type. This makes the endpoint highly flexible and capable of delivering tailored listings to meet specific user requirements.
  
  **GET Employee List by Company ID - Use Cases:**
  
  - The 'Get Employee List by Company ID' endpoint empowers API users to fetch a comprehensive list of employees alongside their relevant data. Ideal for initial data loads.
  
  - The recommended best practice to track employee demographic changes is not through regular polling of this endpoint. Instead, utilize our employee webhooks in conjunction with the 'GET Single Employee by Company and Employee ID' endpoint.`,
      inputSchema: {"type":"object","properties":{"testMode":{"type":"boolean","description":"If true all responses are mocked and generated randomly."},"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"},"limit":{"type":"number","format":"int32","nullable": true,"description":"Number of employees per page.\r\n                **Default Value:** 20\r\n                **Maximum Value:** 20"},"nextToken":{"type":"string","nullable": true,"description":"Next token for the page."},"include":{"type":"string","nullable": true,"description":"Comma separated list of data to be included.\r\n                **Allowable Values:**\r\n                info, position, status and payrate."},"activeOnly":{"type":"boolean","nullable": true,"description":"Filter only active emplooyes.\r\n                **Allowable Values:**\r\n                true, false"}},"required":["companyId"]},
      method: "get",
      pathTemplate: "/coreHr/v1/companies/{companyId}/employees",
      executionParameters: [{"name":"testMode","in":"header"},{"name":"Authorization","in":"header"},{"name":"companyId","in":"path"},{"name":"limit","in":"query"},{"name":"nextToken","in":"query"},{"name":"include","in":"query"},{"name":"activeOnly?","in":"query"}],
      requestBodyContentType: undefined,
      securityRequirements: []
    }],
    ["getcorehrv1companiesemployeesbyemployeeid", {
      name: "getcorehrv1companiesemployeesbyemployeeid",
      description: `**Summary Description**
  
  The GET Single Employee API endpoint allows users to fetch specific employee details from a client's Paylocity instance. To use this endpoint, the Paylocity Company ID and the Employee ID must be specified. The endpoint also offers an 'include' parameter for selective data retrieval, enabling users to choose specific payload elements to retrieve.
  
  **GET Specific Employee - Use Cases:**
  
  - This API endpoint will allow an API user to retrieve an employee record for a specific employee ID.
  
  - For optimal use, pair this API endpoint with the Paylocity Employee Change Web Hook. This ensures that you get notified whenever there's a change in the employee's data in Paylocity. Along with the notification, you will receive the Paylocity Company ID and Employee ID corresponding to the employee whose data has been modified. You can then utilize the GET Specific Employee API endpoint to access the most recent version of the updated employee record.`,
      inputSchema: {"type":"object","properties":{"testMode":{"type":"boolean","description":"If true all responses are mocked and generated randomly."},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."},"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"},"employeeId":{"type":"string","description":"A filter to use to limit results to a specific employee.\r\n                **Allowable Values:**\r\n                255 char max"},"include":{"type":"string","description":"Comma separated list of data to be included.\r\n                **Allowable Values:**\r\n                info, position, status, payrate and futurePayrates."}},"required":["companyId","employeeId","include"]},
      method: "get",
      pathTemplate: "/coreHr/v1/companies/{companyId}/employees/{employeeId}",
      executionParameters: [{"name":"testMode","in":"header"},{"name":"Authorization","in":"header"},{"name":"companyId","in":"path"},{"name":"employeeId","in":"path"},{"name":"include","in":"query"}],
      requestBodyContentType: undefined,
      securityRequirements: []
    }],
  ]);