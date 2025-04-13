import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { typeSubscriptionService } from './typeSubscription.service';

@Controller('typeSubscription')
export class typeSubscriptionController {

  constructor(private readonly typeSubscriptionService: typeSubscriptionService) { }

  @Get('/all')
  async getAll() {
    return await this.typeSubscriptionService.getAll()
  }

  @Get('/byName/:name')
  async gettypeSubscriptionByName(@Param('name') name: String) {
    return await this.typeSubscriptionService.gettypeSubscriptionByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.typeSubscriptionService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.typeSubscriptionService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.typeSubscriptionService.delete(id)
  }
}