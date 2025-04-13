import { Module } from '@nestjs/common';
import { questionsController } from './questions.controller';
import { questionsService } from './questions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { questions } from '../../entities/questions.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([questions])
  ],
  controllers: [questionsController],
  providers: [questionsService]
})
export class questionsModule {}