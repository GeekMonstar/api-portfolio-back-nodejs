"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var version_controller_1 = require("../controllers/version.controller");
var upload_middleware_1 = require("../middlewares/upload.middleware");
var versionRouter = (0, express_1.Router)();
var newFileName = "";
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "static/images/versions");
    },
    filename: function (req, file, cb) {
        newFileName = "".concat(Date.now(), "-").concat(file.originalname);
        cb(null, newFileName);
    },
});
var upload = (0, multer_1.default)({ storage: storage });
versionRouter
    .post("/", upload.single("image"), function (req, res) {
    (0, upload_middleware_1.uploadImage)(req, res, version_controller_1.createVersion, newFileName);
})
    .get("/", version_controller_1.getAllVersions)
    .get("/id/:id", version_controller_1.getVersionById);
exports.default = versionRouter;
