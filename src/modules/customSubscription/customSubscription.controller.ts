import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { customSubscriptionService } from './customSubscription.service';

@Controller('customSubscription')
export class customSubscriptionController {

  constructor(private readonly customSubscriptionService: customSubscriptionService) { }

  @Get('/all')
  async getAll() {
    return await this.customSubscriptionService.getAll()
  }

  @Get('/byName/:name')
  async getcustomSubscriptionByName(@Param('name') name: String) {
    return await this.customSubscriptionService.getcustomSubscriptionByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.customSubscriptionService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.customSubscriptionService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.customSubscriptionService.delete(id)
  }
}