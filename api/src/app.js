import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import imagesRoute from "./routes/images.routes";

const app = express();
app.set("port", process.env.PORT || 3001);

app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("api/images", imagesRoute);

export default app;
