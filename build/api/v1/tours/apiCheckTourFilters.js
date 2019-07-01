"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tourFilter_1 = require("../../../model/shared/tourFilter");
const messages_1 = require("../../../model/shared/messages");
exports.apiCheckTourFilters = (req, res, next) => {
    const filters = new tourFilter_1.TourFilter(req.query);
    for (let filter of Object.getOwnPropertyNames(req.query)) {
        if (!filters.hasOwnProperty(filter)) {
            next(messages_1.APIError.errNotFound());
        }
    }
    console.log(filters);
    next();
};
