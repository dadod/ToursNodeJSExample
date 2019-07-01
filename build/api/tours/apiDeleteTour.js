"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const messages_1 = require("../../model/shared/messages");
exports.apiDeleteTour = (req, res, next) => {
    const tourId = req.params.id;
    const tourIndex = data_1.DataStore.tours.findIndex((element) => element.id == tourId);
    if (tourIndex > -1) {
        data_1.DataStore.tours.splice(tourIndex, 1);
        res.json(messages_1.PublicInfo.infoDeleted());
    }
    else {
        res.json(messages_1.APIError.errNotFound());
    }
};
