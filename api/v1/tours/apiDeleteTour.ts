import { RequestHandler } from "express";
import { PublicInfo, APIError } from "../../../model/shared/messages";
import { db, pgp } from "../../../db/db";

export const apiDeleteTour: RequestHandler = (req, res, next) => {
    const tourId = req.params.id;
    db.none("delete from tours where id = ${id}", {id: tourId})
            .then(() => {
                res.json(PublicInfo.infoDeleted());
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
