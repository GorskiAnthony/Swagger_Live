import express, { Request, Response } from "express";

import { setupSwagger } from "./swaggerDocs";
import router from "./routes/userRoutes";

const app = express();
const port = 3000;

setupSwagger(app);

app.get("/", (req: Request, res: Response) => {
	res.send("Hello, TypeScript with Express!");
});

app.use("/api", router);

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
