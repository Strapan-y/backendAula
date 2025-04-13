import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { meetingService } from './meeting.service';

@Controller('meeting')
export class meetingController {

  constructor(private readonly meetingService: meetingService) { }

  @Get('/all')
  async getAll() {
    return await this.meetingService.getAll()
  }

  @Get('/byName/:name')
  async getmeetingByName(@Param('name') name: String) {
    return await this.meetingService.getmeetingByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.meetingService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.meetingService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.meetingService.delete(id)
  }
}