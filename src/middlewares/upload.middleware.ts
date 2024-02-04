import { Request, Response } from "express";
import multer from "multer";

export function uploadProjectImage() {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "static/images/projects");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });

  return multer({ storage });
}

export async function uploadImage(
  req: Request,
  res: Response,
  fn: upLoadImageController,
  fileName: string
) {
  try {
    if (!req.file) {
      throw new Error("Aucun fichier téléchargé.");
    }
    console.log(`L'image ${fileName} à été uploadé.`);
    fn(req, res, fileName);
  } catch (error) {
    res.status(400).send("ERROR");
  }
}

type upLoadImageController = {
  (req: Request, res: Response, newFileName: string): void;
};
