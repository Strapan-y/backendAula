import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { roleService } from './role.service';

@Controller('role')
export class roleController {

  constructor(private readonly roleService: roleService) { }

  @Get('/all')
  async getAll() {
    return await this.roleService.getAll()
  }

  @Get('/byName/:name')
  async getroleByName(@Param('name') name: String) {
    return await this.roleService.getroleByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.roleService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.roleService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.roleService.delete(id)
  }
}