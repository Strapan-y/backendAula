import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { answerOptionService } from './answerOption.service';

@Controller('answerOption')
export class answerOptionController {

  constructor(private readonly answerOptionService: answerOptionService) { }

  @Get('/all')
  async getAll() {
    return await this.answerOptionService.getAll()
  }

  @Get('/byName/:name')
  async getanswerOptionByName(@Param('name') name: String) {
    return await this.answerOptionService.getanswerOptionByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.answerOptionService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.answerOptionService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.answerOptionService.delete(id)
  }
}