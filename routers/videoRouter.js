import express from "express";
import routes from "../routes";
import {
  videos,
  upload,
  videoDet,
  editVideo,
  deleteVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

//Video routes

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDet, videoDet);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
