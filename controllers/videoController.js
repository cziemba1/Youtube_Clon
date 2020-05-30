import "../db";
import Video from "../models/Video";
import routes from "../routes";

/*------HOME Controller------*/
export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
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

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    // fileUrl: req.file.path.replace(/\\/g, "/"),
    title,
    description,
  });
  console.log(newVideo);
  res.redirect(routes.videoDet(newVideo.id));
};

export const videoDet = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoDet", { pageTitle: "Video Details", video });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const getEditVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const postEditVideo = (req, res) => {};
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
