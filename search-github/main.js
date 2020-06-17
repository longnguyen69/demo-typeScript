"use strict";
exports.__esModule = true;
exports.Main = void 0;
var service_1 = require("./service");
var Main = /** @class */ (function () {
    function Main(service) {
        this.service = service;
    }
    Main.prototype.finProject = function (keyword) {
        this.service.getRepo(keyword).then(function (result) {
            console.log(result);
        });
    };
    return Main;
}());
exports.Main = Main;
var main = new Main(new service_1.Service);
main.finProject('laravel');
