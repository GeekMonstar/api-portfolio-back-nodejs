"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var schema_1 = require("./schema");
var projectSchema = new mongoose_1.Schema({
    title: {
        type: schema_1.languagesSchema,
        require: true,
        trim: true,
    },
    description: {
        type: schema_1.languagesSchema,
        trim: true,
    },
    image: {
        type: String,
        require: true,
        trim: true,
    },
    skills: {
        type: [String],
        require: true,
    },
}, {
    timestamps: true,
});
var ProjectModel = (0, mongoose_1.model)("project", projectSchema);
exports.default = ProjectModel;
