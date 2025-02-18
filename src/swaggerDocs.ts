import { Express } from "express";
import swaggerUi from "swagger-ui-express";
import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

// Ici, je vais récuperer mon fichier swagger.yaml
const swaggerFile = path.join(__dirname, "./swagger/swagger.yaml");

// Je lis le fichier swagger.yaml
const swaggerData = fs.readFileSync(swaggerFile, "utf8");

// Je parse le fichier yaml grâce à la librairie yaml
const swaggerDocument = YAML.parse(swaggerData);

/**
 * Fonction qui permet de setup Swagger
 */
export function setupSwagger(app: Express) {
	app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
	console.log("Lien de la documentation: http://localhost:3000/api-docs");
}
