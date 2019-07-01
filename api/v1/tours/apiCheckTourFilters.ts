import { RequestHandler } from "express";
import { TourFilter } from "../../../model/shared/tourFilter";
import { APIError } from "../../../model/shared/messages";


export const apiCheckTourFilters: RequestHandler = (req, res, next) => {
    const filters = new TourFilter(req.query);
    for (let filter of Object.getOwnPropertyNames(req.query)) {
        if (!filters.hasOwnProperty(filter)) {
            next(APIError.errNotFound());
        }
    }
    console.log(filters);
    next();
}