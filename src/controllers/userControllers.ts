import { Request, Response } from "express";
import { users } from "../fakeData/users";

/**
 * Nous allons faire le principe B.R.E.A.D
 * BROWSE
 * READ
 * EDIT
 * ADD
 * DELETE (destroy pour les intimes)
 */

const browse = (req: Request, res: Response) => {
	res.json(users);
};

const read = (req: Request, res: Response) => {
	const user = users.find((user) => user.id === parseInt(req.params.id));
	if (user) {
		res.json(user);
	} else {
		res.status(404).json({ message: "User not found" });
	}
};

const edit = (req: Request, res: Response) => {
	const index = users.findIndex(
		(user) => user.id === parseInt(req.params.id)
	);
	if (index !== -1) {
		users[index] = req.body;
		res.json(users[index]);
	} else {
		res.status(404).json({ message: "User not found" });
	}
};

const post = (req: Request, res: Response) => {
	const user = req.body;
	users.push(user);
	res.status(201).json(user);
};

const destroy = (req: Request, res: Response) => {
	const index = users.findIndex(
		(user) => user.id === parseInt(req.params.id)
	);
	if (index !== -1) {
		users.splice(index, 1);
		res.status(204).send();
	} else {
		res.status(404).json({ message: "User not found" });
	}
};

export default { browse, read, edit, post, destroy };
