"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
function db_connexion() {
    try {
        (0, mongoose_1.connect)(process.env.URI);
    }
    catch (err) {
        console.log("Connexion impossible");
    }
}
exports.default = db_connexion;
