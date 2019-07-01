import { RequestHandler } from "express";
import { getFileUploader } from "../general/static"
import { APIError, PublicInfo } from "../../../model/shared/messages";
import { db, pgp } from "../../../db/db";

export const apiUploadImage: RequestHandler = (req, res, next) => {
    const tourId = req.params.id;

    const upload = getFileUploader(req.app.get("env"))
        upload(req, res, (error) => {
            if (error) {
                console.log(error);
                res.json(APIError.errNotFound()); 
            } else {
                const sql = "update tours\
                                set img = array_append(img, ${file})\
                                where id = ${id}";
                db.none(sql, {file: req.file.filename, id: tourId})
                    .then(() => {
                        res.json(PublicInfo.infoCreated({uploadedFile: req.file.filename})); 
                    })
                    .catch(err => {
                        console.log(err);
                        if (err instanceof pgp.errors.QueryResultError) {
                            next(APIError.errNotFound());
                        } else {
                            next(APIError.errInvalidQueryParameter());
                        }
                    });   
            }
        })


}