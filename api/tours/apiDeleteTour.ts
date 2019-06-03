import { RequestHandler } from "express";
import { DataStore } from "../../data/data"

export const apiDeleteTour: RequestHandler = (req, res, next) => {
    const tourId = req.params.id;
    const tourIndex = DataStore.tours.findIndex((element: any) => element.id == tourId);

    if (tourIndex > -1) {
        DataStore.tours.splice(tourIndex, 1);
        res.json({"status": "success", "message": "Element removed"});
    } else {
        res.json({"status": "failes", "message": "Not found"});

    }

}
