"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Reviews {
    constructor(data) {
        this.tourID = data.tour_id;
        this.reviewTitle = data.review_title;
        this.reviewLongText = data.review_long_text || "";
        this.stars = data.stars;
    }
}
exports.Reviews = Reviews;
