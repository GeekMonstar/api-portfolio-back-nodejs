import { Router, Request, Response } from "express";
import multer, { diskStorage } from "multer";
import {
  createProject,
  deleteProject,
  getAllProjects,
  getProjectById,
} from "../controllers/project.controller";
import { uploadImage } from "../middlewares/upload.middleware";

const projectRouter = Router();
let newFileName = "";

const storage = diskStorage({
  destination: (req, file, cb) => {
    cb(null, "static/images/projects");
  },
  filename: (req, file, cb) => {
    newFileName = `${Date.now()}-${file.originalname}`;
    cb(null, newFileName);
  },
});

const upload = multer({ storage });

projectRouter
  .post("/", upload.single("image"), (req, res) => {
    console.log(newFileName);
    uploadImage(req, res, createProject, newFileName);
  })
  .get("/", getAllProjects)
  .get("/:id", getProjectById)
  .delete("/:id", deleteProject);

export default projectRouter;
