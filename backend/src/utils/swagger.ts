import { Express } from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";

const yamlFilePath = path.resolve(__dirname, "../swagger.yml");
const swaggerDoc = YAML.load(yamlFilePath);
function swaggerDocs(app: Express) {
  // Swagger page
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
}

export default swaggerDocs;
