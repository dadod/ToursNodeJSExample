import { RequestHandler } from "express";
import { PublicInfo, APIError } from "../../../model/shared/messages";
import { pgp, db } from "../../../db/db";
const caseConverter = require("change-case-object");

export const apiUpdateTour: RequestHandler = (req, res, next) => {
    const tourId = req.params.id;
    const data = caseConverter.snakeCase(req.body);
    const sql = pgp.helpers.update(data, undefined, "tours") + " where id = ${id}";

    db.none(sql, {id: tourId}).then(() => {
        res.json(PublicInfo.infoUpdated({updatedData: data}));
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
