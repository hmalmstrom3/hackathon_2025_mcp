import { McpToolDefinition } from "./definition.js";

export const toolDefinitionMap: Map<string, McpToolDefinition> = new Map([

    ["postcompliancev1companiesb6001clientonboardingstatus", {
      name: "postcompliancev1companiesb6001clientonboardingstatus",
      description: `> 🚧 Partner Restricted
  > All background check API endpoints are restricted to background check providers that have signed a Paylocity technology partnership agreement. Please reach out to Techpartnerships@paylocity.com if you would like to discuss partnership opportunities.
  
  **Summary Description**
  
  This endpoint upserts the status of the integration with companyId specified in the body
  
  **Use Cases**
  
  - Partner receives a new client intake form and sends the ‘in progress’ status to Paylocity
  - Partner and client already have an existing relationship, partner sends the ‘approved’ status for client to have access to ordering in the recruiting UI 
  - Client initiates a new client intake form. Client and partner decide not to move forward with the relationship. Partner sends the ‘rejected’ status  
  `,
      inputSchema: {"type":"object","properties":{"testMode":{"type":"boolean","description":"If true all responses are mocked and generated randomly"},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."},"requestBody":{"type":"object","properties":{"companyId":{"type":["string","null"],"description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity. \r\n    **Allowable Values:**\r\n    9 char max"},"status":{"enum":["InProgress","Approved","Rejected","Suspended"],"type":["string","null"],"description":"The status to indicate the onboarding stage for a customer where the account form was filled up and is currently under review by your team."}},"additionalProperties":false,"description":"The onboarding details"}},"required":["Authorization"]},
      method: "post",
      pathTemplate: "/compliance/v1/companies/b6001/clientOnboarding/status",
      executionParameters: [{"name":"testMode","in":"header"},{"name":"Authorization","in":"header"}],
      requestBodyContentType: "application/json",
      securityRequirements: [{"Bearer":[]}]
    }],
    ["postcompliancev1companiesclientonboardingbilling", {
      name: "postcompliancev1companiesclientonboardingbilling",
      description: `> 🚧 Partner Restricted
  > All background check API endpoints are restricted to background check providers that have signed a Paylocity technology partnership agreement. Please reach out to Techpartnerships@paylocity.com if you would like to discuss partnership opportunities.
  
  **Summary Description**
  
  This endpoint inserts the billing code and its status by companyId for a given client
  
  **Use Cases**
  
  - Partner wants to send over one or multiple billing codes for a client, can be when onboarding a new client, or can be when client adds new billing codes to their company
  - Partner wants to make bulk changes to billing codes to make them either active or inactive for a client
  `,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"},"testMode":{"type":"boolean","description":"If true all responses are mocked and generated randomly"},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."},"requestBody":{"type":"object","properties":{"billingCodes":{"type":["array","null"],"items":{"type":"object","properties":{"billingCode":{"type":"string","description":"Billing code associated with the screening order. This billing code is created on the partner side for a specific company.","nullable":true},"isActive":{"type":"boolean","description":"(Optional, if not provided – TRUE) A Boolean value indicating if the package is active.\r\n    **Allowable Values:**\r\n    true, false"}},"additionalProperties":false,"description":"Billing code DTO payload."},"description":"Array of billing codes."}},"additionalProperties":false,"description":"Billing codes request payload."}},"required":["companyId","Authorization"]},
      method: "post",
      pathTemplate: "/compliance/v1/companies/{companyId}/clientOnboarding/billing",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"testMode","in":"header"},{"name":"Authorization","in":"header"}],
      requestBodyContentType: "application/json",
      securityRequirements: [{"Bearer":[]}]
    }],
    ["getcompliancev1companiesclientonboardingpartnerbilling", {
      name: "getcompliancev1companiesclientonboardingpartnerbilling",
      description: `> 🚧 Partner Restricted
  > All background check API endpoints are restricted to background check providers that have signed a Paylocity technology partnership agreement. Please reach out to Techpartnerships@paylocity.com if you would like to discuss partnership opportunities.
  
  **Summary Description**
  
  This endpoint returns billing codes for the companyId querying
  
  **Use Cases**
  
  - Partner needs to confirm all billing codes have been added into Paylocity for a client
  - Partner needs to confirm the status of billing codes that have been added for a client`,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"},"testMode":{"type":"boolean","description":"If true all responses are mocked and generated randomly"},"includeTotalCount":{"type":"boolean","description":"If true it will add X-Pcty-Total-Count header with total count for this specific query."},"offset":{"type":"number","format":"int32","default":0,"description":"Pagination offset."},"limit":{"type":"number","format":"int32","default":50,"description":"Pagination limit. Max value 100."},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."}},"required":["companyId","Authorization"]},
      method: "get",
      pathTemplate: "/compliance/v1/companies/{companyId}/clientOnboarding/partner/billing",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"testMode","in":"header"},{"name":"includeTotalCount","in":"query"},{"name":"offset","in":"query"},{"name":"limit","in":"query"},{"name":"Authorization","in":"header"}],
      requestBodyContentType: undefined,
      securityRequirements: [{"Bearer":[]}]
    }],
    ["deletecompliancev1companiesclientonboardingbillingbybillingcode", {
      name: "deletecompliancev1companiesclientonboardingbillingbybillingcode",
      description: `> ❗️ This endpoint is being deprecated in the Fall of 2025 
  > All new development should be [using the newest version of this endpoint](https://developer.paylocity.com/integrations/reference/delete_compliance-v2-companies-companyid-clientonboarding-billingcode) 
  
   All background check API endpoints are restricted to background check providers that have signed a Paylocity technology partnership agreement. Please reach out to Techpartnerships@paylocity.com if you would like to discuss partnership opportunities.
  
  **Summary Description**
  
  This is used to delete an already registered billing code, either active or inactive, by companyId and specific billing code for a given client
  
  **Use Cases**
  
  - Partner wants to permanently delete this billing code for a client
  
  - This endpoint doesn't support billing codes containing special characters`,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"},"billingCode":{"type":"string","description":"Billing code to be deleted."},"testMode":{"type":"boolean","description":"If true all responses are mocked and generated randomly"},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."}},"required":["companyId","billingCode","Authorization"]},
      method: "delete",
      pathTemplate: "/compliance/v1/companies/{companyId}/clientOnboarding/billing/{billingCode}",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"billingCode","in":"path"},{"name":"testMode","in":"header"},{"name":"Authorization","in":"header"}],
      requestBodyContentType: undefined,
      securityRequirements: [{"Bearer":[]}]
    }],
    ["patchcompliancev1companiesclientonboardingbillingbybillingcode", {
      name: "patchcompliancev1companiesclientonboardingbillingbybillingcode",
      description: `> ❗️ This endpoint is being deprecated in the Fall of 2025 
  > All new development should be [using the newest version of this endpoint](https://developer.paylocity.com/integrations/reference/patch_compliance-v2-companies-companyid-clientonboarding-billingcode) 
  
   All background check API endpoints are restricted to background check providers that have signed a Paylocity technology partnership agreement. Please reach out to Techpartnerships@paylocity.com if you would like to discuss partnership opportunities.
  
  **Summary Description**
  
  This is used to update an already registered billing code’s status by companyId and specific billing code for a given client
  
  **Use Cases**
  
  - Partner wants to update the status of a specific billing code for a client to either make active or inactive
  
  - This endpoint doesn't support billing codes containing special characters`,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"},"billingCode":{"type":"string","description":"Billing code associated with the screening order. This billing code is created on the partner side for a specific company."},"testMode":{"type":"boolean","description":"If true all responses are mocked and generated randomly"},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."},"requestBody":{"type":"object","properties":{"isActive":{"type":"boolean","description":"A Boolean value indicating if the package is active. Optional.\r\n    **Allowable Values:**\r\n    true, false"}},"additionalProperties":false,"description":"Billing code request."}},"required":["companyId","billingCode","Authorization"]},
      method: "patch",
      pathTemplate: "/compliance/v1/companies/{companyId}/clientOnboarding/billing/{billingCode}",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"billingCode","in":"path"},{"name":"testMode","in":"header"},{"name":"Authorization","in":"header"}],
      requestBodyContentType: "application/json",
      securityRequirements: [{"Bearer":[]}]
    }],
    ["deletecompliancev2companiesclientonboardingbillingcode", {
      name: "deletecompliancev2companiesclientonboardingbillingcode",
      description: `> 🚧 Partner Restricted
  > All background check API endpoints are restricted to background check providers that have signed a Paylocity technology partnership agreement. Please reach out to Techpartnerships@paylocity.com if you would like to discuss partnership opportunities.
  
  **Summary Description**
  
  This is used to delete an already registered billing code, either active or inactive, by companyId and specific billing code for a given client
  
  **Use Cases**
  
  - Partner wants to permanently delete this billing code for a client
  
  V1 endpoint was deprecated to allow for special characters`,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"},"billingCode":{"type":"string","description":"Billing code associated with the screening order. This billing code is created on the partner side for a specific company. Required."},"testMode":{"type":"boolean","description":"If true all responses are mocked and generated randomly"},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."}},"required":["companyId","billingCode","Authorization"]},
      method: "delete",
      pathTemplate: "/compliance/v2/companies/{companyId}/clientOnboarding/billingCode",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"billingCode","in":"query"},{"name":"testMode","in":"header"},{"name":"Authorization","in":"header"}],
      requestBodyContentType: undefined,
      securityRequirements: [{"Bearer":[]}]
    }],
    ["patchcompliancev2companiesclientonboardingbillingcode", {
      name: "patchcompliancev2companiesclientonboardingbillingcode",
      description: `> 🚧 Partner Restricted
  > All background check API endpoints are restricted to background check providers that have signed a Paylocity technology partnership agreement. Please reach out to Techpartnerships@paylocity.com if you would like to discuss partnership opportunities.
  
  **Summary Description**
  
  This is used to update an already registered billing code’s status by companyId and specific billing code for a given client
  
  **Use Cases**
  
  - Partner wants to update the status of a specific billing code for a client to either make active or inactive*
  
  V1 endpoint was deprecated to allow for special characters`,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"},"billingCode":{"type":"string","description":"Billing code associated with the screening order. This billing code is created on the partner side for a specific company. Required."},"testMode":{"type":"boolean","description":"If true all responses are mocked and generated randomly"},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."},"requestBody":{"type":"object","properties":{"isActive":{"type":"boolean","description":"A Boolean value indicating if the package is active. Optional.\r\n    **Allowable Values:**\r\n    true, false"}},"additionalProperties":false,"description":"Billing code request."}},"required":["companyId","billingCode","Authorization"]},
      method: "patch",
      pathTemplate: "/compliance/v2/companies/{companyId}/clientOnboarding/billingCode",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"billingCode","in":"query"},{"name":"testMode","in":"header"},{"name":"Authorization","in":"header"}],
      requestBodyContentType: "application/json",
      securityRequirements: [{"Bearer":[]}]
    }],
    ["getcompliancev1companiesb6001backgroundcheckcandidatescreeningorderssubscription", {
      name: "getcompliancev1companiesb6001backgroundcheckcandidatescreeningorderssubscription",
      description: `> 🚧 Partner Restricted
  > All background check API endpoints are restricted to background check providers that have signed a Paylocity technology partnership agreement. Please reach out to Techpartnerships@paylocity.com if you would like to discuss partnership opportunities.
  
  **Summary Description**
  
  Returns the webhook for the subscription of a new candidate screening order
  `,
      inputSchema: {"type":"object","properties":{"testMode":{"type":"boolean","description":"If true all responses are mocked and generated randomly"},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."}},"required":["Authorization"]},
      method: "get",
      pathTemplate: "/compliance/v1/companies/b6001/backgroundCheck/candidateScreeningOrders/subscription",
      executionParameters: [{"name":"testMode","in":"header"},{"name":"Authorization","in":"header"}],
      requestBodyContentType: undefined,
      securityRequirements: [{"Bearer":[]}]
    }],
    ["postcompliancev1companiesb6001backgroundcheckcandidatescreeningorderssubscription", {
      name: "postcompliancev1companiesb6001backgroundcheckcandidatescreeningorderssubscription",
      description: `> 🚧 Partner Restricted
  > All background check API endpoints are restricted to background check providers that have signed a Paylocity technology partnership agreement. Please reach out to Techpartnerships@paylocity.com if you would like to discuss partnership opportunities.
  
  **Summary Description**
  
  Register the webhook URL for the subscription of new CandidateScreeningOrder
  
  **Use Cases**
  
  - Partner provides the webhook URL for new candidate orders
  `,
      inputSchema: {"type":"object","properties":{"testMode":{"type":"boolean","description":"If true all responses are mocked and generated randomly"},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."},"requestBody":{"type":"object","properties":{"apiKey":{"type":["string","null"],"description":"Optional. The value of the x-api-key header to utilize while executing the callback.\r\n                **Allowable Values:**\r\n                50 char max"},"callbackDetails":{"type":"object","properties":{"successCallbackUrl":{"type":["string","null"],"description":"Your callback POST endpoint URL where you will receive new screening orders.\r\n    **Allowable Values:**\r\n    256 char max"},"errorCallbackUrl":{"type":["string","null"],"description":"Optional. Your callback POST endpoint where you will receive errors occured during the POST a new screening order.\r\n    **Allowable Values:**\r\n    256 char max"}},"additionalProperties":false,"description":"Callback Details"},"callerDetails":{"type":"object","properties":{"callerName":{"type":["string","null"],"description":"This is a field used to identify the partner, this typically is the company name.\r\n    **Allowable Values:**\r\n    50 char max"}},"additionalProperties":false}},"additionalProperties":false,"description":"The callback information"}},"required":["Authorization"]},
      method: "post",
      pathTemplate: "/compliance/v1/companies/b6001/backgroundCheck/candidateScreeningOrders/subscription",
      executionParameters: [{"name":"testMode","in":"header"},{"name":"Authorization","in":"header"}],
      requestBodyContentType: "application/json",
      securityRequirements: [{"Bearer":[]}]
    }],
    ["deletecompliancev1companiesb6001backgroundcheckcandidatescreeningorderssubscriptionbycallbackid", {
      name: "deletecompliancev1companiesb6001backgroundcheckcandidatescreeningorderssubscriptionbycallbackid",
      description: `> 🚧 Partner Restricted
  > All background check API endpoints are restricted to background check providers that have signed a Paylocity technology partnership agreement. Please reach out to Techpartnerships@paylocity.com if you would like to discuss partnership opportunities.
  
  **Summary Description**
  
  Deletes the webhook
  
  `,
      inputSchema: {"type":"object","properties":{"callbackId":{"type":"string","format":"uuid","description":"The GUID of the Callback URL returned by the POST or GET method"},"testMode":{"type":"boolean","description":"If true all responses are mocked and generated randomly"},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."}},"required":["callbackId","Authorization"]},
      method: "delete",
      pathTemplate: "/compliance/v1/companies/b6001/backgroundCheck/candidateScreeningOrders/subscription/{callbackId}",
      executionParameters: [{"name":"callbackId","in":"path"},{"name":"testMode","in":"header"},{"name":"Authorization","in":"header"}],
      requestBodyContentType: undefined,
      securityRequirements: [{"Bearer":[]}]
    }],
    ["getcompliancev1companiesbackgroundcheckscreeningpackages", {
      name: "getcompliancev1companiesbackgroundcheckscreeningpackages",
      description: `> 🚧 Partner Restricted
  > All background check API endpoints are restricted to background check providers that have signed a Paylocity technology partnership agreement. Please reach out to Techpartnerships@paylocity.com if you would like to discuss partnership opportunities.
  
  **Summary Description**
  
  Returns the screening packages for the companyId
  
  **Use Cases**
  
  - Partner needs to confirm that package information with Paylocity is correct and calls for the package information for a specific company ID
  `,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"},"testMode":{"type":"boolean","description":"If true all responses are mocked and generated randomly"},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."}},"required":["companyId","Authorization"]},
      method: "get",
      pathTemplate: "/compliance/v1/companies/{companyId}/backgroundCheck/screeningPackages",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"testMode","in":"header"},{"name":"Authorization","in":"header"}],
      requestBodyContentType: undefined,
      securityRequirements: [{"Bearer":[]}]
    }],
    ["postcompliancev1companiesbackgroundcheckscreeningpackages", {
      name: "postcompliancev1companiesbackgroundcheckscreeningpackages",
      description: `> 🚧 Partner Restricted
  > All background check API endpoints are restricted to background check providers that have signed a Paylocity technology partnership agreement. Please reach out to Techpartnerships@paylocity.com if you would like to discuss partnership opportunities.
  
  **Summary Description**
  
  Bulk Upsert information about screening packages
  
  **Use Cases**
  
  - Partner wants to send over multiple screening packages for a client, can be when onboarding a new client, or can be when client adds new packages to their company 
  - Partner wants to make bulk changes to screening packages to make them either active or inactive for a client 
  - Partner wants to update the prices of a client’s screening packages 
  - Partner wants to bulk add services to a packages 
  - Partner wants to add a billing code to correlate to a specific BGC package`,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"},"testMode":{"type":"boolean","description":"If true all responses are mocked and generated randomly"},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."},"requestBody":{"type":"object","properties":{"packages":{"type":["array","null"],"items":{"type":"object","properties":{"packageId":{"type":"string","description":"The Id of the Screening Package.\r\n    **Allowable Values:**\r\n    36 char max","nullable":true},"isActive":{"type":"boolean","description":"A Boolean value indicating if the package is active.\r\n    **Allowable Values:**\r\n    true, false"},"packageSummary":{"type":"string","description":"A detailed description of the background check package and what is included in the package.\r\n    **Allowable Values:**\r\n    250 char max","nullable":true},"packageName":{"type":"string","description":"The name of the specific background check package that the users will see.\r\n    **Allowable Values:**\r\n    250 char max","nullable":true},"services":{"type":"array","items":{"type":"object","properties":{"serviceName":{"type":"string","description":"The name of the specific service within a background check package that the users will see.\r\n    **Allowable Values:**\r\n    50 char max","nullable":true},"serviceSummary":{"type":"string","description":"A detailed description of the underlying service in a package.\r\n    **Allowable Values:**\r\n    250 char max","nullable":true}},"additionalProperties":false},"description":"An array of objects representing the underlying services that are included in the background check package.","nullable":true},"price":{"type":"object","properties":{"value":{"type":"number","description":"The value amount, or cost, for the package.","format":"double"},"currency":{"type":"string","description":"The currency of the price.\r\n    **Allowable Values:**\r\n    USD, EUR, GBP, CAD","nullable":true}},"additionalProperties":false,"description":"An object representing the price of the package."},"billingCode":{"type":"string","description":"Partner billing code.","nullable":true},"isInternational":{"type":"boolean","description":"Indicates whether it is international package."}},"additionalProperties":false,"description":"Screening Package information"},"description":"The list of screening packages to be upserted."}},"additionalProperties":false,"description":"The Package information"}},"required":["companyId","Authorization"]},
      method: "post",
      pathTemplate: "/compliance/v1/companies/{companyId}/backgroundCheck/screeningPackages",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"testMode","in":"header"},{"name":"Authorization","in":"header"}],
      requestBodyContentType: "application/json",
      securityRequirements: [{"Bearer":[]}]
    }],
    ["postcompliancev1companiesbackgroundcheckscreeningpackagesbypackageid", {
      name: "postcompliancev1companiesbackgroundcheckscreeningpackagesbypackageid",
      description: `> 🚧 Partner Restricted
  > All background check API endpoints are restricted to background check providers that have signed a Paylocity technology partnership agreement. Please reach out to Techpartnerships@paylocity.com if you would like to discuss partnership opportunities.
  
  **Summary Description**
  
  Upserts information about screening packages for the companyId
  
  **Use Cases**
  
  - Partner wants to send over a screening package for a client, can be when onboarding a new client, or can be when client adds a new package to their company
  - Partner wants to make a specific screening package either active or inactive for a client 
  - Partner wants to update the price of a client’s screening package 
  - Partner wants to add services to a package 
  - Partner wants to add a billing code to correlate to a specific BGC package`,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"},"packageId":{"type":"string","description":"The Id of the Screening Package.\r\n                **Allowable Values:**\r\n                36 char max"},"testMode":{"type":"boolean","description":"If true all responses are mocked and generated randomly"},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."},"requestBody":{"type":"object","properties":{"isActive":{"type":"boolean","description":"A Boolean value indicating if the package is active.\r\n    **Allowable Values:**\r\n    true, false"},"packageSummary":{"type":["string","null"],"description":"A detailed description of the background check package and what is included in the package.\r\n    **Allowable Values:**\r\n    250 char max"},"packageName":{"type":["string","null"],"description":"The name of the specific background check package that the users will see.\r\n    **Allowable Values:**\r\n    250 char max"},"services":{"type":["array","null"],"items":{"type":"object","properties":{"serviceName":{"type":"string","description":"The name of the specific service within a background check package that the users will see.\r\n    **Allowable Values:**\r\n    50 char max","nullable":true},"serviceSummary":{"type":"string","description":"A detailed description of the underlying service in a package.\r\n    **Allowable Values:**\r\n    250 char max","nullable":true}},"additionalProperties":false},"description":"An array of objects representing the underlying services that are included in the background check package."},"price":{"type":"object","properties":{"value":{"type":"number","description":"The value amount, or cost, for the package.","format":"double"},"currency":{"type":["string","null"],"description":"The currency of the price.\r\n    **Allowable Values:**\r\n    USD, EUR, GBP, CAD"}},"additionalProperties":false,"description":"An object representing the price of the package."},"billingCode":{"type":["string","null"],"description":"Billing code created by a client that can be associated with an order (optional)."},"isInternational":{"type":"boolean","description":"Indicates whether it is international package."}},"additionalProperties":false,"description":"The Package data"}},"required":["companyId","packageId","Authorization"]},
      method: "post",
      pathTemplate: "/compliance/v1/companies/{companyId}/backgroundCheck/screeningPackages/{packageId}",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"packageId","in":"path"},{"name":"testMode","in":"header"},{"name":"Authorization","in":"header"}],
      requestBodyContentType: "application/json",
      securityRequirements: [{"Bearer":[]}]
    }],
    ["deletecompliancev1companiesbackgroundcheckscreeningpackagesbypackageid", {
      name: "deletecompliancev1companiesbackgroundcheckscreeningpackagesbypackageid",
      description: `> 🚧 Partner Restricted
  > All background check API endpoints are restricted to background check providers that have signed a Paylocity technology partnership agreement. Please reach out to Techpartnerships@paylocity.com if you would like to discuss partnership opportunities.
  
  **Summary Description**
  
  Deletes screening package
  
  **Use Cases**
  
  - Partner does not want this package to be displayed in the UI for the client 
  `,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"},"packageId":{"type":"string","description":"The Id of the Screening Package."},"testMode":{"type":"boolean","description":"If true all responses are mocked and generated randomly"},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."}},"required":["companyId","packageId","Authorization"]},
      method: "delete",
      pathTemplate: "/compliance/v1/companies/{companyId}/backgroundCheck/screeningPackages/{packageId}",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"packageId","in":"path"},{"name":"testMode","in":"header"},{"name":"Authorization","in":"header"}],
      requestBodyContentType: undefined,
      securityRequirements: [{"Bearer":[]}]
    }],
    ["patchcompliancev1companiesbackgroundcheckcandidatescreeningordersstatus", {
      name: "patchcompliancev1companiesbackgroundcheckcandidatescreeningordersstatus",
      description: `> 🚧 Partner Restricted
  > All background check API endpoints are restricted to background check providers that have signed a Paylocity technology partnership agreement. Please reach out to Techpartnerships@paylocity.com if you would like to discuss partnership opportunities.
  
  **Summary Description**
  
  This endpoint updates the Screening Order status for the given companyId and candidateScreeningOrderId. The patch operation on the candidate status endpoint allows you to update the status of the overall screening order and the related services. You can also send the URL where the recruiter can view the complete screening result. Using this endpoint, partners will be able to add new services to orders that have already been placed. 
  
  **Use Cases**
  
  - Partner sends the initial status of the order and services, i.e. Ordered and Pending 
  - Partner needs to update the status of an order or services of an order 
  - Partner is updating the order with new statuses and wants to add on additional services that were added to the order after it was placed
  `,
      inputSchema: {"type":"object","properties":{"companyId":{"type":"string","description":"The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"},"Authorization":{"type":"string","description":"Authorization token. Ex. Bearer ..."},"requestBody":{"type":"object","properties":{"candidateScreeningOrderId":{"type":"string","description":"Unique identifier of the screening order that was sent to you.","format":"uuid"},"updatedAt":{"type":"string","description":"The date time of the update.Example: 2023-01-04T04:23:11.586Z","format":"date-time"},"oldStatus":{"enum":["Ordered","WaitingOnCandidate","InProgress","Hold","Complete","CompleteWithCancelled","Cancelled","CompleteNeedsReview","CompleteNotEligible","Suspended","Resumed","CompleteDisputed","InvitationExpired","InvitationCancelled","PreAdverseActionSent","AdverseActionCancelled","Dispute","AdverseActionSent"],"type":["string","null"],"description":"The previous status of the screening order."},"newStatus":{"enum":["Ordered","WaitingOnCandidate","InProgress","Hold","Complete","CompleteWithCancelled","Cancelled","CompleteNeedsReview","CompleteNotEligible","Suspended","Resumed","CompleteDisputed","InvitationExpired","InvitationCancelled","PreAdverseActionSent","AdverseActionCancelled","Dispute","AdverseActionSent"],"type":["string","null"],"description":"The new status of the screening order."},"services":{"type":["array","null"],"items":{"type":"object","properties":{"serviceName":{"type":"string","description":"The name of the specific service within a background check package that the users will see.\r\n    **Allowable Values:**\r\n    50 char max","nullable":true},"oldStatus":{"enum":["Pending","InProgress","Completed","Cancelled","NeedsReview","NotEligible","Suspended","Disputed","Expired"],"type":"string","description":"The previous status of the service.","nullable":true},"newStatus":{"enum":["Pending","InProgress","Completed","Cancelled","NeedsReview","NotEligible","Suspended","Disputed","Expired"],"type":"string","description":"The new status of the service.","nullable":true},"note":{"type":"string","description":"This is an optional field if the partner needs to send additional details with status of a service \r\n    **Allowable Values:**\r\n    250 char max","nullable":true}},"additionalProperties":false},"description":"The array of services in scope of which the screening order will be processed"},"screeningReportDocuments":{"type":["array","null"],"items":{"type":"string"},"description":"An array of strings representing the URL of the screening report that can be viewed on the partner’s web application."}},"additionalProperties":false,"description":"The data of the update"}},"required":["companyId","Authorization"]},
      method: "patch",
      pathTemplate: "/compliance/v1/companies/{companyId}/backgroundCheck/candidateScreeningOrders/status",
      executionParameters: [{"name":"companyId","in":"path"},{"name":"Authorization","in":"header"}],
      requestBodyContentType: "application/json",
      securityRequirements: [{"Bearer":[]}]
    }],
  ]);