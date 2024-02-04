"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importStar(require("express"));
var dotenv_1 = require("dotenv");
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var description_routes_1 = __importDefault(require("./routes/description.routes"));
var skill_routes_1 = __importDefault(require("./routes/skill.routes"));
var project_routes_1 = __importDefault(require("./routes/project.routes"));
var db_1 = __importDefault(require("./config/db"));
var profile_routes_1 = __importDefault(require("./routes/profile.routes"));
var auth_routes_1 = __importDefault(require("./routes/auth.routes"));
var app = (0, express_1.default)();
(0, dotenv_1.config)();
(0, db_1.default)();
app
    .use((0, cors_1.default)())
    .use((0, express_1.urlencoded)())
    .use((0, body_parser_1.default)())
    .use((0, cookie_parser_1.default)())
    .use((0, express_1.static)("static"))
    .use("/auth", [auth_routes_1.default])
    .use("/description", [description_routes_1.default])
    .use("/skills", [skill_routes_1.default])
    .use("/projects", [project_routes_1.default])
    .use("/profile", profile_routes_1.default)
    .listen(process.env.PORT, function () {
    console.log("server is running on ".concat(process.env.PORT));
});
