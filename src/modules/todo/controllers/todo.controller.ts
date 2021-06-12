import { Controller, Delete, Get, Post, Param, Body, Put, HttpException, HttpStatus } from '@nestjs/common';
import { Todo } from '../entities/todo.entity';
import { TodoService } from '../services/todo.service';
import { ApiTags } from '@nestjs/swagger'
import { Crud, CrudController } from "@nestjsx/crud";

@Crud({
  model: {
    type: Todo,
  },
})
@Controller('rest/todo')
@ApiTags('todo')
export class TodoController implements CrudController<Todo> {

  constructor(public service: TodoService) {}

}
