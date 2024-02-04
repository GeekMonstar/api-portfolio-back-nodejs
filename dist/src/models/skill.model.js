"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const skillSchema = new mongoose_1.Schema({
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
    value: {
        type: String,
        require: true,
        unique: true,
        trim: true,
    },
}, {
    timestamps: true,
});
const SkillModel = (0, mongoose_1.model)("skill", skillSchema);
exports.default = SkillModel;
