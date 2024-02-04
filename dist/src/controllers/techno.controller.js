"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTechno = void 0;
const techno_model_1 = __importDefault(require("../models/techno.model"));
async function createTechno(req, res) {
    try {
        const { name, svg } = req.body;
        const techno = await techno_model_1.default.create({ name, svg });
        if (techno) {
            res.status(200).json(techno);
        }
        else {
            res.status(400).send("Une érreur est survenue.");
        }
    }
    catch (err) {
        res.status(400).json(err);
    }
}
exports.createTechno = createTechno;
