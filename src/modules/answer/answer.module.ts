import { Module } from '@nestjs/common';
import { answerController } from './answer.controller';
import { answerService } from './answer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { answer } from '../../entities/answer.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([answer])
  ],
  controllers: [answerController],
  providers: [answerService]
})
export class answerModule {}