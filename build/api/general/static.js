"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const v4_1 = __importDefault(require("uuid/v4"));
function getStaticHome(env) {
    switch (env) {
        case "development":
            return "http://localhost:8091/static/";
        case "production":
        // CDN...
    }
}
exports.getStaticHome = getStaticHome;
function fileMapper(env) {
    return (filename) => getStaticHome(env) + filename;
}
exports.fileMapper = fileMapper;
function getFileUploader(env) {
    switch (env) {
        case "development":
            const fileId = v4_1.default();
            const fileStore = multer_1.default.diskStorage({
                destination: function (req, file, callback) {
                    callback(null, path_1.default.resolve("./", "public", "img"));
                },
                filename: function (req, file, callback) {
                    callback(null, fileId + path_1.default.extname(file.originalname));
                }
            });
            return multer_1.default({ storage: fileStore }).single("file");
        case "production":
            return (req, res, next) => { next(); };
        default:
            return (req, res, next) => { next(); };
    }
}
exports.getFileUploader = getFileUploader;
