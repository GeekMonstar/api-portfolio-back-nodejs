"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDescription = void 0;
const description_model_1 = __importDefault(require("../models/description.model"));
async function createDescription(req, res) {
    try {
        const { fr, en, es, de } = req.body;
        const description = await description_model_1.default.create({ fr, en, es, de });
        if (description) {
            res.status(200).json(description);
        }
        else {
            res.status(400).send("Une érreur est survenue.");
        }
    }
    catch (err) {
        res.status(400).json(err);
    }
}
exports.createDescription = createDescription;
