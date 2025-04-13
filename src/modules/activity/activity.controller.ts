import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { activityService } from './activity.service';

@Controller('activity')
export class activityController {

  constructor(private readonly activityService: activityService) { }

  @Get('/all')
  async getAll() {
    return await this.activityService.getAll()
  }

  @Get('/byName/:name')
  async getactivityByName(@Param('name') name: String) {
    return await this.activityService.getactivityByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.activityService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.activityService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.activityService.delete(id)
  }
}