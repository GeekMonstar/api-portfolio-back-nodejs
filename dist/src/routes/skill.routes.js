"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const skill_controller_1 = require("../controllers/skill.controller");
const skillRouter = (0, express_1.Router)();
skillRouter.post("/", skill_controller_1.createSkill);
exports.default = skillRouter;
