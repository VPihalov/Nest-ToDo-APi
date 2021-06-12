"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Todo = void 0;
var typeorm_1 = require("typeorm");
var Todo = /** @class */ (function () {
    function Todo() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Todo.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], Todo.prototype, "title");
    __decorate([
        typeorm_1.Column()
    ], Todo.prototype, "comment");
    __decorate([
        typeorm_1.Column({ "default": false })
    ], Todo.prototype, "isCompleted");
    Todo = __decorate([
        typeorm_1.Entity({})
    ], Todo);
    return Todo;
}());
exports.Todo = Todo;