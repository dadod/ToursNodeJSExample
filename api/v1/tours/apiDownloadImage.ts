import { RequestHandler } from "express";
import path from "path";
import { APIError } from "../../../model/shared/messages";

export const apiDownloadImage: RequestHandler = (req, res, next) => {
    const fileID = req.params.id;
    res.download(path.resolve("./", "public", "img", fileID), err => {
        if (err) {
            next(APIError.errNotFound());
        }
    });
}