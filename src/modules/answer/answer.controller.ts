import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { answerService } from './answer.service';

@Controller('answer')
export class answerController {

  constructor(private readonly answerService: answerService) { }

  @Get('/all')
  async getAll() {
    return await this.answerService.getAll()
  }

  @Get('/byName/:name')
  async getanswerByName(@Param('name') name: String) {
    return await this.answerService.getanswerByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.answerService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.answerService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.answerService.delete(id)
  }
}