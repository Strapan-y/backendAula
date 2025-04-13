import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { questionsService } from './questions.service';

@Controller('questions')
export class questionsController {

  constructor(private readonly questionsService: questionsService) { }

  @Get('/all')
  async getAll() {
    return await this.questionsService.getAll()
  }

  @Get('/byName/:name')
  async getquestionsByName(@Param('name') name: String) {
    return await this.questionsService.getquestionsByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.questionsService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.questionsService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.questionsService.delete(id)
  }
}