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
exports.getSubprojectById = exports.getAllSubprojectsByProjectId = exports.getAllSubprojects = exports.createSubproject = void 0;
var subproject_model_1 = __importDefault(require("../models/subproject.model"));
var languageTranslation_1 = __importDefault(require("../tools/languageTranslation"));
var project_model_1 = __importDefault(require("../models/project.model"));
function createSubproject(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, project_id, fr_title, stack, fr_description, skills, url, git_repo_url, title, description, project, subproject, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, project_id = _a.project_id, fr_title = _a.fr_title, stack = _a.stack, fr_description = _a.fr_description, skills = _a.skills, url = _a.url, git_repo_url = _a.git_repo_url;
                    return [4 /*yield*/, (0, languageTranslation_1.default)(fr_title)];
                case 1:
                    title = _b.sent();
                    return [4 /*yield*/, (0, languageTranslation_1.default)(fr_description)];
                case 2:
                    description = _b.sent();
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 8, , 9]);
                    return [4 /*yield*/, project_model_1.default.findById(project_id)];
                case 4:
                    project = _b.sent();
                    if (!project) return [3 /*break*/, 6];
                    return [4 /*yield*/, subproject_model_1.default.create({
                            project_id: project_id,
                            title: title,
                            stack: stack,
                            description: description,
                            skills: skills,
                            url: url,
                            git_repo_url: git_repo_url,
                        })];
                case 5:
                    subproject = _b.sent();
                    if (subproject) {
                        res.status(200).json(subproject);
                    }
                    else {
                        res.status(400).json(subproject);
                    }
                    return [3 /*break*/, 7];
                case 6:
                    res.status(400).send("L'denfient du projet est incorrecte");
                    _b.label = 7;
                case 7: return [3 /*break*/, 9];
                case 8:
                    err_1 = _b.sent();
                    res.status(400).json(err_1);
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    });
}
exports.createSubproject = createSubproject;
function getAllSubprojects(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var subprojects, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, subproject_model_1.default.find({})];
                case 1:
                    subprojects = _a.sent();
                    if (subprojects) {
                        res.status(200).json(subprojects);
                    }
                    else {
                        res.status(400).json(subprojects);
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
exports.getAllSubprojects = getAllSubprojects;
function getAllSubprojectsByProjectId(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var project_id, subprojects, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    project_id = req.params.project_id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, subproject_model_1.default.find({ project_id: project_id })];
                case 2:
                    subprojects = _a.sent();
                    if (subprojects) {
                        res.status(200).json(subprojects);
                    }
                    else {
                        res.status(400).json(subprojects);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_3 = _a.sent();
                    res.status(400).json(err_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getAllSubprojectsByProjectId = getAllSubprojectsByProjectId;
function getSubprojectById(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, subproject, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, subproject_model_1.default.findById(id)];
                case 2:
                    subproject = _a.sent();
                    console.log(subproject);
                    if (subproject) {
                        res.status(200).json(subproject);
                    }
                    else {
                        res.status(400).json(subproject);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_4 = _a.sent();
                    res.status(400).json(err_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getSubprojectById = getSubprojectById;
