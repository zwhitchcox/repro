"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
var module3_1 = require("module3");
var x = function () {
    console.log('running from module 2');
    module3_1.y();
};
exports.x = x;
