"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findLetterId = exports.date = void 0;
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
var findLetterId = function (word) {
    var splited = word.split('');
    var firstLetter = splited[0].toUpperCase();
    var letterArr = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
    ];
    return letterArr.indexOf(firstLetter) + 1;
};
exports.findLetterId = findLetterId;
