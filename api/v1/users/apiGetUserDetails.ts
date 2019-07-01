import { RequestHandler } from "express";

export const apiGetUserDetails: RequestHandler = (req, res, next) => {
    res.send("User details!")
}