import { RequestHandler } from "express";
import { TourFilter } from "../../../model/shared/tourFilter";
import { TourSummary } from "../../../model/shared/tourSummary";
import { db, pgp } from "../../../db/db";

import * as dbModel from "../../../db/model_generated" 
import { APIError } from "../../../model/shared/messages";


export const apiGetTours: RequestHandler = (req, res, next) => {
    const filters = new TourFilter(req.query);
    db.any("select * from tours where ${condition:raw}", {condition: filters.getCondition()}).then((tours: dbModel.tours[]) => {
        res.json(tours.map((item: any) => new TourSummary(item))); 
    })
    .catch(err => {
        console.log(err);
        if (err instanceof pgp.errors.QueryResultError) {
            next(APIError.errNotFound());
        } else {
            next(APIError.errInvalidQueryParameter());
        }
    });   
};