import { Module } from '@nestjs/common';
import { enterpriseProgramController } from './enterpriseProgram.controller';
import { enterpriseProgramService } from './enterpriseProgram.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { enterpriseProgram } from '../../entities/enterpriseProgram.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([enterpriseProgram])
  ],
  controllers: [enterpriseProgramController],
  providers: [enterpriseProgramService]
})
export class enterpriseProgramModule {}