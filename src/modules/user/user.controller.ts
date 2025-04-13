import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { userService } from './user.service';

@Controller('user')
export class userController {

  constructor(private readonly userService: userService) { }

  @Get('/all')
  async getAll() {
    return await this.userService.getAll()
  }

  @Get('/byName/:name')
  async getuserByName(@Param('name') name: String) {
    return await this.userService.getuserByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.userService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.userService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.userService.delete(id)
  }
}