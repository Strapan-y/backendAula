import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { subscriptionService } from './subscription.service';

@Controller('subscription')
export class subscriptionController {

  constructor(private readonly subscriptionService: subscriptionService) { }

  @Get('/all')
  async getAll() {
    return await this.subscriptionService.getAll()
  }

  @Get('/byName/:name')
  async getsubscriptionByName(@Param('name') name: String) {
    return await this.subscriptionService.getsubscriptionByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.subscriptionService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.subscriptionService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.subscriptionService.delete(id)
  }
}