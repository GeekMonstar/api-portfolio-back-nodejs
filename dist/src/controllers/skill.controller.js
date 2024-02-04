"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSkill = void 0;
const skill_model_1 = __importDefault(require("../models/skill.model"));
async function createSkill(req, res) {
    try {
        const { name, svg, progress } = req.body;
        const skill = await skill_model_1.default.create({ name, svg, progress });
        if (skill) {
            res.status(200).json(skill);
        }
        else {
            res.status(400).send("Une érreur est survenue.");
        }
    }
    catch (err) {
        res.status(400).json(err);
    }
}
exports.createSkill = createSkill;
