import express from "express";
import * as bodyparser from "body-parser";
import { DataStore } from "./data/data";
import { apiGetTours } from "./api/tours/apiGetTours";
import { apiGetTourDetail } from "./api/tours/apiGetTourDetail"
import { apiCreateTour } from "./api/tours/apiCreatetour"
import { apiDeleteTour } from "./api/tours/apiDeleteTour";

const app = express();
const jsonParser = bodyparser.json();

app.get("/", (req, res, next) => {
    res.send("Tour booking API");
})

app.get("/tours", apiGetTours);

app.get("/tours/:id", apiGetTourDetail);

app.delete("/tours/:id", apiDeleteTour);

app.post("/tours", jsonParser, apiCreateTour)

app.listen(process.env.PORT || 8091,  () => {
    console.log("Server started..."); 
})