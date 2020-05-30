import "../db";
import Video from "../models/Video";
import routes from "../routes";

/*------HOME Controller------*/
export const home = async (req, res) => {
  try {
    const videosAll = await Video.find({});
    res.render("home", { pageTitle: "Home", videosAll });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videosAll: [] });
  }
};

/*------SEARCH Controller------*/
export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videosAll });
};

/*------MAIN VIDEOS Controller------*/
export const videos = (req, res) =>
  res.render("videos", { pageTitle: "Videos" });

/*------UPLOAD Controller------*/
export const getupload = (req, res) => {
  res.render("upload", { pageTitle: "Upload" });
};

export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  // TO DO: Upload and save videos
  res.redirect(routes.videoDet(23432));
};

export const videoDet = (req, res) =>
  res.render("videoDet", { pageTitle: "Video Details" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
