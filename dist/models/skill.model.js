"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var skillSchema = new mongoose_1.Schema({
    type: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
        trim: true,
    },
    short_name: {
        type: String,
        require: true,
        trim: true,
    },
    progress: {
        type: Number,
    },
}, {
    timestamps: true,
});
var SkillModel = (0, mongoose_1.model)("skill", skillSchema);
exports.default = SkillModel;
