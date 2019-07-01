"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const messages_1 = require("../../model/shared/messages");
exports.apiUpdateTour = (req, res, next) => {
    const tourId = req.params.id;
    const tourIndex = data_1.DataStore.tours.findIndex((element) => element.id == tourId);
    if (tourIndex > -1) {
        const originalTour = data_1.DataStore.tours[tourIndex];
        const newTour = {
            id: tourId,
            location: req.body.location || originalTour.location,
            tourTitle: req.body.tourTitle || originalTour.tourTitle,
            tourCategory: req.body.tourCategory || originalTour.tourCategory,
            tourDescription: req.body.tourDescription || originalTour.tourDescription,
            price: req.body.price || originalTour.price,
            currency: req.body.currency || originalTour.currency,
            img: originalTour.img
        };
        data_1.DataStore.tours[tourIndex] = newTour;
        res.json(messages_1.PublicInfo.infoUpdated());
    }
    else {
        res.json(messages_1.APIError.errNotFound());
    }
};
