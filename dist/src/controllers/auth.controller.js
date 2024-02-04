"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authentification = exports.createAuth = void 0;
const auth_model_1 = __importDefault(require("../models/auth.model"));
const jsonwebtoken_1 = require("jsonwebtoken");
async function createAuth(req, res) {
    try {
        const { name, email, password } = req.body;
        const auth = await auth_model_1.default.create({ name, email, password });
        if (auth) {
            res.status(200).json(auth);
        }
        else {
            res.status(400).send("Une érreur est survenue.");
        }
    }
    catch (err) {
        res.status(400).json(err);
    }
}
exports.createAuth = createAuth;
async function authentification(req, res) {
    const { email, password } = req.body;
    const authBool = await auth_model_1.default.authentification(email, password);
    if (authBool) {
        const auth = await auth_model_1.default.findOne({ email });
        const token = await (0, jsonwebtoken_1.sign)({ ...auth }, "shhhhh");
        res.status(200).cookie("auth", "");
    }
}
exports.authentification = authentification;
