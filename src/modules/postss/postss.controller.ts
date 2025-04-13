import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { postsService } from './postss.service';

@Controller('posts')
export class postsController {

  constructor(private readonly postsService: postsService) { }

  @Get('/all')
  async getAll() {
    return await this.postsService.getAll()
  }

  @Get('/byName/:name')
  async getpostsByName(@Param('name') name: String) {
    return await this.postsService.getpostsByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.postsService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.postsService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.postsService.delete(id)
  }
}