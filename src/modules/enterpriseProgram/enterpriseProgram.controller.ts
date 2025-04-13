import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { enterpriseProgramService } from './enterpriseProgram.service';

@Controller('enterpriseProgram')
export class enterpriseProgramController {

  constructor(private readonly enterpriseProgramService: enterpriseProgramService) { }

  @Get('/all')
  async getAll() {
    return await this.enterpriseProgramService.getAll()
  }

  @Get('/byName/:name')
  async getenterpriseProgramByName(@Param('name') name: String) {
    return await this.enterpriseProgramService.getenterpriseProgramByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.enterpriseProgramService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.enterpriseProgramService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.enterpriseProgramService.delete(id)
  }
}