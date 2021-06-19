"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAuthIdDef = exports.verifyAuthId = exports.verifyAuth = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var verifyAuth = function (req, res, next) {
    try {
        var authorizationHeader = req.headers.authorization;
        var token = authorizationHeader === null || authorizationHeader === void 0 ? void 0 : authorizationHeader.split(' ')[1];
        var secret = process.env.TOKEN_SECRET;
        var user = jsonwebtoken_1.default.verify(token, secret).user;
        // eslint-disable-next-line no-param-reassign
        // @ts-ignore
        // eslint-disable-next-line no-param-reassign
        req.idUser = user.id;
        next();
    }
    catch (error) {
        res.status(401);
        res.json("Unable to authenticate : " + error);
        // eslint-disable-next-line no-useless-return
        return;
    }
};
exports.verifyAuth = verifyAuth;
var verifyAuthId = function (_req, res, next) {
    var userCheck = {
        id: _req.params.id,
        username: _req.params.username,
    };
    try {
        var authorizationHeader = _req.headers.authorization;
        var token = authorizationHeader === null || authorizationHeader === void 0 ? void 0 : authorizationHeader.split(' ')[1];
        var secret = process.env.TOKEN_SECRET;
        var user = jsonwebtoken_1.default.verify(token, secret).user;
        if (user.id !== userCheck.id || user.username !== userCheck.username) {
            throw new Error('authorization denied');
        }
        next();
    }
    catch (error) {
        res.status(401);
        res.json("Unable to authenticate : " + error);
        // eslint-disable-next-line no-useless-return
        return;
    }
};
exports.verifyAuthId = verifyAuthId;
var verifyAuthIdDef = function (_req, res, next) {
    var userCheck = {
        authorId: _req.params.authorId,
    };
    try {
        var authorizationHeader = _req.headers.authorization;
        var token = authorizationHeader === null || authorizationHeader === void 0 ? void 0 : authorizationHeader.split(' ')[1];
        var secret = process.env.TOKEN_SECRET;
        var user = jsonwebtoken_1.default.verify(token, secret).user;
        if (user.id !== userCheck.authorId) {
            throw new Error('authorization denied');
        }
        next();
    }
    catch (error) {
        res.status(401);
        res.json("Unable to authenticate : " + error);
        // eslint-disable-next-line no-useless-return
        return;
    }
};
exports.verifyAuthIdDef = verifyAuthIdDef;
