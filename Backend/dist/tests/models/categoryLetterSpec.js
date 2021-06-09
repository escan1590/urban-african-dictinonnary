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
var categoryLetter_1 = require("../../models/categoryLetter");
var store = new categoryLetter_1.CategoryLetterStore();
// tests for definition model
describe('category_letter model', function () {
    // fist part: test if the methods are defined
    describe('method definition', function () {
        it('should have an index method', function () {
            expect(store.index).toBeDefined();
        });
        it('should have a show method', function () {
            expect(store.show).toBeDefined();
        });
    });
    describe('method behavior', function () {
        it('should display all the categories Letter', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, store.index()];
                    case 1:
                        result = _a.sent();
                        expect(result).toEqual([
                            {
                                id: 1,
                                letter: 'A',
                                path: 'A',
                            },
                            {
                                id: 2,
                                letter: 'B',
                                path: 'B',
                            },
                            {
                                id: 3,
                                letter: 'C',
                                path: 'C',
                            },
                            {
                                id: 4,
                                letter: 'D',
                                path: 'D',
                            },
                            {
                                id: 5,
                                letter: 'E',
                                path: 'E',
                            },
                            {
                                id: 6,
                                letter: 'F',
                                path: 'F',
                            },
                            {
                                id: 7,
                                letter: 'G',
                                path: 'G',
                            },
                            {
                                id: 8,
                                letter: 'H',
                                path: 'H',
                            },
                            {
                                id: 9,
                                letter: 'I',
                                path: 'I',
                            },
                            {
                                id: 10,
                                letter: 'J',
                                path: 'J',
                            },
                            {
                                id: 11,
                                letter: 'K',
                                path: 'K',
                            },
                            {
                                id: 12,
                                letter: 'L',
                                path: 'L',
                            },
                            {
                                id: 13,
                                letter: 'M',
                                path: 'M',
                            },
                            {
                                id: 14,
                                letter: 'N',
                                path: 'N',
                            },
                            {
                                id: 15,
                                letter: 'O',
                                path: 'O',
                            },
                            {
                                id: 16,
                                letter: 'P',
                                path: 'P',
                            },
                            {
                                id: 17,
                                letter: 'Q',
                                path: 'Q',
                            },
                            {
                                id: 18,
                                letter: 'R',
                                path: 'R',
                            },
                            {
                                id: 19,
                                letter: 'S',
                                path: 'S',
                            },
                            {
                                id: 20,
                                letter: 'T',
                                path: 'T',
                            },
                            {
                                id: 21,
                                letter: 'U',
                                path: 'U',
                            },
                            {
                                id: 22,
                                letter: 'V',
                                path: 'V',
                            },
                            {
                                id: 23,
                                letter: 'W',
                                path: 'W',
                            },
                            {
                                id: 24,
                                letter: 'X',
                                path: 'X',
                            },
                            {
                                id: 25,
                                letter: 'Y',
                                path: 'Y',
                            },
                            {
                                id: 26,
                                letter: 'Z',
                                path: 'Z',
                            },
                        ]);
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
                        expect(result).toEqual({
                            id: 1,
                            letter: 'A',
                            path: 'A',
                        });
                        return [2 /*return*/];
                }
            });
        }); });
    });
    // second part: test if the different method behave as intended
});
