import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { forumParticipationService } from './forumParticipation.service';

@Controller('forumParticipation')
export class forumParticipationController {

  constructor(private readonly forumParticipationService: forumParticipationService) { }

  @Get('/all')
  async getAll() {
    return await this.forumParticipationService.getAll()
  }

  @Get('/byName/:name')
  async getforumParticipationByName(@Param('name') name: String) {
    return await this.forumParticipationService.getforumParticipationByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.forumParticipationService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.forumParticipationService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.forumParticipationService.delete(id)
  }
}