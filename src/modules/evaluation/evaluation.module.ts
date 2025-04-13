import { Module } from '@nestjs/common';
import { evaluationController } from './evaluation.controller';
import { evaluationService } from './evaluation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { evaluation } from '../../entities/evaluation.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([evaluation])
  ],
  controllers: [evaluationController],
  providers: [evaluationService]
})
export class evaluationModule {}