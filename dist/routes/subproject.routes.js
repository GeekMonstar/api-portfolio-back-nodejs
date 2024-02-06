"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var subproject_controller_1 = require("../controllers/subproject.controller");
var subprojectRouter = (0, express_1.Router)();
subprojectRouter
    .post("/", subproject_controller_1.createSubproject)
    .get("/", subproject_controller_1.getAllSubprojects)
    .get("/:id", subproject_controller_1.getSubprojectById);
exports.default = subprojectRouter;
