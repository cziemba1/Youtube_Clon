import express from "express";
import routes from "../routes";
import {
  changePassword,
  editProfile,
  userDetail,
} from "../controllers/userController";
const userRouter = express.Router();

//User routes
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail, userDetail);

export default userRouter;
