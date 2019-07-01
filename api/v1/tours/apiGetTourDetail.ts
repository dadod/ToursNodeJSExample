import { RequestHandler } from "express";
import { DataStore } from "../../../data/data";
import { fileMapper } from "../general/static";
import { TourDetail } from "../../../model/shared/tourDetail";
import { APIError } from "../../../model/shared/messages";
import * as dbModelExt from "../../../db/model_extensions" 
import { db, pgp } from "../../../db/db";

export const apiGetTourDetail: RequestHandler = (req, res, next) => {
    const tourId = req.params.id;
    db.one("select t.*,\
            (select json_agg(reviews)\
                from reviews where tour_id = ${id}\
                ) as reviews\
            from tours as t\
            where t.id = ${id}",
            {id: tourId})
            .then((data: dbModelExt.toursWithReviews) => {
                const imgNames = data.img || [];
                const imageUrl = imgNames.map(fileMapper(req.app.get("env")));
                res.send(new TourDetail(data, imageUrl));
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