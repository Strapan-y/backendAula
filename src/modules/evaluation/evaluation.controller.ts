import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { evaluationService } from './evaluation.service';

@Controller('evaluation')
export class evaluationController {

  constructor(private readonly evaluationService: evaluationService) { }

  @Get('/all')
  async getAll() {
    return await this.evaluationService.getAll()
  }

  @Get('/byName/:name')
  async getevaluationByName(@Param('name') name: String) {
    return await this.evaluationService.getevaluationByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.evaluationService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.evaluationService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.evaluationService.delete(id)
  }
}