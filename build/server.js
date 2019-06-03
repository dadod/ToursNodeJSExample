"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyparser = __importStar(require("body-parser"));
const apiGetTours_1 = require("./api/tours/apiGetTours");
const apiGetTourDetail_1 = require("./api/tours/apiGetTourDetail");
const apiCreatetour_1 = require("./api/tours/apiCreatetour");
const apiDeleteTour_1 = require("./api/tours/apiDeleteTour");
const app = express_1.default();
const jsonParser = bodyparser.json();
app.get("/", (req, res, next) => {
    res.send("Tour booking API");
});
app.get("/tours", apiGetTours_1.apiGetTours);
app.get("/tours/:id", apiGetTourDetail_1.apiGetTourDetail);
app.delete("/tours/:id", apiDeleteTour_1.apiDeleteTour);
app.post("/tours", jsonParser, apiCreatetour_1.apiCreateTour);
app.listen(process.env.PORT || 8091, () => {
    console.log("Server started...");
});
