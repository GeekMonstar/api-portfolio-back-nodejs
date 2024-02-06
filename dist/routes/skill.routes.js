"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var skill_controller_1 = require("../controllers/skill.controller");
var skillRouter = (0, express_1.Router)();
skillRouter
    .post("/", skill_controller_1.createSkill)
    .get("/", skill_controller_1.getSkills)
    .get("/id/:id", skill_controller_1.getSkillById)
    .get("/name/:name", skill_controller_1.getSkillByName);
exports.default = skillRouter;
