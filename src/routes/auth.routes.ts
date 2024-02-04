import { Router } from "express";
import { createAuth } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post("/", createAuth);

export default authRouter;
