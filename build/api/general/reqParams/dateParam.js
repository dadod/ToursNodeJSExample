"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("../../../model/shared/messages");
const dateFormat = new RegExp("(\\d{4})-(\\d{1,2})-(\\d{1,2})");
exports.dateParam = (req, res, next, value, name) => {
    const parsedComponents = dateFormat.exec(value);
    if (parsedComponents) {
        const [_, year, month, day] = parsedComponents.map(item => parseInt(item));
        const date = new Date(year, month - 1, day);
        req.params[name] = date;
        next();
    }
    else {
        next(new messages_1.APIError("Parse error", "Date could not be parsed. Date format: YYYY-MM-DD.", 400));
    }
};
