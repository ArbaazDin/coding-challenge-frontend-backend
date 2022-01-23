import express from "express";
import { characterRoute } from "../controllers/characterController";
import { loginRoute } from "../controllers/loginController";

export const userRouter = express.Router();

userRouter.use('/', characterRoute);
userRouter.use('/', loginRoute);