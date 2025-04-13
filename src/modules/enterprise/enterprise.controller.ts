import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { enterpriseService } from './enterprise.service';

@Controller('enterprise')
export class enterpriseController {

  constructor(private readonly enterpriseService: enterpriseService) { }

  @Get('/all')
  async getAll() {
    return await this.enterpriseService.getAll()
  }

  @Get('/byName/:name')
  async getenterpriseByName(@Param('name') name: String) {
    return await this.enterpriseService.getenterpriseByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.enterpriseService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.enterpriseService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.enterpriseService.delete(id)
  }
}