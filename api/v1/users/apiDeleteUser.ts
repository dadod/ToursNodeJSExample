import { RequestHandler } from "express";

export const apiDeleteUser: RequestHandler = (req, res, next) => {
    res.send("User deleted!");
}