import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { topicsService } from './topics.service';

@Controller('topics')
export class topicsController {

  constructor(private readonly topicsService: topicsService) { }

  @Get('/all')
  async getAll() {
    return await this.topicsService.getAll()
  }

  @Get('/byName/:name')
  async gettopicsByName(@Param('name') name: String) {
    return await this.topicsService.gettopicsByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.topicsService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.topicsService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.topicsService.delete(id)
  }
}