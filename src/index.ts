import express, { urlencoded, static as _static } from "express";
import { config } from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import descriptionRouter from "./routes/description.routes";
import skillRouter from "./routes/skill.routes";
import projectRouter from "./routes/project.routes";
import db_connexion from "./config/db";
import profileRouter from "./routes/profile.routes";
import authRouter from "./routes/auth.routes";

const app = express();

config();
db_connexion();
app
  .use(cors())
  .use(urlencoded())
  .use(bodyParser())
  .use(cookieParser())
  .use(_static("static"))
  .use("/auth", [authRouter])
  .use("/description", [descriptionRouter])
  .use("/skills", [skillRouter])
  .use("/projects", [projectRouter])
  .use("/profile", profileRouter)
  .listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`);
  });
