import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { userAgreementService } from './userAgreement.service';

@Controller('userAgreement')
export class userAgreementController {

  constructor(private readonly userAgreementService: userAgreementService) { }

  @Get('/all')
  async getAll() {
    return await this.userAgreementService.getAll()
  }

  @Get('/byName/:name')
  async getuserAgreementByName(@Param('name') name: String) {
    return await this.userAgreementService.getuserAgreementByName(name)
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.userAgreementService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.userAgreementService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.userAgreementService.delete(id)
  }
}