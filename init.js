import "./db";
import app from "./app";
import "./models/Video";

import "./models/Comment";
import "./models/Video";

// Protect info
import dotenv from "dotenv";
dotenv.config();

/*------ Start application------*/
const handleListening = () => {
  console.log("Listening on: http://localhost:3000");
};

const PORT = process.env.PORT || 3000;

app.listen(PORT, handleListening);
