"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var multer_1 = __importStar(require("multer"));
var upload_middleware_1 = require("../middlewares/upload.middleware");
var profile_controller_1 = require("../controllers/profile.controller");
var profileRouter = (0, express_1.Router)();
var newFileName = "";
var storage = (0, multer_1.diskStorage)({
    destination: function (req, file, cb) {
        cb(null, "static/images/profile");
    },
    filename: function (req, file, cb) {
        newFileName = "".concat(Date.now(), "-").concat(file.originalname);
        cb(null, newFileName);
    },
});
var upload = (0, multer_1.default)({ storage: storage });
profileRouter
    .post("/", upload.single("image"), function (req, res) {
    (0, upload_middleware_1.uploadImage)(req, res, profile_controller_1.createProfile, newFileName);
})
    .get("/", profile_controller_1.getProfile);
exports.default = profileRouter;
