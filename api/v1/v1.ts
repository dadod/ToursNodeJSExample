import { Router } from "express";
import { apiCors } from "./general/cors";
import { logger } from "./general/logging";
import { apiValidation } from "./general/validation";
import { userRouter } from "./users/apiUsers";
import { toursRouter } from "./tours/apiTours";
import { apiDownloadImage } from "./tours/apiDownloadImage";
import { apiErrorHandler } from "./general/errorHandling";
import express from "express";
import path from "path";

export let routerV1 = Router();

routerV1.use(apiCors)

routerV1.use(logger);

routerV1.use(apiValidation)

routerV1.use("/users", userRouter);

routerV1.use("/tours", toursRouter);

routerV1.use("/static", express.static(path.resolve("./", "public", "img")));

routerV1.get("/headers", (req, res, next) => res.json(req.headers));

routerV1.get("/", (req, res, next) => {
    res.send("Tour booking API");
})

routerV1.get("/static/download/:id", apiDownloadImage);

routerV1.use(apiErrorHandler);