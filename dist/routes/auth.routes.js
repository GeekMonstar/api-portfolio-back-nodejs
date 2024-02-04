"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_controller_1 = require("../controllers/auth.controller");
var authRouter = (0, express_1.Router)();
authRouter.post("/", auth_controller_1.createAuth);
exports.default = authRouter;
