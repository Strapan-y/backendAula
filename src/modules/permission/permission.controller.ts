import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { permissionService } from './permission.service';

@Controller('permission')
export class permissionController {

  constructor(private readonly permissionService: permissionService) { }

  @Get('/all')
  async getAll() {
    return await this.permissionService.getAll()
  }

  @Get('/byName/:name')
  async getpermissionByName(@Param('name') name: String) {
    return await this.permissionService.getpermissionByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.permissionService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.permissionService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.permissionService.delete(id)
  }
}