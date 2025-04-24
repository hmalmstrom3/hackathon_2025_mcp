import { Application, Request, Response } from 'express';
import { paylocityApi } from '../utils/paylocityApi.js';
import type { paths } from '../types/EmployeeDemographic.js';

export function registerEmployeeDemographicRoutes(app: Application) {
  // GET /coreHr/v1/companies/:companyId/employees
  app.get('/coreHr/v1/companies/:companyId/employees', async (req: Request, res: Response) => {
    try {
      const { companyId } = req.params;
      const { limit, nextToken, include, activeOnly } = req.query;
      const response = await paylocityApi.get<paths['/coreHr/v1/companies/{companyId}/employees']['get']['responses']['200']['content']['application/json']>(
        `/coreHr/v1/companies/${companyId}/employees`,
        {
          params: {
            limit,
            nextToken,
            include,
            activeOnly
          }
        }
      );
      res.json(response.data);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // GET /coreHr/v1/companies/:companyId/employees/:employeeId
  app.get('/coreHr/v1/companies/:companyId/employees/:employeeId', async (req: Request, res: Response) => {
    try {
      const { companyId, employeeId } = req.params;
      const { include } = req.query;
      const response = await paylocityApi.get<paths['/coreHr/v1/companies/{companyId}/employees/{employeeId}']['get']['responses']['200']['content']['application/json']>(
        `/coreHr/v1/companies/${companyId}/employees/${employeeId}`,
        {
          params: { include }
        }
      );
      res.json(response.data);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });
}
