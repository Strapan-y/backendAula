import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { forumService } from './forumm.service';

@Controller('forum')
export class forumController {

  constructor(private readonly forumService: forumService) { }

  @Get('/all')
  async getAll() {
    return await this.forumService.getAll()
  }

  @Get('/byName/:name')
  async getforumByName(@Param('name') name: String) {
    return await this.forumService.getforumByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.forumService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.forumService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.forumService.delete(id)
  }
}