import { McpToolDefinition } from "./definition.js";

export const toolDefinitionMap: Map<string, McpToolDefinition> = new Map([

    ["get_apihub_scheduling_v1_companies__companyid__employees__employeeid__shifts", {
      name: "get_apihub_scheduling_v1_companies__companyid__employees__employeeid__shifts",
      description: `> 🚧 Beta Phase
  > 
  > This resource is in closed beta.  Paylocity Technology Partners interested may contact the marketplace team to explore early adopter opportunities at [marketplaceapisupport@paylocity.com](mailto:marketplaceapisupport@paylocity.com) 
  
  **Summary Description**
  
  The GET Employee Shifts API endpoint detailed information about the shifts assigned to an individual employee. This endpoint is essential for tracking, analyzing, and managing an employee's schedule. The detailed shift information includes start and end times, roles, required skills, and location details.
  
  **The use cases:**
  - Employees can use this endpoint to view their upcoming shifts, including start and end times, roles, and locations. Enhances employee awareness of their schedule, reducing missed shifts and improving punctuality
  - Managers can access the shifts of individual employees to ensure adequate staffing and workload distribution. Facilitates effective shift management and helps avoid over-scheduling or under-utilization of staff
  - When scheduling new shifts, managers can use this endpoint to check for conflicts with an employee's existing shifts. Prevents scheduling overlaps, ensuring that employees are not double-booked.`,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company ID. This is the unique value provided by Paylocity to each specific Payroll Entity."},"employeeId":{"type":"string","description":"The Paylocity Employee ID. This is a unique value per Paylocity Company ID."},"include":{"type":"string","description":"The sub-resources to include in the response.<br /> - sub-resources: breaks, segments, note"},"filter":{"type":"string","description":"A parseable filter expression involving fields, operators, and values to filter the result list by. <br /> - fields: startDateTime, positionKey<br /> - operators: eq, in, lt, gt, le, ge, and, or"},"includeTotalCount":{"type":"boolean","description":"When provided and set to true will cause the API to return the X-Pcty-Total-Count header\r\nin the response which will be set to the total number of resources available even if only\r\na subset of those were returned.  The default is false."},"limit":{"maximum":2147483647,"exclusiveMaximum":false,"minimum":0,"exclusiveMinimum":false,"type":"number","format":"int32","description":"The maximum number of resources to include in the response.  The default is 25."},"offset":{"maximum":2147483647,"exclusiveMaximum":false,"minimum":0,"exclusiveMinimum":false,"type":"number","format":"int32","description":"The number of resources to skip when returning paginated results.  The default is 0."},"sort":{"type":"string","description":"A comma-separated, xpath-like formatting string that identifies the fields that you \r\nwant the API to use for sorting the resources when they are returned.  The default\r\nvalue can vary from API to API."},"Authorization":{"type":"string","default":"Bearer JWT_GOES_HERE","description":"Authorization token. Ex. Bearer ..."}},"required":["companyId","employeeId","Authorization"]},
      method: "get",
      pathTemplate: "/apiHub/scheduling/v1/companies/{companyId}/employees/{employeeId}/shifts",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"employeeId","in":"path"},{"name":"include","in":"query"},{"name":"filter","in":"query"},{"name":"includeTotalCount","in":"query"},{"name":"limit","in":"query"},{"name":"offset","in":"query"},{"name":"sort","in":"query"},{"name":"Authorization","in":"header"}],
      requestBodyContentType: undefined,
      securityRequirements: []
    }],
    ["get_apihub_scheduling_v1_companies__companyid__shifts", {
      name: "get_apihub_scheduling_v1_companies__companyid__shifts",
      description: `> 🚧 Beta Phase
  > 
  > This resource is in closed beta.  Paylocity Technology Partners interested may contact the marketplace team to explore early adopter opportunities at [marketplaceapisupport@paylocity.com](mailto:marketplaceapisupport@paylocity.com) 
  
  **Summary Description**
  
  The GET Shifts API endpoint provides seamless access to detailed shift information for employees. This endpoint retrieves comprehensive shift data, serving as an essential tool for viewing, analyzing, and managing employee work schedules
  
  **The use cases:**
  - The Shifts API allows the manager to access current shift details in real-time, enabling quick adjustments to staffing levels based on demand. This ensures optimal coverage and improves customer service
  - By utilizing the Shifts API,  track shift details such as start and end times, tasks performed, and any overtime worked. This data helps in analyzing worker productivity and identifying trends for performance improvement`,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company ID. This is the unique value provided by Paylocity to each specific Payroll Entity."},"include":{"type":"string","description":"The sub-resources to include in the response.<br /> - sub-resources: breaks, draft, segments, note"},"filter":{"type":"string","description":"A parseable filter expression involving fields, operators, and values to filter the result list by. <br /> - fields: startDateTime, positionKey<br /> - operators: eq, in, lt, gt, le, ge, and, or"},"includeTotalCount":{"type":"boolean","description":"When provided and set to true will cause the API to return the X-Pcty-Total-Count header\r\nin the response which will be set to the total number of resources available even if only\r\na subset of those were returned.  The default is false."},"limit":{"maximum":2147483647,"exclusiveMaximum":false,"minimum":0,"exclusiveMinimum":false,"type":"number","format":"int32","description":"The maximum number of resources to include in the response.  The default is 25."},"offset":{"maximum":2147483647,"exclusiveMaximum":false,"minimum":0,"exclusiveMinimum":false,"type":"number","format":"int32","description":"The number of resources to skip when returning paginated results.  The default is 0."},"sort":{"type":"string","description":"A comma-separated, xpath-like formatting string that identifies the fields that you \r\nwant the API to use for sorting the resources when they are returned.  The default\r\nvalue can vary from API to API."},"Authorization":{"type":"string","default":"Bearer JWT_GOES_HERE","description":"Authorization token. Ex. Bearer ..."}},"required":["companyId","Authorization"]},
      method: "get",
      pathTemplate: "/apiHub/scheduling/v1/companies/{companyId}/shifts",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"include","in":"query"},{"name":"filter","in":"query"},{"name":"includeTotalCount","in":"query"},{"name":"limit","in":"query"},{"name":"offset","in":"query"},{"name":"sort","in":"query"},{"name":"Authorization","in":"header"}],
      requestBodyContentType: undefined,
      securityRequirements: []
    }],
    ["get_apihub_scheduling_v1_companies__companyid__openshifts", {
      name: "get_apihub_scheduling_v1_companies__companyid__openshifts",
      description: `> 🚧 Beta Phase
  > 
  > This resource is in closed beta.  Paylocity Technology Partners interested may contact the marketplace team to explore early adopter opportunities at [marketplaceapisupport@paylocity.com](mailto:marketplaceapisupport@paylocity.com) 
  
  **Summary Description**
  
  The GET Open Shifts API endpoint provides  all the open shifts that are not assigned to an Employee. This would be provided with a quantity with which supervisor/manager can know how many of them can be assigned to different employees.
  
  **The use cases:**
  - The Open Shifts API allows the manager to access and advertise available shifts in real-time, enabling employees to quickly claim and fill these shifts. This ensures optimal staffing levels and improves service quality.
  - Integrating the Open Shifts API with a bidding system, employees can view and bid for available shifts, promoting fairness and flexibility. The system can then allocate shifts based on predefined criteria such as seniority or skillset
  - The Open Shifts API provides detailed information about the required skills for each shift. The facility can use this data to match open shifts with qualified employees, ensuring high-quality patient care and compliance with regulatory standards`,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company ID. This is the unique value provided by Paylocity to each specific Payroll Entity."},"include":{"type":"string","description":"The sub-resources to include in the response.<br /> - sub-resources: breaks, note, claims"},"filter":{"type":"string","description":"A parseable filter expression involving fields, operators, and values to filter the result list by. <br /> - fields: startDateTime, positionKey<br /> - operators: eq, in, lt, gt, le, ge, and, or"},"includeTotalCount":{"type":"boolean","description":"When provided and set to true will cause the API to return the X-Pcty-Total-Count header\r\nin the response which will be set to the total number of resources available even if only\r\na subset of those were returned.  The default is false."},"limit":{"maximum":2147483647,"exclusiveMaximum":false,"minimum":0,"exclusiveMinimum":false,"type":"number","format":"int32","description":"The maximum number of resources to include in the response.  The default is 25."},"offset":{"maximum":2147483647,"exclusiveMaximum":false,"minimum":0,"exclusiveMinimum":false,"type":"number","format":"int32","description":"The number of resources to skip when returning paginated results.  The default is 0."},"sort":{"type":"string","description":"A comma-separated, xpath-like formatting string that identifies the fields that you \r\nwant the API to use for sorting the resources when they are returned.  The default\r\nvalue can vary from API to API."},"Authorization":{"type":"string","default":"Bearer JWT_GOES_HERE","description":"Authorization token. Ex. Bearer ..."}},"required":["companyId","Authorization"]},
      method: "get",
      pathTemplate: "/apiHub/scheduling/v1/companies/{companyId}/openShifts",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"include","in":"query"},{"name":"filter","in":"query"},{"name":"includeTotalCount","in":"query"},{"name":"limit","in":"query"},{"name":"offset","in":"query"},{"name":"sort","in":"query"},{"name":"Authorization","in":"header"}],
      requestBodyContentType: undefined,
      securityRequirements: []
    }],
  ]);
  