import express from "express";
import routes from "../routes";
import {
  videos,
  videoDet,
  editVideo,
  deleteVideo,
  getupload,
  postUpload,
} from "../controllers/videoController";

const videoRouter = express.Router();

/*------Video Routes------*/
videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, getupload);
videoRouter.post(routes.upload, postUpload);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.videoDet(), videoDet);

export default videoRouter;
