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
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
var definition_1 = require("../../models/definition");
var users_1 = require("../../models/users");
var utils_1 = require("../../helpers/utils");
var store = new definition_1.DefinitionStore();
var userStore = new users_1.UserStore();
beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userStore.create('1', 'paul', 'paul2', 'paul@gmai.com', '1234', '2020-12-12')];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
afterAll(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, userStore.delete('paul2')];
        case 1: return [2 /*return*/, [_a.sent()]];
    }
}); }); });
// tests for definition model
describe('definition model', function () {
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
        it('should have an update method', function () {
            expect(store.update).toBeDefined();
        });
        it('should have a delete method', function () {
            expect(store.delete).toBeDefined();
        });
    });
    // second part: test if the different method behave as intended
    describe('method behavior', function () {
        it('should create a new definition', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, store.create('1', 1, 1, 'title exemple', 'description exemple', 'exemple exemple', true, '2020-12-10', '2020-12-10', 0, 0, 0)];
                    case 1:
                        result = _a.sent();
                        expect(result.id).toEqual(1);
                        expect(result.author_id).toEqual('1');
                        expect(result.category_id).toEqual(1);
                        expect(result.category_letter_id).toEqual(1);
                        expect(result.title).toEqual('title exemple');
                        expect(result.description).toEqual('description exemple');
                        expect(result.exemple).toEqual('exemple exemple');
                        expect(utils_1.date(result.created_at)).toEqual(utils_1.date('2020-12-10'));
                        expect(utils_1.date(result.updated_at)).toEqual(utils_1.date('2020-12-10'));
                        expect(result.up_votes).toEqual(0);
                        expect(result.down_votes).toEqual(0);
                        expect(result.vote_score).toEqual(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should display all the definitions created', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, store.index()];
                    case 1:
                        result = _a.sent();
                        expect(result[0].id).toEqual(1);
                        expect(result[0].author_id).toEqual('1');
                        expect(result[0].category_id).toEqual(1);
                        expect(result[0].category_letter_id).toEqual(1);
                        expect(result[0].title).toEqual('title exemple');
                        expect(result[0].description).toEqual('description exemple');
                        expect(result[0].exemple).toEqual('exemple exemple');
                        expect(utils_1.date(result[0].created_at)).toEqual(utils_1.date('2020-12-10'));
                        expect(utils_1.date(result[0].updated_at)).toEqual(utils_1.date('2020-12-10'));
                        expect(result[0].up_votes).toEqual(0);
                        expect(result[0].down_votes).toEqual(0);
                        expect(result[0].vote_score).toEqual(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should show the tuple with id 1', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, store.show(1)];
                    case 1:
                        result = _a.sent();
                        expect(result.id).toEqual(1);
                        expect(result.author_id).toEqual('1');
                        expect(result.category_id).toEqual(1);
                        expect(result.category_letter_id).toEqual(1);
                        expect(result.title).toEqual('title exemple');
                        expect(result.description).toEqual('description exemple');
                        expect(result.exemple).toEqual('exemple exemple');
                        expect(utils_1.date(result.created_at)).toEqual(utils_1.date('2020-12-10'));
                        expect(utils_1.date(result.updated_at)).toEqual('2020-12-10');
                        expect(result.up_votes).toEqual(0);
                        expect(result.down_votes).toEqual(0);
                        expect(result.vote_score).toEqual(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should update the definition', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, store.update(1, 'title', 'description', 'exemple', '2021-06-03')];
                    case 1:
                        result = _a.sent();
                        expect(result.id).toEqual(1);
                        expect(result.author_id).toEqual('1');
                        expect(result.category_id).toEqual(1);
                        expect(result.category_letter_id).toEqual(1);
                        expect(result.title).toEqual('title');
                        expect(result.description).toEqual('description');
                        expect(result.exemple).toEqual('exemple');
                        expect(utils_1.date(result.created_at)).toEqual(utils_1.date('2020-12-10'));
                        expect(utils_1.date(result.updated_at)).toEqual(utils_1.date('2021-06-03'));
                        expect(result.up_votes).toEqual(0);
                        expect(result.down_votes).toEqual(0);
                        expect(result.vote_score).toEqual(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should delete the tuple with id 1', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, store.delete(1)];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, userStore.delete('paul2')];
                    case 2:
                        user = _a.sent();
                        expect(result.id).toEqual(1);
                        expect(result.author_id).toEqual('1');
                        expect(result.category_id).toEqual(1);
                        expect(result.category_letter_id).toEqual(1);
                        expect(result.title).toEqual('title');
                        expect(result.description).toEqual('description');
                        expect(result.exemple).toEqual('exemple');
                        expect(utils_1.date(result.created_at)).toEqual(utils_1.date('2020-12-10'));
                        expect(utils_1.date(result.updated_at)).toEqual(utils_1.date('2021-06-03'));
                        expect(result.up_votes).toEqual(0);
                        expect(result.down_votes).toEqual(0);
                        expect(result.vote_score).toEqual(0);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
