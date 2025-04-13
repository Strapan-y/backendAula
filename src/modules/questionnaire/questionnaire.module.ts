import { Module } from '@nestjs/common';
import { questionnaireController } from './questionnaire.controller';
import { questionnaireService } from './questionnaire.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { questionnaire } from '../../entities/questionnaire.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([questionnaire])
  ],
  controllers: [questionnaireController],
  providers: [questionnaireService]
})
export class questionnaireModule {}