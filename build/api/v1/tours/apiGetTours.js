"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tourFilter_1 = require("../../../model/shared/tourFilter");
const tourSummary_1 = require("../../../model/shared/tourSummary");
const db_1 = require("../../../db/db");
exports.apiGetTours = (req, res, next) => {
    const filters = new tourFilter_1.TourFilter(req.query);
    db_1.db.any("select * from tours where ${condition:raw}", { condition: filters.getCondition() }).then((tours) => {
        res.json(tours.map((item) => new tourSummary_1.TourSummary(item)));
    })
        .catch(err => {
        console.log(err);
    });
};
