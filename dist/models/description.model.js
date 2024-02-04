"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var descriptionSchema = new mongoose_1.Schema({
    fr: {
        type: String,
        require: true,
    },
    en: {
        type: String,
        require: true,
    },
    es: {
        type: String,
        require: true,
    },
    de: {
        type: String,
        require: true,
    },
}, {
    timestamps: true,
});
var DescriptionModel = (0, mongoose_1.model)("description", descriptionSchema);
exports.default = DescriptionModel;
