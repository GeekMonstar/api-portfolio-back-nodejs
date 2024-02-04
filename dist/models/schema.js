"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.languagesSchema = void 0;
var mongoose_1 = require("mongoose");
exports.languagesSchema = new mongoose_1.Schema({
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
});
