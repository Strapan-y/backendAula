import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { userGroupService } from './userGroup.service';

@Controller('userGroup')
export class userGroupController {

  constructor(private readonly userGroupService: userGroupService) { }

  @Get('/all')
  async getAll() {
    return await this.userGroupService.getAll()
  }

  @Get('/byName/:name')
  async getuserGroupByName(@Param('name') name: String) {
    return await this.userGroupService.getuserGroupByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.userGroupService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.userGroupService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.userGroupService.delete(id)
  }
}