"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt_1 = require("bcrypt");
const authSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        require: true,
        trim: true,
    },
}, {
    timestamps: true,
});
authSchema.pre("save", async function () {
    const salt = await (0, bcrypt_1.genSalt)(10);
    this.password = await (0, bcrypt_1.hash)(this.password, salt);
});
authSchema.static("authentification", async function (email, password) {
    const auth = await AuthModel.findOne({ email });
    if (auth) {
        const verif = await (0, bcrypt_1.compare)(password, auth.password);
        if (verif) {
            return true;
        }
        else {
            return false;
        }
    }
});
const AuthModel = (0, mongoose_1.model)("auth", authSchema);
exports.default = AuthModel;
