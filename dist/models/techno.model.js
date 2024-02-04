"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var technoSchema = new mongoose_1.Schema({
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
var TechnoModel = (0, mongoose_1.model)("techno", technoSchema);
exports.default = TechnoModel;
