import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { questionnaireService } from './questionnaire.service';

@Controller('questionnaire')
export class questionnaireController {

  constructor(private readonly questionnaireService: questionnaireService) { }

  @Get('/all')
  async getAll() {
    return await this.questionnaireService.getAll()
  }

  @Get('/byName/:name')
  async getquestionnaireByName(@Param('name') name: String) {
    return await this.questionnaireService.getquestionnaireByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.questionnaireService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.questionnaireService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.questionnaireService.delete(id)
  }
}