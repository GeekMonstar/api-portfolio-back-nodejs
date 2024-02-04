"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.getAllDescriptions = exports.createDescription = void 0;
var description_model_1 = __importDefault(require("../models/description.model"));
var languageTranslation_1 = __importDefault(require("../tools/languageTranslation"));
function createDescription(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, id, fr_description, descriptionObject, fr, en, es, de, v_description, sendDescription, description, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 7, , 8]);
                    _a = req.body, id = _a.id, fr_description = _a.fr_description;
                    return [4 /*yield*/, (0, languageTranslation_1.default)(fr_description)];
                case 1:
                    descriptionObject = _b.sent();
                    fr = descriptionObject.fr, en = descriptionObject.en, es = descriptionObject.es, de = descriptionObject.de;
                    return [4 /*yield*/, description_model_1.default.findOne({})];
                case 2:
                    v_description = _b.sent();
                    console.log(v_description);
                    if (!v_description) return [3 /*break*/, 4];
                    return [4 /*yield*/, description_model_1.default.findOneAndUpdate({}, {
                            $set: {
                                fr: fr,
                                en: en,
                                es: es,
                                de: de,
                            },
                        })];
                case 3:
                    sendDescription = _b.sent();
                    if (sendDescription) {
                        console.log("Trouvé et modifié.");
                        res.status(200).json(descriptionObject);
                    }
                    else {
                        res.status(400).json(sendDescription);
                    }
                    return [3 /*break*/, 6];
                case 4:
                    console.log(v_description);
                    return [4 /*yield*/, description_model_1.default.create({ fr: fr, en: en, es: es, de: de })];
                case 5:
                    description = _b.sent();
                    if (description) {
                        res.status(200).json(descriptionObject);
                    }
                    else {
                        res.status(400).json(descriptionObject);
                    }
                    _b.label = 6;
                case 6: return [3 /*break*/, 8];
                case 7:
                    err_1 = _b.sent();
                    res.status(400).json(err_1);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
exports.createDescription = createDescription;
function getAllDescriptions(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var descriptions, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, description_model_1.default.find({})];
                case 1:
                    descriptions = _a.sent();
                    if (descriptions) {
                        res.status(200).json(descriptions);
                    }
                    else {
                        res.status(404).send("Rien n'a été trouvé.");
                    }
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    res.status(400).json(err_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getAllDescriptions = getAllDescriptions;
function get(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var descriptions, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, description_model_1.default.find({})];
                case 1:
                    descriptions = _a.sent();
                    if (descriptions) {
                        res.status(200).json(descriptions);
                    }
                    else {
                        res.status(404).send("Rien n'a été trouvé.");
                    }
                    return [3 /*break*/, 3];
                case 2:
                    err_3 = _a.sent();
                    res.status(400).json(err_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.get = get;
