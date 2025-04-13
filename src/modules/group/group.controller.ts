import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { groupService } from './group.service';

@Controller('group')
export class groupController {

  constructor(private readonly groupService: groupService) { }

  @Get('/all')
  async getAll() {
    return await this.groupService.getAll()
  }

  @Get('/byName/:name')
  async getgroupByName(@Param('name') name: String) {
    return await this.groupService.getgroupByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.groupService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.groupService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.groupService.delete(id)
  }
}