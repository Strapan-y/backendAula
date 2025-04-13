import { Module } from '@nestjs/common';
import { answerOptionController } from './answerOption.controller';
import { answerOptionService } from './answerOption.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { answerOption } from '../../entities/answerOption.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([answerOption])
  ],
  controllers: [answerOptionController],
  providers: [answerOptionService]
})
export class answerOptionModule {}