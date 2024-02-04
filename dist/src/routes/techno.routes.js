"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const techno_controller_1 = require("../controllers/techno.controller");
const technoRouter = (0, express_1.Router)();
technoRouter.post("/", techno_controller_1.createTechno);
exports.default = technoRouter;
