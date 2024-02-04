"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var description_controller_1 = require("../controllers/description.controller");
var descriptionRouter = (0, express_1.Router)();
descriptionRouter.post("/", description_controller_1.createDescription).get("/", description_controller_1.getAllDescriptions);
exports.default = descriptionRouter;
