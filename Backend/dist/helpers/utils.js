"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.date = void 0;
/* eslint-disable import/prefer-default-export */
/**
 * A method to format date from the database date
 * @param {*} timestamp
 * @returns formated date
 */
var date = function (timestamp) {
    var pubDate = new Date(timestamp);
    var formattedDate = pubDate.getFullYear() + "-" + (pubDate.getMonth() + 1) + "-" + pubDate.getDate();
    return formattedDate;
};
exports.date = date;
