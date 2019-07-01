"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("../../../model/shared/messages");
const db_1 = require("../../../db/db");
exports.apiDeleteTour = (req, res, next) => {
    const tourId = req.params.id;
    db_1.db.none("delete from tours where id = ${id}", { id: tourId })
        .then(() => {
        res.json(messages_1.PublicInfo.infoDeleted());
    });
};
