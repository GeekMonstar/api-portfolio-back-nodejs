import { Router, Request, Response } from "express";
import multer, { diskStorage } from "multer";
import {
  getAllProjects,
  getProjectById,
} from "../controllers/project.controller";
import { uploadImage } from "../middlewares/upload.middleware";
import {
  createSubproject,
  getAllSubprojects,
  getSubprojectById,
} from "../controllers/subproject.controller";

const projectRouter = Router();
let newFileName = "";

const storage = diskStorage({
  destination: (req, file, cb) => {
    cb(null, "static/images/profile");
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
    uploadImage(req, res, createSubproject, newFileName);
  })
  .get("/", getAllSubprojects)
  .get("/:id", getSubprojectById);

export default projectRouter;
