import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { programService } from './program.service';

@Controller('program')
export class programController {

  constructor(private readonly programService: programService) { }

  @Get('/all')
  async getAll() {
    return await this.programService.getAll()
  }

  @Get('/byName/:name')
  async getprogramByName(@Param('name') name: String) {
    return await this.programService.getprogramByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.programService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.programService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.programService.delete(id)
  }
}