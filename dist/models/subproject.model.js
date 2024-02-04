"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var schema_1 = require("./schema");
var subprojectSchema = new mongoose_1.Schema({
    project_id: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: schema_1.languagesSchema,
        require: true,
    },
    stack: {
        type: String,
    },
    languages: {
        type: [String],
        require: true,
    },
    url: {
        type: String,
        require: true,
    },
    git_repo_url: {
        type: String,
        require: true,
    },
});
var SubprojectModel = (0, mongoose_1.model)("subproject", subprojectSchema);
exports.default = SubprojectModel;
