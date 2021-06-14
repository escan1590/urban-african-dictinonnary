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
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
var uuid_1 = require("uuid");
var utils_1 = require("../helpers/utils");
var users_1 = require("../models/users");
var verifyAuth_1 = require("../middleware/verifyAuth");
dotenv_1.default.config();
var store = new users_1.UserStore();
var secret = process.env.TOKEN_SECRET;
var index = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, store.index()];
            case 1:
                result = _a.sent();
                if (!result) {
                    res.status(204).send('No records');
                }
                else {
                    res.send(result);
                }
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(400).send("Unable to show users items : " + error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Should check if the username was the good one berfore allowing this
var show = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var username, result, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                username = _req.params.username;
                if (!username)
                    throw new Error('No username provided');
                return [4 /*yield*/, store.show(username)];
            case 1:
                result = _a.sent();
                if (!result) {
                    res.status(204).send('No such record');
                }
                else {
                    res.send(result);
                }
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(400).send("Unable to show user : " + error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var create = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name_1, username, email, password, id, createdAt, newUserCreated, token, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                if (!_req.body)
                    throw new Error('No datas Provided');
                _a = _req.body, name_1 = _a.name, username = _a.username, email = _a.email, password = _a.password;
                id = uuid_1.v4();
                createdAt = utils_1.date(Date.now());
                return [4 /*yield*/, store.create(id, name_1, username, email, password, createdAt)];
            case 1:
                newUserCreated = _b.sent();
                token = jsonwebtoken_1.default.sign({ user: newUserCreated }, secret);
                res.json(token);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _b.sent();
                res.status(400).send("Unable to create user : " + error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var authenticate = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, signedInUser, token, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                if (!_req.body.username || !_req.body.password)
                    throw new Error("password or username missing");
                _a = _req.body, username = _a.username, password = _a.password;
                return [4 /*yield*/, store.authenticate(username, password)];
            case 1:
                signedInUser = _b.sent();
                if (!signedInUser)
                    throw new Error("Wrong password or Username");
                token = jsonwebtoken_1.default.sign({ user: signedInUser }, secret);
                res.json(token);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _b.sent();
                res.status(400).send("Unable to authenticate : " + error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// const update = (_req: Request, res: Response) => {
//   const user = {
//     id: _req.params.id,
//     username: _req.body.username,
//     password: _req.body.password,
//     email: _req.body.email,
//   };
//   try {
//     const authorizationHeader = _req.headers.authorization;
//     const token = authorizationHeader?.split(' ')[1] as string;
//     const decoded = jwt.verify(token, secret);
//     if (decoded.id !== user.id) {
//       throw new Error(`Not authorize to save modifications`);
//     }
//     store.update()
//   } catch (error) {
//     res.status(400).send(`Unable to upadte user : ${error}`);
//   }
// };
var remove = function (_req, res) {
    var username = _req.params.username;
    try {
        var user = store.delete(username);
        res.send(user);
    }
    catch (error) {
        res.status(400).send("Unable to delete user : " + error);
    }
};
var userRoute = function (app) {
    app.get('/user/all', index);
    app.get('/user/:id/:username', verifyAuth_1.verifyAuthId, show);
    app.post('/user', express_1.default.json(), create);
    app.post('/user/login', express_1.default.json(), authenticate);
    app.delete('/user/:id/:username', verifyAuth_1.verifyAuthId, remove);
};
exports.default = userRoute;
