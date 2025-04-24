import { McpToolDefinition } from "./definition.js";

export const toolDefinitionMap: Map<string, McpToolDefinition> = new Map([

    ["post_apihub_time_v2_companies__companyid__punchdetails", {
      name: "post_apihub_time_v2_companies__companyid__punchdetails",
      description: `**Summary Description**
  
  The Company Punch Detail API offers access to comprehensive punch data at the company level. This API will include all punch data for all employees within a timeframe. It serves as a tool for accessing, analyzing, managing time-related records, and providing intricate details related to employee punches. Calls to this endpoint can be filtered by date range.
  
  **Key Features**
  - Company-Level Data: Retrieve punch details for all employees in a company.
  - Employee-Level Insights: Filter and access individual employee punch records.
  - Custom Timeframes: Specify start and end dates to narrow down the data range.
  - Detailed Records: Access intricate details such as punch times, locations, and punch types (e.g., clock-in, clock-out).
  
  \`\`\`
  Filtering by Date Range
  The Punch Detail API can be filtered by the relative date and time based on your time zone. For example:
  Start of the day: At 00:00:00 (midnight), marking the beginning of the day.
  Midday: At 12:00:00 (noon), halfway through the day.
  End of the day: At 23:59:00, just a second before the next day begins.
  \`\`\`
  
  **Use Cases:**
  - Time Tracking and Payroll Integration: Integrate punch details into payroll systems to ensure accurate and efficient calculation of employee hours worked.
  - Attendance and Compliance Monitoring: Generate attendance reports and monitor compliance with labor laws and company policies.
  - Performance Analysis: Analyze punch patterns to identify trends, such as overtime or under-utilized employee hours.
  - Real-Time Insights for Managers: Provide managers with up-to-date punch data for better workforce management and scheduling.
  - HR and Administrative Audits: Simplify audits by offering detailed, exportable punch records to meet internal and external reporting requirements.
  
  This API is an essential tool for companies looking to streamline workforce management and improve operational efficiency. With its detailed punch data, it supports a wide range of business functions, from compliance to analytics.
  
  For more information on implementing this API, see our [Punch Details Overview](https://developer.paylocity.com/integrations/reference/punch-detail-overview)`,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company ID. This is the unique value provided by Paylocity to each specific Payroll Entity."},"Authorization":{"type":"string","default":"Bearer JWT_GOES_HERE","description":"Authorization token. Ex. Bearer ..."},"requestBody":{"type":"object","properties":{"relativeStart":{"type":"string","format":"date-time"},"relativeEnd":{"type":"string","format":"date-time"}},"additionalProperties":false,"description":"The company punch detail request payload."}},"required":["companyId","Authorization"]},
      method: "post",
      pathTemplate: "/apiHub/time/v2/companies/{companyId}/punchDetails",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"Authorization","in":"header"}],
      requestBodyContentType: "application/json",
      securityRequirements: [{"JWTAuthorization":[]}]
    }],
    ["get_apihub_time_v1_companies__companyid__employees__employeeid__punchdetails", {
      name: "get_apihub_time_v1_companies__companyid__employees__employeeid__punchdetails",
      description: `> ❗️ This endpoint is being deprecated in the Spring of 2026 
  > All new development should be [using the newest version of this endpoint](ref:get_apihub_time_v2_companies_companyid_employees_employeeid_punchdetails) 
  
   **Summary Description**
  
  The GET Punch Details API endpoint provides access to employee punch details effortlessly. The punch detail API will include all punch data for a single employee. It serves as a valuable tool for accessing, analyzing, and managing time-related records, providing intricate details related to employee punches. The Punch Details API can be filtered by date range
  
  **The Paylocity Punch Detail use cases:**
  - The Punch Detail API provides HR and payroll organizations with precise and comprehensive punch data for every employee. The provided data can be utilized to accurately compute employee salaries, incorporating overtime and rounding modifications
  -  Organizations can employ the API to collect punch data for particular cost centers or departments. This enables comprehensive examination of labor efficiency, attendance, and time allocation. By having access to both rounded and precise punch times, firms can analyze patterns, evaluate employee punctuality, and utilize data-driven strategies to enhance operational efficiency
  - The Punch Detail API is indispensable for ensuring adherence to labor standards. It offers a thorough record of employee punches, facilitating the demonstration of compliance during audits or inquiries. Users have the ability to apply filters based on date range, facilitating the retrieval of specific data needed for compliance reporting`,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company ID. This is the unique value provided by Paylocity to each specific Payroll Entity."},"employeeId":{"type":"string","description":"The Paylocity Employee ID. This is a unique value per Paylocity Company ID."},"relativeStart":{"type":"string","format":"date-time","description":"The relative DateTime for the beginning of the WorkedShift\r\n            **Allowable Values:**\r\n            Format: yyyy-MM-ddT00:00:00"},"relativeEnd":{"type":"string","format":"date-time","description":"The relative DateTime for the end of the WorkedShift\r\n            **Allowable Values:**\r\n            Format: yyyy-MM-ddT00:00:00"},"testFlag":{"type":"boolean","default":false,"description":"A Boolean value that, when set to \"true\", returns mock data."},"Authorization":{"type":"string","default":"Bearer JWT_GOES_HERE","description":"Authorization token. Ex. Bearer ..."}},"required":["companyId","employeeId","Authorization"]},
      method: "get",
      pathTemplate: "/apiHub/time/v1/companies/{companyId}/employees/{employeeId}/punchDetails",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"employeeId","in":"path"},{"name":"relativeStart","in":"query"},{"name":"relativeEnd","in":"query"},{"name":"testFlag","in":"query"},{"name":"Authorization","in":"header"}],
      requestBodyContentType: undefined,
      securityRequirements: [{"JWTAuthorization":[]}]
    }],
    ["get_apihub_time_v2_companies__companyid__employees__employeeid__punchdetails", {
      name: "get_apihub_time_v2_companies__companyid__employees__employeeid__punchdetails",
      description: `**Summary Description**
  
  The GET Punch Detail V2 endpoint provides access to employee punch details effortlessly. The punch detail API will include all punch data for a single employee. It serves as a valuable tool for accessing, analyzing, and managing time-related records, providing intricate details related to employee punches. Punch Detail V2 offers four decimals of precision for timesheets using hours instead of seconds, allowing timesheets to display four decimal places and capturing hours with better precision. Punch times as well as non-work pay types will display up to four decimals. The Punch Details API can be filtered by the relative date and time based on your time zone.
  
  \`\`\`
  Filtering by Date Range
  The Punch Detail API can be filtered by the relative date and time based on your time zone. For example:
  Start of the day: At 00:00:00 (midnight), marking the beginning of the day.
  Midday: At 12:00:00 (noon), halfway through the day.
  End of the day: At 23:59:00, just a second before the next day begins.
  \`\`\`
  
  A 24 hour day is represented by using:
  
  startDate={{relativeStartTime}}&endDate={{relativeEndTime}}
  
  "startDate": "2024-03-05T00:00:00"
  
  "endDate": "2024-03-05T23:59:00"
  
  \`/Time/v2/companies/{{companyId}}/employees/{{employeeId}}/punchdetails?startDate={{relativeStartTime}}&endDate={{relativeEndTime}}\`
  
  For more information on implementing this API, see our [Punch Details Overview](https://developer.paylocity.com/integrations/reference/punch-detail-overview)`,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company ID. This is the unique value provided by Paylocity to each specific Payroll Entity."},"employeeId":{"type":"string","description":"The Paylocity Employee ID. This is a unique value per Paylocity Company ID."},"relativeStart":{"type":"string","format":"date-time","description":"The relative DateTime for the beginning of the WorkedShift\r\n            **Allowable Values:**\r\n            Format: yyyy-MM-ddT00:00:00"},"relativeEnd":{"type":"string","format":"date-time","description":"The relative DateTime for the end of the WorkedShift\r\n            **Allowable Values:**\r\n            Format: yyyy-MM-ddT00:00:00"},"testFlag":{"type":"boolean","default":false,"description":"A Boolean value that, when set to \"true\", returns mock data."},"Authorization":{"type":"string","default":"Bearer JWT_GOES_HERE","description":"Authorization token. Ex. Bearer ..."}},"required":["companyId","employeeId","Authorization"]},
      method: "get",
      pathTemplate: "/apiHub/time/v2/companies/{companyId}/employees/{employeeId}/punchDetails",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"employeeId","in":"path"},{"name":"relativeStart","in":"query"},{"name":"relativeEnd","in":"query"},{"name":"testFlag","in":"query"},{"name":"Authorization","in":"header"}],
      requestBodyContentType: undefined,
      securityRequirements: [{"JWTAuthorization":[]}]
    }],
  ]);