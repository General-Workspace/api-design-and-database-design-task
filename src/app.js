import express from "express";
import swaggerUI from "swagger-ui-express";
import YAML from "yamljs";
import OpenAPIValidator from "express-openapi-validator";

const app = express();

const openAPIDocument = YAML.load("./documentation.yaml");
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(openAPIDocument));

app.use(
  OpenAPIValidator.middleware({
    apiSpec: "./documentation.yaml",
    validateRequests: true,
    validateResponses: true,
  })
);

export default app;
