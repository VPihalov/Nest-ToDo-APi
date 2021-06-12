import { Controller, Delete, Get, Post, Param, Body, Put, HttpException, HttpStatus } from '@nestjs/common';
import { Todo } from '../entities/todo.entity';
import { CreateDto, UpdateDto } from './dto';
import { TodoService } from '../services/todo.service';
import { ApiBody, ApiTags, ApiResponse } from '@nestjs/swagger'
import { NotFoundResponse } from './type';

@Controller('rest/todo')
@ApiTags('todo')
export class TodoController {

  constructor(private readonly todoService: TodoService) {}
 
  @Get()
  @ApiResponse({
    status: 200,
    description: 'get all todos',
    type: [Todo]
  })
  getAllActions(): Promise<Todo[]> {
    console.log(`Get all todos`);
    return this.todoService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'get todo by id',
    type: Todo
  })
  @ApiResponse({
    status: 404,
    description: 'Todo not found',
    type: NotFoundResponse
  })
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
  @ApiBody({type: CreateDto})
  @ApiResponse({
    status: 200,
    description: 'create todo',
    type: Todo
  })
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
  @ApiBody({type: UpdateDto})
  @ApiResponse({
    status: 200,
    description: 'update todo by id',
    type: Todo
  })
  @ApiResponse({
    status: 404,
    description: 'Todo not found'
  })
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
  @ApiResponse({
    status: 200,
    description: 'delete todo by id'
  })
  @ApiResponse({
    status: 404,
    description: 'Todo not found',
    type: NotFoundResponse
  })
  async deleteAction(
    @Param('id') id: number): Promise<{success: boolean}> {
      console.log(`Delete todo ${id}`);
      const todo = await this.todoService.findOne(id);
      if (!todo) {
        throw new HttpException(`Todo with id ${id} not found`, HttpStatus.NOT_FOUND);
      }  
      await this.todoService.remove(id)
      return {
        success: true
      };
  }  
}
