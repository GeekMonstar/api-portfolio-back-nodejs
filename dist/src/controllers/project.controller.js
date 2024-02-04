"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = void 0;
const project_model_1 = __importDefault(require("../models/project.model"));
async function createProject(req, res) {
    try {
        const { name, image_url, languages, description } = req.body;
        const project = await project_model_1.default.create({
            name,
            image_url,
            languages,
            description,
        });
        if (project) {
            res.status(200).json(project);
        }
        else {
            res.status(400).send("Une érreur est survenue.");
        }
    }
    catch (err) {
        res.status(400).json(err);
    }
}
exports.createProject = createProject;
