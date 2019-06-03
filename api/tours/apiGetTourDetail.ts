import { DataStore } from "../../data/data"
import { RequestHandler } from "express";
import { TourDetail } from "../../model/shared/tourDetail"

export const apiGetTourDetail: RequestHandler = (req, res, next) => {
    const tourId = req.params.id;
    const selectedTour = DataStore.tours.find((element: any) => element.id == tourId);
    if (selectedTour) {
        const selectedReviews = DataStore.reviews.filter((item: any) => item.tourID == tourId);
        res.json(new TourDetail(selectedTour, selectedReviews))
    } else {
        res.json({"status": "failed", "message": "Element not found"});
    }
}