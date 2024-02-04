"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const description_controller_1 = require("../controllers/description.controller");
const descriptionRouter = (0, express_1.Router)();
descriptionRouter.post("/", description_controller_1.createDescription);
exports.default = descriptionRouter;
