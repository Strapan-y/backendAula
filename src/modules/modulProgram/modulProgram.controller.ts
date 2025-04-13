import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { modulProgramService } from './modulProgram.service';

@Controller('modulProgram')
export class modulProgramController {

  constructor(private readonly modulProgramService: modulProgramService) { }

  @Get('/all')
  async getAll() {
    return await this.modulProgramService.getAll()
  }

  @Get('/byName/:name')
  async getmodulProgramByName(@Param('name') name: String) {
    return await this.modulProgramService.getmodulProgramByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.modulProgramService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.modulProgramService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.modulProgramService.delete(id)
  }
}