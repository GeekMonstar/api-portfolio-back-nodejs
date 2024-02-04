"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const technoSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
        trim: true,
    },
    svg: {
        type: String,
        require: true,
        unique: true,
        trim: true,
    },
}, {
    timestamps: true,
});
const TechnoModel = (0, mongoose_1.model)("techno", technoSchema);
exports.default = TechnoModel;
