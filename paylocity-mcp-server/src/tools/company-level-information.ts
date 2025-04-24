import { McpToolDefinition } from "./definition.js";

export const toolDefinitionMap: Map<string, McpToolDefinition> = new Map([

    ["getapihubcorehrv1companiesbycompanyid", {
      name: "getapihubcorehrv1companiesbycompanyid",
      description: `**Summary Description**
  
  The Get Company Information API endpoint provides access to specific company details. Users can retrieve a wide range of company information, including: company name, address, industry, (EIN) Employer Identification Number, and more.
  
  **Use Cases**
  
  - Once the developer has company information, they can update their system with the latest earning codes. To update the earning codes in their system and they need to know what earning codes are available in Paylocity.
  - After getting company data, clients are use the company specific schema to pull the information into their UI to expose to a user.
  - Once the developer has company information, developers can add a New Employee to Paylocity and the system requires them to include the Benefit Class assigned in Paylocity for the New Employee.
  `,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max."},"testMode":{"type":"boolean","description":"If true all responses are mocked and generated randomly."},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."}},"required":["companyId"]},
      method: "get",
      pathTemplate: "/apiHub/corehr/v1/companies/{companyId}",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"testMode","in":"header"},{"name":"Authorization","in":"header"}],
      requestBodyContentType: undefined,
      securityRequirements: []
    }],
    ["getapihubcorehrv1companiesworklocations", {
      name: "getapihubcorehrv1companiesworklocations",
      description: `**Summary Description**
  
  The GET Work Location list by Company ID endpoint allows users to fetch a list of work location details from a client's Paylocity instance. Work locations, referred to as geographic or location codes, serve as designations employed by corporations to specify particular physical or geographic places where their personnel are stationed. These codes fulfill several crucial functions in the domains of human resources, operations, and management. To use this endpoint, the Paylocity Company ID and “workLocations” parameter must be specified.
  
  **Use Cases**
  
  - Locations are addresses used as work or hiring locations. Each worker should have an assigned work location. The purpose of a work location is to verify workers' taxes. Work locations in HR & Payroll will show in Paylocity's Recruiting platform when creating job postings.
  - This information will also transfer to external job sites if using Recruiting Enhanced Features. Currently, only one work location can be added to each job listing.
  `,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."},"testMode":{"type":"boolean","default":false,"description":"If true all responses are mocked and generated randomly."}},"required":["companyId"]},
      method: "get",
      pathTemplate: "/apiHub/corehr/v1/companies/{companyId}/workLocations",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"Authorization","in":"header"},{"name":"testMode","in":"header"}],
      requestBodyContentType: undefined,
      securityRequirements: []
    }],
    ["getapihubcorehrv1companiesratecodes", {
      name: "getapihubcorehrv1companiesratecodes",
      description: `**Summary Description**
  
  The GET Rate Codes by list by Company ID endpoint allows users to retrieve a comprehensive list of Rate Codes details from a client's Paylocity instance. To use this endpoint, the Paylocity “rateCodes” parameter must be specified. Rate Codes are employed throughout multiple businesses to denote precise pricing or rate frameworks. Rate codes are vital for monitoring and overseeing various pricing alternatives, employee pay rates, packages, or promotions offered by businesses. These codes facilitate the optimization of pricing management, reservations, and financial transactions.
  
  **Use Cases**
  
  - Hotel room rates are typically categorized and differentiated using rate codes in the hospitality business. Each rate code corresponds to a distinct kind of room (such as standard, deluxe, or suite) or a special price arrangement (such as non-refundable, corporate, or promotional).
   -Seasonal Pricing: Rate codes can be utilized to enforce fluctuations in pricing based on different seasons. For instance, a hotel may utilize distinct rate codes to distinguish between rates during peak season and rates during off-peak season. 
   -Businesses frequently generate rate codes to facilitate special deals, packages, or promotions. These codes may encompass reductions, free perks, or combined offerings (e.g., "bed and breakfast" packages).
  - A business would like to have different codes per shift work.
  `,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."},"testMode":{"type":"boolean","default":false,"description":"If true all responses are mocked and generated randomly."}},"required":["companyId"]},
      method: "get",
      pathTemplate: "/apiHub/corehr/v1/companies/{companyId}/rateCodes",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"Authorization","in":"header"},{"name":"testMode","in":"header"}],
      requestBodyContentType: undefined,
      securityRequirements: []
    }],
    ["getapihubcorehrv1companiescostcentersandlevels", {
      name: "getapihubcorehrv1companiescostcentersandlevels",
      description: `**Summary Description**
  
  The GET Cost Center List by Company ID endpoint, retrieves a comprehensive list of Cost Center from the Paylocity system with each call. To use this endpoint, the Paylocity “costCentersAndLevels” parameter must be specified. Cost centers are distinct entities or divisions within an organization that bear expenses as a result of their activities. These cost centers are crucial for monitoring and controlling expenses, allocating funds, and evaluating the efficiency of various departments within the firm. Cost centers are predominantly employed in managerial accounting and financial management to apportion expenses and evaluate resource utilization. Typical instances of cost centers encompass production departments, marketing teams, research and development units, and administrative offices.
  
  **Use Cases**
  
  - Cost allocation refers to the process of assigning costs that have been incurred by a specific cost center to that same center. The costs encompass staff remuneration, utility bills, rental fees, supplies, and any additional expenses related to the activities of the cost center.
  - Budgeting: Cost centers are essential in the process of creating a budget. Organizations distribute budgets among several cost centers and then compare the actual expenses of each center to their allocated budget. This facilitates cost management and performance assessment. 
  - Performance Evaluation: Cost centers are assessed according to their capacity to effectively control costs while attaining their goals. Performance metrics may encompass indicators such as the cost incurred for each unit of output, the cost incurred for each employee, or other pertinent measures. 
  - Cost Reporting: Organizations frequently produce reports for individual cost centers, providing a comprehensive breakdown of their expenditures and operational effectiveness. Management utilizes these reports to evaluate the financial well-being and effectiveness of each cost center.
  
  **Note**
  
  - A company cannot delete Cost Centers. The Cost Center is editable after use, but the chosen Code for the Cost Center is permanent.
  - To ensure cross-product compatibility, Cost Center Codes should not contain leading zeros or special characters. Cost Center codes must be numeric only if employees transfer using time clocks or kiosk tablets.
  - A Country selection is necessary before being able to enter information into the Zip and State fields when selecting the Override Company Check Printing Address option.
  `,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."},"testMode":{"type":"boolean","default":false,"description":"If true all responses are mocked and generated randomly."}},"required":["companyId"]},
      method: "get",
      pathTemplate: "/apiHub/corehr/v1/companies/{companyId}/costCentersAndLevels",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"Authorization","in":"header"},{"name":"testMode","in":"header"}],
      requestBodyContentType: undefined,
      securityRequirements: []
    }],
    ["putapihubcorehrv1companiescostcenterlevelscostcentersbycode", {
      name: "putapihubcorehrv1companiescostcenterlevelscostcentersbycode",
      description: `**Summary Description**
  
  The Cost Center PUT endpoint is used to either create a new Cost Center resource or replace an existing one within the Paylocity system. This endpoint ensures that the specified Cost Center is accurately recorded or updated, reflecting any changes in organizational structure or financial management practices. Cost Centers are key organizational units or divisions that incur expenses due to their activities. These entities are essential for tracking and managing costs, allocating budgets, and evaluating departmental efficiency. By using the PUT endpoint, organizations can effectively manage their Cost Centers, ensuring that each one is aligned with current business needs and financial objectives.
  
  **Key Functionality**
  
  - **Creating a New Cost Center**: The PUT endpoint allows you to define a new Cost Center, complete with all necessary details such as its Code, description, and associated parameters. This is crucial when establishing new departments or divisions that require separate financial tracking.
  - **Replacing an Existing Cost Center**: When modifications are needed, the PUT endpoint can replace an existing Cost Center resource. This includes updating information like the Cost Center's description, associated budget, or other critical details, while the Code remains permanent and unchangeable.
  - **Resource Management**: The PUT endpoint ensures that Cost Centers are accurately reflected in the system, supporting effective cost management and financial reporting.
  
  **Note**
  
  - **Permanence of Cost Center Codes**: Once a Cost Center Code is assigned, it cannot be changed or deleted. The PUT endpoint allows for editing other aspects of the Cost Center but keeps the Code immutable.
  - **Code Compatibility**: To ensure seamless integration across different systems, Cost Center Codes must be numeric only if employees use time clocks or kiosk tablets. Additionally, these codes should not include leading zeros or special characters.
  - **Deactivating a cost center**: Employees need to be removed from the cost center before it can be deactivated.
  `,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"},"level":{"type":"number","format":"int32","description":"The level or rank of the cost center within the organizational hierarchy, indicating its position and importance within the organization's structure."},"code":{"type":"string","description":"A code or label representing the cost center, aiding in its categorization and differentiation within the organization's financial and operational framework."},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."},"testMode":{"type":"boolean","default":false,"description":"If true all responses are mocked and generated randomly."},"requestBody":{"required":["name"],"type":"object","properties":{"name":{"minLength":1,"type":"string","description":"The name or title of the cost center, offering a clear and descriptive label for easy recognition and understanding of its role and responsibilities."},"isActive":{"type":"boolean","description":"An indicator denoting the current status or active state of the cost center, assisting in management and decision-making regarding financial operations and allocation."}},"additionalProperties":{"type":"object","nullable":true},"description":"Upsert cost center payload."}},"required":["companyId","level","code"]},
      method: "put",
      pathTemplate: "/apiHub/corehr/v1/companies/{companyId}/costCenterLevels/{level}/costCenters/{code}",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"level","in":"path"},{"name":"code","in":"path"},{"name":"Authorization","in":"header"},{"name":"testMode","in":"header"}],
      requestBodyContentType: "application/json",
      securityRequirements: []
    }],
    ["getapihubpayrollv1companiesearnings", {
      name: "getapihubpayrollv1companiesearnings",
      description: `**Summary Description**
  
  The GET Earning Codes List by Company ID endpoint, retrieves a comprehensive list of Earning Codes from the Paylocity system with each call. Earning codes, also known as earning kinds or pay codes, are alphanumeric or numeric labels employed by organizations to classify and monitor various forms of earnings or income that employees get as part of their compensation. These codes have multiple crucial applications in payroll management, accounting, and compensation administration. Pagination can be achieved by using the "earnings" parameter and specifying the values of "limit" and "offset" to decide the quantity of records to be retrieved. The utilization of the "limit" option permits the user to restrict the quantity of rows that are retrieved from a query, whereas the "offset" option enables the omission of a designated number of rows preceding the commencement of the result set. The utilization of both the limit and offset parameters in a query allows for the skipping of rows as well as the restriction of the number of rows returned.
  
  **Use Cases**
  
  - The API enables payroll departments to oversee earning codes linked to various forms of compensation, such as standard salary, overtime, bonuses, and incentives. This guarantees precise and effective payroll computations.
  - Compensation Management: HR teams can employ the API to view earning codes for diverse work titles and staff groups. This allows firms to maintain alignment with compensation policies and industry norms.
  - Benefits Administration involves the inclusion of earning codes that contain not just wage components but also other benefits like as health insurance, retirement contributions, and stock options. The API facilitates the monitoring and administration of these varied compensation components.
  - Time and Attendance Integration: By integrating with time and attendance systems, the API may automate the computation of earnings using data on hours worked, shifts, and attendance.
  `,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."},"includeTotalCount":{"type":"boolean","default":true,"description":"A boolean value representing whether the API should return the total number of resources available (even though only a subset may be returned). When includeTotalCount=true, then the X-Pcty-Total-Count response header should be added to the response and will specify the total number of records available. APIs that support X-Pcty-Total-Count should include this parameter in their specification."},"testMode":{"type":"boolean","default":false,"description":"If true all responses are mocked and generated randomly."},"limit":{"type":"number","format":"int32","default":20,"description":"Number of earning codes per page.\r\n                **Default Value:** 20\r\n                **Maximum Value:** 100"},"offset":{"type":"number","format":"int32","default":0,"description":"Pagination offset."}},"required":["companyId"]},
      method: "get",
      pathTemplate: "/apiHub/payroll/v1/companies/{companyId}/earnings",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"Authorization","in":"header"},{"name":"includeTotalCount","in":"query"},{"name":"testMode","in":"header"},{"name":"limit","in":"query"},{"name":"offset","in":"query"}],
      requestBodyContentType: undefined,
      securityRequirements: []
    }],
    ["getapihubpayrollv1companiesdeductions", {
      name: "getapihubpayrollv1companiesdeductions",
      description: `**Summary Description**
  
  The GET Deduction Codes by list by Company ID endpoint allows users to retrieve a comprehensive list of  Deduction Codes details from a client's Paylocity instance. To use this endpoint, the Paylocity “deductions” parameter must be specified. Deduction Codes are alphanumeric or numeric identifiers used in financial and accounting systems to categorize and track various types of deductions. These deductions can include expenses, withholdings, reductions in pay, or other adjustments made to an individual's or organization's financial records. Pagination can be achieved by using the "deductions" parameter and specifying the values of "limit" and "offset" to decide the quantity of records to be retrieved. The utilization of the "limit" option permits the user to restrict the quantity of rows that are retrieved from a query, whereas the "offset" option enables the omission of a designated number of rows preceding the commencement of the result set. The utilization of both the limit and offset parameters in a query allows for the skipping of rows as well as the restriction of the number of rows returned.
  
  **Use Cases**
  
  - Accounts Receivable: Deduction codes can be utilized to monitor discounts, allowances, or modifications applied to invoices or accounts payable.
  - Taxes: Various tax jurisdictions employ deduction codes to describe the specific sort of tax being subtracted, such as federal income tax, state income tax, or local taxes.
  - Advantages: Deduction codes can be utilized to classify deductions associated with employee benefits like as health insurance, dental coverage, or retirement plans.
  - Loans and Debts: Lenders and financial organizations utilize deduction codes to precisely indicate the reason for deductions made for loan repayments, interest, or fees.
  - Expense Reporting: Deduction codes are utilized in company cost reporting to classify and monitor several types of spending, including travel, meals, entertainment, and office supplies.
  `,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."},"includeTotalCount":{"type":"boolean","default":true,"description":"A boolean value representing whether the API should return the total number of resources available (even though only a subset may be returned). When includeTotalCount=true, then the X-Pcty-Total-Count response header should be added to the response and will specify the total number of records available. APIs that support X-Pcty-Total-Count should include this parameter in their specification."},"testMode":{"type":"boolean","default":false,"description":"If true all responses are mocked and generated randomly."},"offset":{"type":"number","format":"int32","default":0,"description":"Pagination offset."},"limit":{"type":"number","format":"int32","default":50,"description":"Number of deduction codes per page.\r\n                **Default Value:** 20\r\n                **Maximum Value:** 100"}},"required":["companyId"]},
      method: "get",
      pathTemplate: "/apiHub/payroll/v1/companies/{companyId}/deductions",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"Authorization","in":"header"},{"name":"includeTotalCount","in":"query"},{"name":"testMode","in":"header"},{"name":"offset","in":"query"},{"name":"limit","in":"query"}],
      requestBodyContentType: undefined,
      securityRequirements: []
    }],
    ["getapihubpayrollv1companiespayfrequencies", {
      name: "getapihubpayrollv1companiespayfrequencies",
      description: `**Summary Description**
  
  The GET Pay Frequency Code by list by Company ID endpoint allows users to retrieve a comprehensive list of Pay Frequency Code details from a client's Paylocity instance. To use this endpoint, the Paylocity “payFrequencies” parameter must be specified. A Frequency Code in HR & Payroll determines the criteria for applying an Earning, Deduction, or Agency Code during payroll processing. Pagination can be achieved by using the "payFrequencies" parameter and specifying the values of "limit" and "offset" to decide the quantity of records to be retrieved. The utilization of the "limit" option permits the user to restrict the quantity of rows that are retrieved from a query, whereas the "offset" option enables the omission of a designated number of rows preceding the commencement of the result set. The utilization of both the limit and offset parameters in a query allows for the skipping of rows as well as the restriction of the number of rows returned. “includeTotalCount” parameter can also be used to return the total number of resources available (even though only a subset may be returned).
  
  **Use Cases**
  
  - A company uses pay frequency code to determine how often pay is distributed to employees whether it be Daily, Weekly, Bi-Weekly, or Semi-Monthly. In order for an Earning/Deduction/Agency related with a company's Weekly payroll frequency to trigger again, there must be a minimum of 5 days between Check Dates. The subsequent Check Date will be determined by adding 6 days to the date of the previous Check Date when the deduction took place.
    - If the frequency of Earning/Deduction/Agency includes a Block Week, and the subsequent Check Date that qualifies comes within the blocked week, HR & Payroll will prevent the deduction.
    - If the frequency is Bi-Weekly or Semi-Monthly, a minimum of 10 days must elapse between Check Dates. The deduction will occur again on the 10th day after the last Check Date.
  The following frequencies are exempt from cool down intervals. The Payroll and HR department considers the utilization of deductions in the current month and the activation status of a Block Week.
    - The frequency of the Monthly take Last Week (ML) will only be applied if the date corresponds to the last Check Date on the calendar and the Earning/Deduction/Agency Code has not yet been applied for the month.
  - The Q1W frequency will only be applicable if the payroll is the initial payroll of the quarter and the Earning/Deduction/Agency Code has not been applied for the quarter yet.
  The frequency of Block Week 5 (BL5) will be applicable only if the Check Date occurs on or before the 28th and there has been a gap of more than 5 days since the last Check Date for the Earning/Deduction/Agency Code to be applied.
  - The company operates on a biweekly pay schedule with a check date occurring every five out of four weeks. Subsequently, the corporation implements a Bi-Weekly deduction frequency, commencing 2 days after the initial deduction. If a Check Date occurs on 5/11, the deduction will still be processed, regardless of the fact that there is less than a 10-day gap between Check Dates. If a check with a date of 5/17 is processed, the deduction will not be subtracted.
  `,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."},"testMode":{"type":"boolean","default":false,"description":"If true all responses are mocked and generated randomly."}},"required":["companyId"]},
      method: "get",
      pathTemplate: "/apiHub/payroll/v1/companies/{companyId}/payFrequencies",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"Authorization","in":"header"},{"name":"testMode","in":"header"}],
      requestBodyContentType: undefined,
      securityRequirements: []
    }],
    ["getapihubpayrollv1companiestaxes", {
      name: "getapihubpayrollv1companiestaxes",
      description: `**Summary Description**
  
  The GET Tax Codes by list by Company ID endpoint allows users to retrieve a comprehensive list of Tax Codes details from a client's Paylocity instance. To use this endpoint, the Paylocity “taxes” parameter must be specified. Tax codes serve as a means for tax authorities and organizations to categorize various forms of taxes and tax-related data. These codes facilitate precise computation, reporting, and adherence to diverse tax responsibilities. Tax codes are jurisdiction-specific and can vary substantially between different locations.
  
  Pagination can be achieved by using the "taxes" parameter and specifying the values of "limit" and "offset" to decide the quantity of records to be retrieved. The utilization of the "limit" option permits the user to restrict the quantity of rows that are retrieved from a query, whereas the "offset" option enables the omission of a designated number of rows preceding the commencement of the result set. The utilization of both the limit and offset parameters in a query allows for the skipping of rows as well as the restriction of the number of rows returned. “includeTotalCount” parameter can also be used to return the total number of resources available (even though only a subset may be returned).
  
  **Use Cases**
  
  - The process of calculating income tax involves the utilization of tax codes, which serve to calculate the appropriate income tax rates and brackets for both people and businesses. Distinct tax codes may be applicable to different income thresholds, filing statuses, and categories of income (such as capital gains and dividends).
  - Payroll Deductions: Employers utilize tax codes to accurately compute and retain the appropriate amount of income tax, Social Security tax, and Medicare tax from employees' wages. These codes serve to guarantee that employees have the accurate amount of tax deducted throughout the year.
   `,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."},"testMode":{"type":"boolean","default":false,"description":"If true all responses are mocked and generated randomly."},"includeTotalCount":{"type":"boolean","default":true,"description":"A boolean value representing whether the API should return the total number of resources available (even though only a subset may be returned). When includeTotalCount=true, then the X-Pcty-Total-Count response header should be added to the response and will specify the total number of records available. APIs that support X-Pcty-Total-Count should include this parameter in their specification."},"offset":{"type":"number","format":"int32","default":0,"description":"Pagination offset."},"limit":{"type":"number","format":"int32","default":50,"description":"Number of tax codes per page.\r\n                **Default Value:** 20\r\n                **Maximum Value:** 100"}},"required":["companyId"]},
      method: "get",
      pathTemplate: "/apiHub/payroll/v1/companies/{companyId}/taxes",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"Authorization","in":"header"},{"name":"testMode","in":"header"},{"name":"includeTotalCount","in":"query"},{"name":"offset","in":"query"},{"name":"limit","in":"query"}],
      requestBodyContentType: undefined,
      securityRequirements: []
    }],
    ["getapihubpositionmanagementv1companiesworkercompensationcodes", {
      name: "getapihubpositionmanagementv1companiesworkercompensationcodes",
      description: `**Summary Description**
  
  The GET Workers Compensation Codes List by Company ID endpoint, retrieves a comprehensive list of Workers Compensation Codes from the Paylocity system with each call. Workers' compensation codes, also known as workers' compensation class codes or class codes, are standardized numeric or alphanumeric identifiers utilized to define and categorize various work kinds or job duties inside the workers' compensation insurance system. Workers' compensation insurance offers compensation to employees who experience work-related injuries or illnesses, and these codes are essential in determining insurance rates and processing claims.
  Pagination can be achieved by using the "workerCompensationCodes" parameter and specifying the values of "limit" and "offset" to decide the quantity of records to be retrieved. The utilization of the "limit" option permits the user to restrict the quantity of rows that are retrieved from a query, whereas the "offset" option enables the omission of a designated number of rows preceding the commencement of the result set. The utilization of both the limit and offset parameters in a query allows for the skipping of rows as well as the restriction of the number of rows returned.
  
  **Use Cases**
  
  - Locations are addresses used as work or hiring locations. Each worker should have an assigned work location. The purpose of a work location is to verify workers' taxes. Work locations in HR & Payroll will show in Paylocity's Recruiting platform when creating job postings.
  - This information will also transfer to external job sites if using Recruiting Enhanced Features. Currently, only one work location can be added to each job listing.
  `,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."},"includeTotalCount":{"type":"boolean","default":true,"description":"A boolean value representing whether the API should return the total number of resources available (even though only a subset may be returned). When includeTotalCount=true, then the X-Pcty-Total-Count response header should be added to the response and will specify the total number of records available. APIs that support X-Pcty-Total-Count should include this parameter in their specification."},"testMode":{"type":"boolean","default":false,"description":"If true all responses are mocked and generated randomly."},"limit":{"type":"number","format":"int32","default":20,"description":"Number of workers compensation codes per page.\r\n                **Default Value:** 20\r\n                **Maximum Value:** 100"},"offset":{"type":"number","format":"int32","default":0,"description":"Pagination offset."}},"required":["companyId"]},
      method: "get",
      pathTemplate: "/apiHub/positionManagement/v1/companies/{companyId}/workerCompensationCodes",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"Authorization","in":"header"},{"name":"includeTotalCount","in":"query"},{"name":"testMode","in":"header"},{"name":"limit","in":"query"},{"name":"offset","in":"query"}],
      requestBodyContentType: undefined,
      securityRequirements: []
    }],
    ["getapihubpositionmanagementv1companiespositions", {
      name: "getapihubpositionmanagementv1companiespositions",
      description: `**Summary Description**
  
  The GET Position Codes List by Company ID endpoint, retrieves a comprehensive list of Position Codes from the Paylocity system with each call. Position codes are alphanumeric or numeric designations employed by corporations to classify and oversee various job responsibilities and positions within their workforce. These codes fulfill several crucial functions in the domains of human resources, talent management, and organizational structure.
  Pagination can be achieved by using the "positions" parameter and specifying the values of "limit" and "offset" to decide the quantity of records to be retrieved. The utilization of the "limit" option permits the user to restrict the quantity of rows that are retrieved from a query, whereas the "offset" option enables the omission of a designated number of rows preceding the commencement of the result set. The utilization of both the limit and offset parameters in a query allows for the skipping of rows as well as the restriction of the number of rows returned.
  
  **Use Cases**
  
  - Human Resources Management: HR departments often use position codes to categorize and manage job roles within an organization. The API can facilitate the creation, updating, and retrieval of position codes, ensuring that job roles are accurately documented and maintained.
  - Payroll and Compensation Management: Position codes are crucial for determining salary scales and compensation packages. The API can be used to link position codes with salary information, simplifying payroll processing and compensation management.
  - Recruitment and Onboarding: When hiring new employees, organizations can use the API to identify vacant positions and manage the recruitment process more efficiently. It can help HR teams keep track of available job roles and their requirements.
  - Compliance and Reporting: Many regulatory agencies require organizations to report on specific job roles and positions. The API can assist in generating compliance reports by providing access to accurate position code data.
  `,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."},"includeTotalCount":{"type":"boolean","default":true,"description":"A boolean value representing whether the API should return the total number of resources available (even though only a subset may be returned). When includeTotalCount=true, then the X-Pcty-Total-Count response header should be added to the response and will specify the total number of records available. APIs that support X-Pcty-Total-Count should include this parameter in their specification."},"testMode":{"type":"boolean","default":false,"description":"If true all responses are mocked and generated randomly."},"limit":{"type":"number","format":"int32","default":20,"description":"Number of position codes per page.\r\n                **Default Value:** 20\r\n                **Maximum Value:** 100"},"offset":{"type":"number","format":"int32","default":0,"description":"Pagination offset."}},"required":["companyId"]},
      method: "get",
      pathTemplate: "/apiHub/positionManagement/v1/companies/{companyId}/positions",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"Authorization","in":"header"},{"name":"includeTotalCount","in":"query"},{"name":"testMode","in":"header"},{"name":"limit","in":"query"},{"name":"offset","in":"query"}],
      requestBodyContentType: undefined,
      securityRequirements: []
    }],
    ["getapihubpositionmanagementv1companiespaygrades", {
      name: "getapihubpositionmanagementv1companiespaygrades",
      description: `**Summary Description**
  
  The GET Pay Grades List by Company ID endpoint, retrieves a comprehensive list of Pay Grades  from the Paylocity system with each call. Pay grades, commonly referred to as pay scales or wage ranges, are numerical or alphanumeric categorizations employed by corporations to classify tasks or positions according to their relative worth or intricacy within the organization. Pay grades are commonly linked to a spectrum of salaries and fulfill various crucial functions in human resources and pay administration.
  Pagination can be achieved by using the "payGrades" parameter and specifying the values of "limit" and "offset" to decide the quantity of records to be retrieved. The utilization of the "limit" option permits the user to restrict the quantity of rows that are retrieved from a query, whereas the "offset" option enables the omission of a designated number of rows preceding the commencement of the result set. The utilization of both the limit and offset parameters in a query allows for the skipping of rows as well as the restriction of the number of rows returned.
  Pay Grades are otherwise optional in HR & Payroll and do not affect any rate calculations that will cause changes in payroll.
  
  **Use Cases**
  
  - Configure and specify Current Pay Rates for employees in HR & Payroll. Certain reports, such as the CMS PBJ Report, also known as the Centers for Medicare & Medicaid Services Payroll-Based Journal Report, and other specially configured Custom Reports reference Pay Grades.
  `,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."},"includeTotalCount":{"type":"boolean","default":true,"description":"A boolean value representing whether the API should return the total number of resources available (even though only a subset may be returned). When includeTotalCount=true, then the X-Pcty-Total-Count response header should be added to the response and will specify the total number of records available. APIs that support X-Pcty-Total-Count should include this parameter in their specification."},"testMode":{"type":"boolean","default":false,"description":"If true all responses are mocked and generated randomly."},"limit":{"type":"number","format":"int32","default":20,"description":"Number of pay grades per page.\r\n                **Default Value:** 20\r\n                **Maximum Value:** 100"},"offset":{"type":"number","format":"int32","default":0,"description":"Pagination offset."}},"required":["companyId"]},
      method: "get",
      pathTemplate: "/apiHub/positionManagement/v1/companies/{companyId}/payGrades",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"Authorization","in":"header"},{"name":"includeTotalCount","in":"query"},{"name":"testMode","in":"header"},{"name":"limit","in":"query"},{"name":"offset","in":"query"}],
      requestBodyContentType: undefined,
      securityRequirements: []
    }],
    ["getapihubpayrollv1companiesjobs", {
      name: "getapihubpayrollv1companiesjobs",
      description: `**Summary Description**
  
  The GET Job Code List by Company ID endpoint, retrieves a comprehensive list of Job Codes from the Paylocity system with each call. Pagination can be achieved by using the "jobs" parameter and specifying the values of "limit" and "offset" to decide the quantity of records to be retrieved. The utilization of the "limit" option permits the user to restrict the quantity of rows that are retrieved from a query, whereas the "offset" option enables the omission of a designated number of rows preceding the commencement of the result set. The utilization of both the limit and offset parameters in a query allows for the skipping of rows as well as the restriction of the number of rows returned
  
  **Use Cases**
  
  - The GET a list of Job Codes API endpoint allows users to fetch specific Job Code details from a client's Paylocity instance. To use this endpoint, the Paylocity Company ID must be specified
  - The 'Get Job Codes List by Company ID' endpoint empowers API users to fetch a comprehensive list of Job Codes alongside their relevant data
  `,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max."},"testMode":{"type":"boolean","description":"If true all responses are mocked and generated randomly."},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."},"filter":{"type":"string","description":"The API Filter, by defining specific conditions, enables developers to fine-tune data from API calls for more precise results, enhancing application efficiency and user-friendliness. For more information review the Filtering page."},"limit":{"type":"number","format":"int32","default":20,"description":"Number of jobs per page.\r\n                **Default Value:** 20\r\n                **Maximum Value:** 100"},"offset":{"type":"number","format":"int32","default":0,"description":"Pagination offset."}},"required":["companyId"]},
      method: "get",
      pathTemplate: "/apiHub/payroll/v1/companies/{companyId}/jobs",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"testMode","in":"header"},{"name":"Authorization","in":"header"},{"name":"filter","in":"query"},{"name":"limit","in":"query"},{"name":"offset","in":"query"}],
      requestBodyContentType: undefined,
      securityRequirements: []
    }],
    ["postapihubpayrollv1companiesjobs", {
      name: "postapihubpayrollv1companiesjobs",
      description: `**Summary Description**
  
  The POST Single Job Code endpoint enables users to create precise values regarding Job Codes from the Paylocity instance of a client. In order to utilize this endpoint, it is necessary to provide the payload values in accordance with the established standards of the Paylocity API, as specified for the respective object type and description. It is required to provide the Company ID in the endpoint and the specifications of the Job Code in the payload body
  
  **Use Cases**
  
  - This API endpoint will allow an API user to create a Job Code record for a specific company ID
  - Job Codes must be added before running payroll
  `,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."},"requestBody":{"required":["code"],"type":"object","properties":{"code":{"minLength":1,"type":"string","description":"A Job Code may contain up to 10 alpha-numeric characters. Spaces or special characters are not allowed"},"description":{"type":["string","null"],"description":"The Job Code description may contain up to 40 alpha-numeric characters. Spaces or special characters are not allowed"},"isActive":{"type":["boolean","null"],"description":"Active (Yes/No). The job code is currently active or inactive"},"isCertified":{"type":["boolean","null"],"description":"Certified Job (Yes/No). This is a certified job code as per the CMS PBJ Report (Centers for Medicare and Medicaid Services Payroll Based Journal) job costing report by industry"},"payEntry":{"type":"object","properties":{"shift":{"type":["string","null"],"description":"This field is used to enter an override company-defined shift code to be charged by the employee"},"rateCode":{"type":["string","null"],"description":"The employee’s pay rate. If no rate is entered, the employees base rate will be used"},"rate":{"type":["number","null"],"description":"The rate of pay for the job code","format":"double"},"addingRateConstant":{"type":["number","null"],"description":"Rate + or + Is employee pay rate + the SD Schedule Differential plus or times the bonus","format":"double"},"multiplyingRateConstant":{"type":["number","null"],"description":"Rate X or + Is employee pay rate X the SD Schedule Differential plus or times the bonus","format":"double"},"workerComputedCode":{"type":["string","null"],"description":"The company defined workers comp code for work performed by the employee"},"tax":{"type":"object","properties":{"state":{"type":["string","null"],"description":"State"},"local1":{"type":["string","null"],"description":"This is the local tax code used for the job code"},"local2":{"type":["string","null"],"description":"This  is the second local tax code used for the job code"},"local3":{"type":["string","null"],"description":"This is the third local tax code  used for the job code"}},"additionalProperties":{"type":"object","nullable":true},"description":"State Tax"}},"additionalProperties":{"type":"object","nullable":true},"description":"Override Pay Entry Only"},"address":{"type":"object","properties":{"line1":{"type":["string","null"],"description":"The address where the job code will be used"},"line2":{"type":["string","null"],"description":"The address where the job code will be used"},"city":{"type":["string","null"],"description":"The city where the job code will be used"},"state":{"type":["string","null"],"description":"The state where the job code will be used"},"zip":{"type":["string","null"],"description":"The zip code where the job code will be used"},"county":{"type":["string","null"],"description":"The county where the job code will be used"},"country":{"type":["string","null"],"description":"The country where the job code will be used"}},"additionalProperties":{"type":"object","nullable":true},"description":"Address"},"payrollBasedJournal":{"type":"object","properties":{"jobTitleCode":{"type":["string","null"],"description":"This is a Job Title Code for which the certified job code CMS PBJ Report (Centers for Medicare and Medicaid Services Payroll Based Journal) will be utilized to calculate labor costs"},"facilityId":{"type":["string","null"],"description":"This is a Facility id for which the certified job code CMS PBJ Report (Centers for Medicare and Medicaid Services Payroll Based Journal) will be utilized to calculate labor costs"},"stateId":{"type":["string","null"],"description":"This is a State ID for which the certified job code CMS PBJ Report (Centers for Medicare and Medicaid Services Payroll Based Journal) will be utilized to calculate labor costs"}},"additionalProperties":{"type":"object","nullable":true},"description":"CMS/PBJ Data Only"}},"additionalProperties":{"type":"object","nullable":true},"description":"Job Code data"}},"required":["companyId"]},
      method: "post",
      pathTemplate: "/apiHub/payroll/v1/companies/{companyId}/jobs",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"Authorization","in":"header"}],
      requestBodyContentType: "application/json",
      securityRequirements: []
    }],
    ["getapihubpayrollv1companiesjobsbyjobcode", {
      name: "getapihubpayrollv1companiesjobsbyjobcode",
      description: `**Summary Description**
  
  The GET Single Job Code API endpoint allows users to fetch specific Job Code details from a client's Paylocity instance. To use this endpoint, the Paylocity Company ID and Job Code must be specified
  
  **Use Cases**
  
  - This API endpoint will allow an API user to retrieve a Job Code record for a specific company ID and Job Code ID
  `,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"},"jobCode":{"type":"string","description":"A specific identifier or label assigned to individual tasks, projects, or assignments within a company.\r\n                **Allowable Values:**\r\n                A Job Code may contain up to 10 alpha-numeric characters. Spaces or special characters are not allowed"},"testMode":{"type":"boolean","description":"If true all responses are mocked and generated randomly"},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."}},"required":["companyId","jobCode"]},
      method: "get",
      pathTemplate: "/apiHub/payroll/v1/companies/{companyId}/jobs/{jobCode}",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"jobCode","in":"path"},{"name":"testMode","in":"header"},{"name":"Authorization","in":"header"}],
      requestBodyContentType: undefined,
      securityRequirements: []
    }],
    ["putapihubpayrollv1companiesjobsbyjobcode", {
      name: "putapihubpayrollv1companiesjobsbyjobcode",
      description: `**Summary Description**
  
  The PUT Job Code endpoint enables users to update precise values regarding Job Codes from the Paylocity instance of a client. In order to utilize this endpoint, it is necessary to provide the payload values in accordance with the established standards of the Paylocity API, as specified for the respective object type and description.  It is required to provide both the Company ID and the Job Code ID in the endpoint
  
  **Use Cases**
  
  - This API endpoint will allow an API user to update a Job Code record for a specific company ID and Job Code ID
  - Job Codes must be added before running payroll
  `,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"},"jobCode":{"type":"string","description":"A specific identifier or label assigned to individual tasks, projects, or assignments within a company.\r\n                **Allowable Values:**\r\n                A Job Code may contain up to 10 alpha-numeric characters. Spaces or special characters are not allowed"},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."},"requestBody":{"type":"object","properties":{"description":{"type":["string","null"],"description":"The Job Code description may contain up to 40 alpha-numeric characters. Spaces or special characters are not allowed"},"isActive":{"type":["boolean","null"],"description":"Active (Yes/No). The job code is currently active or inactive"},"isCertified":{"type":["boolean","null"],"description":"Certified Job (Yes/No). This is a certified job code as per the CMS PBJ Report (Centers for Medicare and Medicaid Services Payroll Based Journal) job costing report by industry"},"payEntry":{"type":"object","properties":{"shift":{"type":["string","null"],"description":"This field is used to enter an override company-defined shift code to be charged by the employee"},"rateCode":{"type":["string","null"],"description":"The employee’s pay rate. If no rate is entered, the employees base rate will be used"},"rate":{"type":["number","null"],"description":"The rate of pay for the job code","format":"double"},"addingRateConstant":{"type":["number","null"],"description":"Rate + or + Is employee pay rate + the SD Schedule Differential plus or times the bonus","format":"double"},"multiplyingRateConstant":{"type":["number","null"],"description":"Rate X or + Is employee pay rate X the SD Schedule Differential plus or times the bonus","format":"double"},"workerComputedCode":{"type":["string","null"],"description":"The company defined workers comp code for work performed by the employee"},"tax":{"type":"object","properties":{"state":{"type":["string","null"],"description":"State"},"local1":{"type":["string","null"],"description":"This is the local tax code used for the job code"},"local2":{"type":["string","null"],"description":"This  is the second local tax code used for the job code"},"local3":{"type":["string","null"],"description":"This is the third local tax code  used for the job code"}},"additionalProperties":{"type":"object","nullable":true},"description":"State Tax"}},"additionalProperties":{"type":"object","nullable":true},"description":"Override Pay Entry Only"},"address":{"type":"object","properties":{"line1":{"type":["string","null"],"description":"The address where the job code will be used"},"line2":{"type":["string","null"],"description":"The address where the job code will be used"},"city":{"type":["string","null"],"description":"The city where the job code will be used"},"state":{"type":["string","null"],"description":"The state where the job code will be used"},"zip":{"type":["string","null"],"description":"The zip code where the job code will be used"},"county":{"type":["string","null"],"description":"The county where the job code will be used"},"country":{"type":["string","null"],"description":"The country where the job code will be used"}},"additionalProperties":{"type":"object","nullable":true},"description":"Address"},"payrollBasedJournal":{"type":"object","properties":{"jobTitleCode":{"type":["string","null"],"description":"This is a Job Title Code for which the certified job code CMS PBJ Report (Centers for Medicare and Medicaid Services Payroll Based Journal) will be utilized to calculate labor costs"},"facilityId":{"type":["string","null"],"description":"This is a Facility id for which the certified job code CMS PBJ Report (Centers for Medicare and Medicaid Services Payroll Based Journal) will be utilized to calculate labor costs"},"stateId":{"type":["string","null"],"description":"This is a State ID for which the certified job code CMS PBJ Report (Centers for Medicare and Medicaid Services Payroll Based Journal) will be utilized to calculate labor costs"}},"additionalProperties":{"type":"object","nullable":true},"description":"CMS/PBJ Data Only"}},"additionalProperties":{"type":"object","nullable":true},"description":"Job Code data"}},"required":["companyId","jobCode"]},
      method: "put",
      pathTemplate: "/apiHub/payroll/v1/companies/{companyId}/jobs/{jobCode}",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"jobCode","in":"path"},{"name":"Authorization","in":"header"}],
      requestBodyContentType: "application/json",
      securityRequirements: []
    }],
    ["deleteapihubpayrollv1companiesjobsbyjobcode", {
      name: "deleteapihubpayrollv1companiesjobsbyjobcode",
      description: `**Summary Description**
  
  The DELETE Job Code endpoint enables users to delete a single job code and it’s values from the Paylocity instance of a client. In order to utilize this endpoint, it is required to provide both the Company ID and the Job Code ID in the endpoint
  
  **Best Practice Notice:** If you delete a job code which has been used in payroll, your reports may be impacted. The best practice is to make the job code inactive instead of deleting the entire job code
  
  **Use Cases**
  
  - This API endpoint will allow an API user to delete a Job Code record for a specific company ID and Job Code ID
  `,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"},"jobCode":{"type":"string","description":"A specific identifier or label assigned to individual tasks, projects, or assignments within a company.\r\n                **Allowable Values:**\r\n                A Job Code may contain up to 10 alpha-numeric characters. Spaces or special characters are not allowed"},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."}},"required":["companyId","jobCode"]},
      method: "delete",
      pathTemplate: "/apiHub/payroll/v1/companies/{companyId}/jobs/{jobCode}",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"jobCode","in":"path"},{"name":"Authorization","in":"header"}],
      requestBodyContentType: undefined,
      securityRequirements: []
    }],
  ]);