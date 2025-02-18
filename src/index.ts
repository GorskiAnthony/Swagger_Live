import express, { Request, Response } from "express";

// Import de setupSwagger pour l'utiliser
import { setupSwagger } from "./swaggerDocs";

// import de mon router
import router from "./routes/userRoutes";

const app = express();
const port = 3000;

app.use(express.json());

// Utilisation de setupSwagger
setupSwagger(app);

app.get("/", (req: Request, res: Response) => {
	res.send("Hello, TypeScript with Express!");
});

// Utilisation de mon router avec le préfixe /api
app.use("/api", router);

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
