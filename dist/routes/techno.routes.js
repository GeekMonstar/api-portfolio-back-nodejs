"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var techno_controller_1 = require("../controllers/techno.controller");
var technoRouter = (0, express_1.Router)();
technoRouter
    .post("/", techno_controller_1.createTechno)
    .get("/", techno_controller_1.getAllTechnos)
    .get("/id/:id", techno_controller_1.getTechnoById);
exports.default = technoRouter;
