"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var morgan_1 = __importDefault(require("morgan"));
var express_rate_limit_1 = __importDefault(require("express-rate-limit"));
var config_1 = require("./config");
// Routes imports
var category_1 = __importDefault(require("./handlers/category"));
var categoryLetter_1 = __importDefault(require("./handlers/categoryLetter"));
var tag_1 = __importDefault(require("./handlers/tag"));
var users_1 = __importDefault(require("./handlers/users"));
var app = express_1.default();
var limiter = express_rate_limit_1.default({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many accounts created from this IP, please try again after a minute',
});
// Middlewares
app.use(helmet_1.default());
app.use(morgan_1.default('common'));
app.use(limiter);
// Endpoints
app.get('/', function (_req, res) {
    res.json({
        message: 'Welcome to uraban african dictionnary',
    });
});
category_1.default(app);
categoryLetter_1.default(app);
tag_1.default(app);
users_1.default(app);
// Listen
app.listen(config_1.port, function () {
    // eslint-disable-next-line no-console
    console.log("server listening on http://localhost:" + config_1.port);
});
exports.default = app;
