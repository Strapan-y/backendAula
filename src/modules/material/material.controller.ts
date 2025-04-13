import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { materialService } from './material.service';

@Controller('material')
export class materialController {

  constructor(private readonly materialService: materialService) { }

  @Get('/all')
  async getAll() {
    return await this.materialService.getAll()
  }

  @Get('/byName/:name')
  async getmaterialByName(@Param('name') name: String) {
    return await this.materialService.getmaterialByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.materialService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.materialService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.materialService.delete(id)
  }
}