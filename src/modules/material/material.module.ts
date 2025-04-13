import { Module } from '@nestjs/common';
import { materialController } from './material.controller';
import { materialService } from './material.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { material } from '../../entities/material.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([material])
  ],
  controllers: [materialController],
  providers: [materialService]
})
export class materialModule {}