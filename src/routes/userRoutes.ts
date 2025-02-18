import { Router } from "express";

const router = Router();

import userControllers from "../controllers/userControllers";

// B
router.get("/users", userControllers.browse);

// R
router.get("/users/:id", userControllers.read);

// E
router.put("/users/:id", userControllers.edit);

// A
router.post("/users", userControllers.post);

// D
router.delete("/users/:id", userControllers.destroy);

export default router;
