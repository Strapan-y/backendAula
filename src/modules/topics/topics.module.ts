import { Module } from '@nestjs/common';
import { topicsController } from './topics.controller';
import { topicsService } from './topics.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { topics } from '../../entities/topics.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([topics])
  ],
  controllers: [topicsController],
  providers: [topicsService]
})
export class topicsModule {}