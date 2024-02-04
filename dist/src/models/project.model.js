"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema_1 = require("./schema");
const projectSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
        trim: true,
    },
    description: {
        type: schema_1.languagesSchema,
        require: true,
        unique: true,
        trim: true,
    },
    image_url: {
        type: String,
        require: true,
        unique: true,
        trim: true,
    },
    languages: {
        type: [String],
        require: true,
        unique: true,
        trim: true,
    },
}, {
    timestamps: true,
});
const ProjectModel = (0, mongoose_1.model)("project", projectSchema);
exports.default = ProjectModel;
