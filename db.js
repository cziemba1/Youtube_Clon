import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

/*------Handle DB connection functions------*/
const handleOpen = () => {
  console.log("Connected to DB");
};
const handleError = () => {
  console.log("Error on DB connection");
};

/*------DB connection------*/
db.once("open", handleOpen);
db.on("error", handleError);
