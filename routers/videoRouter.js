import express from "express";
import routes from "../routes";
import {
  videos,
  videoDet,
  deleteVideo,
  getupload,
  postUpload,
  getEditVideo,
  postEditVideo,
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

/*------Video Routes------*/
videoRouter.get(routes.videos, videos);
//Upload
videoRouter.get(routes.upload, getupload);
videoRouter.post(routes.upload, uploadVideo, postUpload);
//Edit
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);
//Delete
videoRouter.get(routes.deleteVideo(), deleteVideo);
//Detail
videoRouter.get(routes.videoDet(), videoDet);

export default videoRouter;
