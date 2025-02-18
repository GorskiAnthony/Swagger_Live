import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import fs from "node:fs";
import path from "node:path";

const swaggerFile = path.join(__dirname, "./swagger/swagger.json");

const swaggerData = fs.readFileSync(swaggerFile, "utf8");

export function setupSwagger(app: Express) {
	const swaggerDocument = JSON.parse(swaggerData);
	app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
	console.log("📄 Swagger est accessible sur http://localhost:3000/api-docs");
}
