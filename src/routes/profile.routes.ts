import { Router } from "express";
import multer, { diskStorage } from "multer";
import { uploadImage } from "../middlewares/upload.middleware";
import { createProfile, getProfile } from "../controllers/profile.controller";

const profileRouter = Router();
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

profileRouter
  .post("/", upload.single("image"), (req, res) => {
    uploadImage(req, res, createProfile, newFileName);
  })
  .get("/", getProfile);

export default profileRouter;
