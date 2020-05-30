import "./db";
// Protect info
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

import "./models/Comment";
import "./models/Video";

/*------ Start application------*/
const handleListening = () => {
  console.log("Listening on: http://localhost:3000");
};

const PORT = process.env.PORT || 3000;

app.listen(PORT, handleListening);
