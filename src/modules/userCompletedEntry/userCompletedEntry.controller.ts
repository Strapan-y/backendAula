import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { userCompletedEntryService } from './userCompletedEntry.service';

@Controller('userCompletedEntry')
export class userCompletedEntryController {

  constructor(private readonly userCompletedEntryService: userCompletedEntryService) { }

  @Get('/all')
  async getAll() {
    return await this.userCompletedEntryService.getAll()
  }

  @Get('/byName/:name')
  async getuserCompletedEntryByName(@Param('name') name: String) {
    return await this.userCompletedEntryService.getuserCompletedEntryByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.userCompletedEntryService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.userCompletedEntryService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.userCompletedEntryService.delete(id)
  }
}