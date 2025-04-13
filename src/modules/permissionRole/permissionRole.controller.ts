import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { permissionRoleService } from './permissionRole.service';

@Controller('permissionRole')
export class permissionRoleController {

  constructor(private readonly permissionRoleService: permissionRoleService) { }

  @Get('/all')
  async getAll() {
    return await this.permissionRoleService.getAll()
  }

  @Get('/byName/:name')
  async getpermissionRoleByName(@Param('name') name: String) {
    return await this.permissionRoleService.getpermissionRoleByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.permissionRoleService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.permissionRoleService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.permissionRoleService.delete(id)
  }
}