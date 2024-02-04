"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var schema_1 = require("./schema");
var versionSchema = new mongoose_1.Schema({
    project_id: {
        type: String,
        require: true,
        unique: true,
        trim: true,
    },
    title: {
        type: String,
        require: true,
        unique: true,
        trim: true,
    },
    stack: {
        type: String,
    },
    description: {
        type: schema_1.languagesSchema,
        require: true,
        trim: true,
    },
    image: {
        type: String,
        require: true,
        trim: true,
    },
    languages: {
        type: [String],
        require: true,
        trim: true,
    },
}, {
    timestamps: true,
});
var VersionModel = (0, mongoose_1.model)("version", versionSchema);
exports.default = VersionModel;
