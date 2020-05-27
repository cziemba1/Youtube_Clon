import express from "express";
import bodyParser from "body-parser"; //middleware to access the request object from form
import cookieParser from "cookie-parser"; //middleware to access cookies sessions
import helmet from "helmet";
import morgan from "morgan";
import videoRouter from "./routers/videRouter";
import userRouter from "./routers/userRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

app.use(morgan("dev"));
app.use(helmet()); //middleware security
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
