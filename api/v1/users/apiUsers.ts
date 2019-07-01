import { Router } from "express";
import { apiGetUserDetails } from "./apiGetUserDetails";
import { apiAddUser } from "./apiAddUser";
import { apiDeleteUser } from "./apiDeleteUser";
import { apiUpdateUser } from "./apiUpdateUser";

export let userRouter = Router();

userRouter.get("/:id", apiGetUserDetails);

userRouter.post("/", apiAddUser);

userRouter.delete("/:id", apiDeleteUser);

userRouter.patch("/:id", apiUpdateUser);