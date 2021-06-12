"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.__esModule = true;
exports.TodoController = void 0;
var common_1 = require("@nestjs/common");
var todo_entity_1 = require("../entities/todo.entity");
var dto_1 = require("./dto");
var swagger_1 = require("@nestjs/swagger");
var TodoController = /** @class */ (function () {
    function TodoController(todoService) {
        this.todoService = todoService;
    }
    TodoController.prototype.getAllActions = function () {
        console.log("Get all todos");
        return this.todoService.findAll();
    };
    TodoController.prototype.getOneAction = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var lodedTodo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Get one todo " + id);
                        return [4 /*yield*/, this.todoService.findOne(id)];
                    case 1:
                        lodedTodo = _a.sent();
                        if (!lodedTodo) {
                            throw new common_1.HttpException("Todo with id " + id + " not found", common_1.HttpStatus.NOT_FOUND);
                        }
                        else {
                            return [2 /*return*/, lodedTodo];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TodoController.prototype.saveAction = function (createDto) {
        var todo = new todo_entity_1.Todo();
        todo.title = createDto.title;
        todo.comment = createDto.comment;
        if (createDto.comment) {
            todo.comment = createDto.comment;
        }
        if (createDto.isCompleted) {
            todo.isCompleted = createDto.isCompleted;
        }
        todo.isCompleted = createDto.isCompleted;
        console.log("body---->", todo);
        return this.todoService.saveAction(todo);
    };
    TodoController.prototype.updateAction = function (id, _a) {
        var title = _a.title, comment = _a.comment, isCompleted = _a.isCompleted;
        return __awaiter(this, void 0, void 0, function () {
            var todo;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.todoService.findOne(id)];
                    case 1:
                        todo = _b.sent();
                        if (!todo) {
                            throw new common_1.HttpException("Todo with id " + id + " not found", common_1.HttpStatus.NOT_FOUND);
                        }
                        todo.title = title;
                        todo.comment = comment;
                        todo.isCompleted = isCompleted;
                        return [2 /*return*/, this.todoService.updateAction(todo)];
                }
            });
        });
    };
    TodoController.prototype.deleteAction = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var todo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Delete todo " + id);
                        return [4 /*yield*/, this.todoService.findOne(id)];
                    case 1:
                        todo = _a.sent();
                        if (!todo) {
                            throw new common_1.HttpException("Todo with id " + id + " not found", common_1.HttpStatus.NOT_FOUND);
                        }
                        return [4 /*yield*/, this.todoService.remove(id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, {
                                success: true
                            }];
                }
            });
        });
    };
    __decorate([
        common_1.Get(),
        swagger_1.ApiResponse({
            status: 200,
            description: 'get all todos',
            type: [todo_entity_1.Todo]
        })
    ], TodoController.prototype, "getAllActions");
    __decorate([
        common_1.Get(':id'),
        swagger_1.ApiResponse({
            status: 200,
            description: 'get todo by id',
            type: todo_entity_1.Todo
        }),
        swagger_1.ApiResponse({
            status: 404,
            description: 'Todo not found',
            type: INotFoundResponse
        }),
        __param(0, common_1.Param('id'))
    ], TodoController.prototype, "getOneAction");
    __decorate([
        common_1.Post(),
        swagger_1.ApiBody({ type: dto_1.CreateDto }),
        swagger_1.ApiResponse({
            status: 200,
            description: 'create todo',
            type: todo_entity_1.Todo
        }),
        __param(0, common_1.Body())
    ], TodoController.prototype, "saveAction");
    __decorate([
        common_1.Put(':id'),
        swagger_1.ApiBody({ type: dto_1.UpdateDto }),
        swagger_1.ApiResponse({
            status: 200,
            description: 'update todo by id',
            type: todo_entity_1.Todo
        }),
        swagger_1.ApiResponse({
            status: 404,
            description: 'Todo not found'
        }),
        __param(0, common_1.Param()),
        __param(1, common_1.Body())
    ], TodoController.prototype, "updateAction");
    __decorate([
        common_1.Delete(':id'),
        swagger_1.ApiResponse({
            status: 200,
            description: 'delete todo by id'
        }),
        swagger_1.ApiResponse({
            status: 404,
            description: 'Todo not found'
        }),
        __param(0, common_1.Param('id'))
    ], TodoController.prototype, "deleteAction");
    TodoController = __decorate([
        common_1.Controller('rest/todo'),
        swagger_1.ApiTags('todo')
    ], TodoController);
    return TodoController;
}());
exports.TodoController = TodoController;
