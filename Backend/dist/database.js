"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var dotenv_1 = __importDefault(require("dotenv"));
// step 1: load .env datas
dotenv_1.default.config();
// eslint-disable-next-line import/no-mutable-exports
var Client;
var ENV = process.env.ENV;
// step 2: extract .env datas for db connection
var config = {
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    databaseTest: process.env.POSTGRES_DB_TEST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
};
// step 3: create the client depending on the environment
if (ENV === 'dev') {
    Client = new pg_1.Pool({
        host: config.host,
        database: config.database,
        user: config.user,
        password: config.password,
    });
}
else {
    Client = new pg_1.Pool({
        host: config.host,
        database: config.databaseTest,
        user: config.user,
        password: config.password,
    });
}
exports.default = Client;
