import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { entryService } from './entry.service';

@Controller('entry')
export class entryController {

  constructor(private readonly entryService: entryService) { }

  @Get('/all')
  async getAll() {
    return await this.entryService.getAll()
  }

  @Get('/byName/:name')
  async getentryByName(@Param('name') name: String) {
    return await this.entryService.getentryByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.entryService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.entryService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.entryService.delete(id)
  }
}