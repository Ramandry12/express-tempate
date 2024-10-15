import express from "express";
import { authMiddleware } from "../middleware/auth-middleware.js";
import userController from "../controller/user-controller.js";

const privateRouter = express.Router();
privateRouter.use(authMiddleware);

// users
privateRouter.get("/users", userController.getAll);
privateRouter.post("/users/update/:id", userController.update);

export { privateRouter };
