"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../static/images/projects");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
function uploadImage(req, res, next) {
    const upload = (0, multer_1.default)({ storage }).single("image");
    console.log(storage);
    try {
        if (req.file) {
            next();
        }
    }
    catch (err) {
        res.status(400).json(err);
    }
}
exports.default = uploadImage;
