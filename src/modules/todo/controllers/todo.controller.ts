import { Controller, Delete, Get, Post, Param, Body, Put, HttpException, HttpStatus } from '@nestjs/common';
import { Todo } from '../entities/todo.entity';
import { CreateDto, UpdateDto } from './dto';
import { TodoService } from '../services/todo.service';

@Controller('rest/todo')
export class TodoController {

  constructor(private readonly todoService: TodoService) {}
 
  @Get()
  getAllActions(): Promise<Todo[]> {
    console.log(`Get all todos`);
    return this.todoService.findAll();
  }

  @Get(':id')
  async getOneAction(@Param('id') id: number): Promise<Todo> {
    console.log(`Get one todo ${id}`);
    const lodedTodo = await this.todoService.findOne(id);
    if (!lodedTodo) {
      throw new HttpException(`Todo with id ${id} not found`, HttpStatus.NOT_FOUND);
    } else {
      return lodedTodo
    }
  }

  @Post()
  saveAction(
    @Body() createDto: CreateDto): Promise<Todo> {
      const todo = new Todo();
      todo.title = createDto.title;
      todo.comment = createDto.comment;
      if (createDto.comment) {
        todo.comment = createDto.comment;
      }
      if (createDto.isCompleted) {
        todo.isCompleted = createDto.isCompleted;
      }
      todo.isCompleted = createDto.isCompleted;
      console.log(`body---->`, todo);
      return this.todoService.saveAction(todo);
  }

  @Put(':id')
  async updateAction(
    @Param() id: number,
    @Body() {title, comment, isCompleted}: UpdateDto
    ): Promise<Todo> {
      const todo = await this.todoService.findOne(id);
      if (!todo) {
        throw new HttpException(`Todo with id ${id} not found`, HttpStatus.NOT_FOUND);
      }
      todo.title = title;
      todo.comment = comment;
      todo.isCompleted = isCompleted;
      return this.todoService.updateAction(todo);
  }

  @Delete(':id')
  deleteAction(@Param('id') id: string): Promise<void> {
    console.log(`Delete todo ${id}`);
    return this.todoService.remove(id);
  }

}
