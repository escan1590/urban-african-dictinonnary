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
        while (_) try {
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
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
var express_1 = __importDefault(require("express"));
var definition_1 = require("../models/definition");
var category_1 = require("../models/category");
var utils_1 = require("../helpers/utils");
var verifyAuth_1 = require("../middleware/verifyAuth");
var config_1 = require("../helpers/config");
var store = new definition_1.DefinitionStore();
var categoryStore = new category_1.CategoryStore();
var index = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, store.index()];
            case 1:
                result = _a.sent();
                if (!result)
                    throw new Error('No definitions to fetch');
                res.send(result);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(400).send("unable fetch definitions : " + error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// TODO create a show that only show definition for a particular user id
var indexUser = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var authorId, result, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                authorId = _req.params.authorId;
                if (!authorId)
                    throw new Error('Missing parameter');
                return [4 /*yield*/, store.indexUser(authorId)];
            case 1:
                result = _a.sent();
                if (!result)
                    throw new Error('No definition found');
                res.send(result);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(400).send("Unable to fetch definitions : " + error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var show = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = _req.params.id;
                if (!id)
                    throw new Error('Missing parameter');
                return [4 /*yield*/, store.show(id)];
            case 1:
                result = _a.sent();
                if (!result)
                    throw new Error('No definition found');
                res.send(result);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                res.status(400).send("Unable to fetch this definition : " + error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var create = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, categoryName, title, description, exemple, categoryId, authorId, categoryLetterId, createdAt, updatedAt, result, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = _req.body, categoryName = _a.categoryName, title = _a.title, description = _a.description, exemple = _a.exemple;
                return [4 /*yield*/, categoryStore.showCatID(categoryName)];
            case 1:
                categoryId = _b.sent();
                if (!categoryId)
                    throw new Error("Unable to select the categoy");
                authorId = _req.idUser;
                categoryLetterId = utils_1.findLetterId(title);
                createdAt = utils_1.date(Date.now());
                updatedAt = createdAt;
                return [4 /*yield*/, store.create(authorId, categoryId, categoryLetterId, title, description, exemple, true, createdAt, updatedAt)];
            case 2:
                result = _b.sent();
                res.send(result);
                return [3 /*break*/, 4];
            case 3:
                error_4 = _b.sent();
                res.status(400).send("Unable to create the definition : " + error_4);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
// TODO: create a show that only show definition for a particular user id
var update = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, title, description, exemple, updatedAt, result, error_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                id = _req.params.id;
                _a = _req.body, title = _a.title, description = _a.description, exemple = _a.exemple;
                if (!title || !description || !exemple)
                    throw new Error('cannot have empty entries for title, description or exemple');
                if (title.length < config_1.titleLeast)
                    throw new Error("title too short must have at least " + config_1.titleLeast + " characters");
                if (description.length < config_1.descLeast)
                    throw new Error("description too short must have at least " + config_1.descLeast + " characters");
                if (description.length < config_1.expLeast)
                    throw new Error("exemple too short must have at least " + config_1.expLeast + " characters");
                updatedAt = utils_1.date(Date.now());
                return [4 /*yield*/, store.update(id, title, description, exemple, updatedAt)];
            case 1:
                result = _b.sent();
                res.send(result);
                return [3 /*break*/, 3];
            case 2:
                error_5 = _b.sent();
                res.status(400).send("");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var definitionRoute = function (app) {
    app.get('/definition/all', index);
    app.get('/definition/user/:authorId', verifyAuth_1.verifyAuthIdDef, indexUser);
    app.get('/definition/:id', show);
    app.post('/definition', verifyAuth_1.verifyAuth, express_1.default.json(), create);
    app.put('/definition/:id', verifyAuth_1.verifyAuth, express_1.default.json(), update);
};
exports.default = definitionRoute;
