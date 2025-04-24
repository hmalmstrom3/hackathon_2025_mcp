import express from 'express';
import dotenv from 'dotenv';
import { registerEmployeeDemographicRoutes } from './routes/employeeDemographic.js';
dotenv.config();

const app = express();
app.use(express.json());

registerEmployeeDemographicRoutes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`MCP Server for Paylocity Employee Demographics running on port ${PORT}`);
});
