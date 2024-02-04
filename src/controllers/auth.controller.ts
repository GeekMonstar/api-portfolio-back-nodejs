import { Request, Response } from "express";
import AuthModel from "../models/auth.model";
import { sign } from "jsonwebtoken";

export async function createAuth(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;
    const auth = await AuthModel.create({ name, email, password });
    if (auth) {
      res.status(200).json(auth);
    } else {
      res.status(400).send("Une érreur est survenue.");
    }
  } catch (err: any) {
    res.status(400).json(err);
  }
}

export async function authentification(req: Request, res: Response) {
  const { email, password } = req.body;
  const authBool = await AuthModel.authentification(email, password);
  if (authBool) {
    const auth = await AuthModel.findOne({ email });
    const token = await sign({ ...auth }, "shhhhh");
    res.status(200).cookie("auth", "");
  }
}
