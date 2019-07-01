import { RequestHandler } from "express";

export const apiUpdateUser: RequestHandler = (req, res, next) => {
    res.send("User updated!")
}