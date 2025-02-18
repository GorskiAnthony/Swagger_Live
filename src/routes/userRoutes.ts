import { Router, Request, Response } from "express";

const router = Router();

router.get("/users", (req: Request, res: Response) => {
	const users = [
		{ id: 1, name: "John Doe" },
		{ id: 2, name: "Jane Doe" },
		{ id: 3, name: "Alice Smith" },
	];
	res.json(users);
});

export default router;
