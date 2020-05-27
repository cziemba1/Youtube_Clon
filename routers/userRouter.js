import express from "express";
import routes from "../routes";
import { changePassword } from "../controllers/userController";
const userRouter = express.Router();

//User routes
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
