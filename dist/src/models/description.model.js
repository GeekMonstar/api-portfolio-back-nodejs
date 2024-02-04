"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema_1 = require("./schema");
const descriptionSchema = new mongoose_1.Schema({
    value: {
        type: schema_1.languagesSchema,
        require: true,
        trim: true,
    },
}, {
    timestamps: true,
});
const DescriptionModel = (0, mongoose_1.model)("description", descriptionSchema);
exports.default = DescriptionModel;
