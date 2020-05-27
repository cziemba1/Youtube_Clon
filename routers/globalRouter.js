import express from "express";
import routes from "../routes";
import {
  home,
  search,
  videos,
  upload,
  videoDetails,
  editVideo,
  deleteVideo,
} from "../controllers/videoController";
import {
  join,
  login,
  logout,
  users,
  userDetail,
  editProfile,
  changeProfile,
} from "../controllers/userController";
const globalRouter = express.Router();

//User routes
globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.users, users);
globalRouter.get(routes.userDetail, userDetail);
globalRouter.get(routes.editProfile, editProfile);
globalRouter.get(routes.changeProfile, changeProfile);

//Video routes
globalRouter.get(routes.search, search);
globalRouter.get(routes.videos, videos);
globalRouter.get(routes.upload, upload);
globalRouter.get(routes.videoDetails, videoDetails);
globalRouter.get(routes.editVideo, editVideo);
globalRouter.get(routes.deleteVideo, deleteVideo);

export default globalRouter;
