import { Router } from "express";
import { apiCheckTourFilters } from "./apiCheckTourFilters";
import { apiGetTours } from "./apiGetTours";
import { apiGetTourDetail } from "./apiGetTourDetail";
import { apiDeleteTour } from "./apiDeleteTour";
import { apiCreateTour } from "./apiCreatetour";
import { jsonParser } from "../general/bodyParser";
import { apiUpdateTour } from "./apiUpdateTour";
import { apiUploadImage } from "./apiUploadImage";

export let toursRouter = Router();

toursRouter.route("/")
    .get(apiCheckTourFilters, apiGetTours)
    .post(jsonParser, apiCreateTour);

toursRouter.route("/:id")
    .get(apiGetTourDetail)
    .delete(apiDeleteTour)
    .patch(jsonParser, apiUpdateTour);

toursRouter.post("/:id/img", apiUploadImage);