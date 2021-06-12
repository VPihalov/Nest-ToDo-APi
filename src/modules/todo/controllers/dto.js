"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UpdateDto = exports.CreateDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var CreateDto = /** @class */ (function () {
    function CreateDto() {
    }
    __decorate([
        swagger_1.ApiProperty()
    ], CreateDto.prototype, "title");
    __decorate([
        swagger_1.ApiProperty({ required: false })
    ], CreateDto.prototype, "comment");
    __decorate([
        swagger_1.ApiProperty({ required: false })
    ], CreateDto.prototype, "isCompleted");
    return CreateDto;
}());
exports.CreateDto = CreateDto;
;
var UpdateDto = /** @class */ (function () {
    function UpdateDto() {
    }
    __decorate([
        swagger_1.ApiProperty()
    ], UpdateDto.prototype, "title");
    __decorate([
        swagger_1.ApiProperty({ required: false })
    ], UpdateDto.prototype, "comment");
    __decorate([
        swagger_1.ApiProperty({ required: false })
    ], UpdateDto.prototype, "isCompleted");
    return UpdateDto;
}());
exports.UpdateDto = UpdateDto;
