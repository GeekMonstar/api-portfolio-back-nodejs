"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var profileSchema = new mongoose_1.Schema({
    url: {
        type: String,
        require: true,
        trim: true,
    },
}, {
    timestamps: true,
});
var ProfileModel = (0, mongoose_1.model)("profile", profileSchema);
exports.default = ProfileModel;
