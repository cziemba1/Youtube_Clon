import app from "./app";

//Start the application
const handleListening = () => {
  console.log("Listening on: http://localhost:3000");
};

app.listen(3000, handleListening);
