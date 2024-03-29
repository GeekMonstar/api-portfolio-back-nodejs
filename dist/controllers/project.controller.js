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
exports.deleteProject = exports.descriptionUpdating = exports.titleUpdating = exports.getProjectById = exports.getAllProjects = exports.createProject = void 0;
var project_model_1 = __importDefault(require("../models/project.model"));
var languageTranslation_1 = __importDefault(require("../tools/languageTranslation"));
function createProject(req, res, newFileName) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, fr_title, fr_description, skills, title, description, skillArray, project, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    _a = req.body, fr_title = _a.fr_title, fr_description = _a.fr_description, skills = _a.skills;
                    return [4 /*yield*/, (0, languageTranslation_1.default)(fr_title)];
                case 1:
                    title = _b.sent();
                    return [4 /*yield*/, (0, languageTranslation_1.default)(fr_description)];
                case 2:
                    description = _b.sent();
                    skillArray = typeof skills == "string" ? skills.split(",") : skills;
                    return [4 /*yield*/, project_model_1.default.create({
                            title: title,
                            image: newFileName,
                            description: description,
                            skills: skillArray,
                        })];
                case 3:
                    project = _b.sent();
                    if (project) {
                        res.status(200).json(project);
                    }
                    else {
                        throw new Error("Nous avons rencontré un probleme");
                    }
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _b.sent();
                    res.status(400).json(err_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.createProject = createProject;
function getAllProjects(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var projects, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, project_model_1.default.find({})];
                case 1:
                    projects = _a.sent();
                    if (projects) {
                        res.status(200).json(projects);
                    }
                    else {
                        res.status(400).send("Une érreur est survenue.");
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
exports.getAllProjects = getAllProjects;
function getProjectById(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, project, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.params.id;
                    return [4 /*yield*/, project_model_1.default.findById(id)];
                case 1:
                    project = _a.sent();
                    if (project) {
                        res.status(200).json(project);
                    }
                    else {
                        res.status(400).send("Une érreur est survenue.");
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
exports.getProjectById = getProjectById;
function titleUpdating(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var fr_title, id, title, project, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fr_title = req.body.fr_title;
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, (0, languageTranslation_1.default)(fr_title)];
                case 2:
                    title = _a.sent();
                    return [4 /*yield*/, project_model_1.default.findByIdAndUpdate(id, { title: title })];
                case 3:
                    project = _a.sent();
                    if (project) {
                        res.status(200).json(project);
                    }
                    else {
                        res.status(400);
                    }
                    return [3 /*break*/, 5];
                case 4:
                    err_4 = _a.sent();
                    res.status(400).json(err_4);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.titleUpdating = titleUpdating;
function descriptionUpdating(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var fr_description, id, description, project, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fr_description = req.body.fr_description;
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, (0, languageTranslation_1.default)(fr_description)];
                case 2:
                    description = _a.sent();
                    return [4 /*yield*/, project_model_1.default.findByIdAndUpdate(id, { description: description })];
                case 3:
                    project = _a.sent();
                    if (project) {
                        res.status(200).json(project);
                    }
                    else {
                        res.status(400).send("error");
                    }
                    return [3 /*break*/, 5];
                case 4:
                    err_5 = _a.sent();
                    res.status(400).json("error");
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.descriptionUpdating = descriptionUpdating;
function deleteProject(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, project, err_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, project_model_1.default.findByIdAndDelete(id)];
                case 2:
                    project = _a.sent();
                    if (project) {
                        res.status(200).send("Succesfully");
                    }
                    else {
                        res.status(400).json(project);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_6 = _a.sent();
                    res.status(400).json(err_6);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.deleteProject = deleteProject;
