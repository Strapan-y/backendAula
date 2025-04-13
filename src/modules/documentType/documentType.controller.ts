import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { documentTypeService } from './documentType.service';

@Controller('documentType')
export class documentTypeController {

  constructor(private readonly documentTypeService: documentTypeService) { }

  @Get('/all')
  async getAll() {
    return await this.documentTypeService.getAll()
  }

  @Get('/byName/:name')
  async getdocumentTypeByName(@Param('name') name: String) {
    return await this.documentTypeService.getdocumentTypeByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.documentTypeService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.documentTypeService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.documentTypeService.delete(id)
  }
}