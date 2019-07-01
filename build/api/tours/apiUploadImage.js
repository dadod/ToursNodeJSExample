"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const static_1 = require("../general/static");
const messages_1 = require("../../model/shared/messages");
exports.apiUploadImage = (req, res, next) => {
    const tourId = req.params.id;
    const tourIndex = data_1.DataStore.tours.findIndex((element) => element.id == tourId);
    if (tourIndex == -1) {
        res.json({ "status": "failes", "message": "Not found" });
    }
    else {
        const upload = static_1.getFileUploader(req.app.get("env"));
        upload(req, res, (error) => {
            if (error) {
                console.log(error);
                res.json(messages_1.APIError.errNotFound());
            }
            else {
                data_1.DataStore.tours[tourIndex].img.push(req.file.filename);
                res.json(messages_1.PublicInfo.infoCreated);
            }
        });
    }
};
