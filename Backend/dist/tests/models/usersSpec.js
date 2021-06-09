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
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
var uuid_1 = require("uuid");
var bcrypt_1 = __importDefault(require("bcrypt"));
var dotenv_1 = __importDefault(require("dotenv"));
var users_1 = require("../../models/users");
var utils_1 = require("../../helpers/utils");
dotenv_1.default.config();
var pepper = process.env.BCRYPT_PASSWORD;
var store = new users_1.UserStore();
// tests for definition model
describe('users model', function () {
    // fist part: test if the methods are defined
    describe('method definition', function () {
        it('should have an index method', function () {
            expect(store.index).toBeDefined();
        });
        it('should have a show method', function () {
            expect(store.show).toBeDefined();
        });
        it('should have a create method', function () {
            expect(store.create).toBeDefined();
        });
        // it("should have an update method", () => {
        //   expect(store.update).toBeDefined();
        // });
        it('should have a delete method', function () {
            expect(store.delete).toBeDefined();
        });
    });
    // second part: test if the different method behave as intended
    describe('method behavior', function () {
        var userId = uuid_1.v4();
        it('should create a new user', function () { return __awaiter(void 0, void 0, void 0, function () {
            var newUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, store.create("" + userId, 'daniel', 'dan', 'dan@gmail.com', '1234', '2020-12-12')];
                    case 1:
                        newUser = _a.sent();
                        // console.log(date(newUser.registered_at));
                        // console.log('created', newUser);
                        expect(newUser.id).toEqual(userId);
                        expect(newUser.name).toEqual('daniel');
                        expect(newUser.username).toEqual('dan');
                        expect(newUser.email).toEqual('dan@gmail.com');
                        expect(bcrypt_1.default.compareSync("1234" + pepper, newUser.password_hash)).toBeTrue();
                        expect(utils_1.date(newUser.registered_at)).toEqual('2020-12-12');
                        return [2 /*return*/];
                }
            });
        }); });
        it('should display the user auhenticated', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, store.authenticate('dan', '1234')];
                    case 1:
                        result = (_a.sent());
                        expect(result.username).toEqual('dan');
                        expect(bcrypt_1.default.compareSync("1234" + pepper, result.password_hash)).toBeTrue();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should display all the users created', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, store.index()];
                    case 1:
                        result = _a.sent();
                        // console.log('all', result);
                        expect(result[0].id).toEqual(userId);
                        expect(result[0].name).toEqual('daniel');
                        expect(result[0].username).toEqual('dan');
                        expect(result[0].email).toEqual('dan@gmail.com');
                        expect(bcrypt_1.default.compareSync("1234" + pepper, result[0].password_hash)).toBeTrue();
                        expect(utils_1.date(result[0].registered_at)).toEqual('2020-12-12');
                        return [2 /*return*/];
                }
            });
        }); });
        it("should show the tuple with username \"dan\"", function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, store.show('dan')];
                    case 1:
                        result = _a.sent();
                        // console.log('show', result);
                        expect(result.id).toEqual(userId);
                        expect(result.name).toEqual('daniel');
                        expect(result.username).toEqual('dan');
                        expect(result.email).toEqual('dan@gmail.com');
                        expect(bcrypt_1.default.compareSync("1234" + pepper, result.password_hash)).toBeTrue();
                        expect(utils_1.date(result.registered_at)).toEqual('2020-12-12');
                        return [2 /*return*/];
                }
            });
        }); });
        // it("should update the userInfo", async () => {
        //   const result = await store.update(userId,"newDaniel","newDan","newMail@gm.co","newPassword");
        //   expect(result).toEqual({
        //     id: userId,
        //     name: "newDaniel",
        //     username: "newDan",
        //     email: "newMail@gm.co",
        //     passwordHash: "newPassword",
        //     registeredAt: "2020-12-12",
        //   })
        // });
        it('should delete the tuple with username dan', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, store.delete('dan')];
                    case 1:
                        result = _a.sent();
                        // console.log('delete', result);
                        expect(result.id).toEqual(userId);
                        expect(result.name).toEqual('daniel');
                        expect(result.username).toEqual('dan');
                        expect(result.email).toEqual('dan@gmail.com');
                        expect(bcrypt_1.default.compareSync("1234" + pepper, result.password_hash)).toBeTrue();
                        expect(utils_1.date(result.registered_at)).toEqual('2020-12-12');
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
