import { Module } from '@nestjs/common';
import { modulProgramController } from './modulProgram.controller';
import { modulProgramService } from './modulProgram.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { modulProgram } from '../../entities/modulProgram.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([modulProgram])
  ],
  controllers: [modulProgramController],
  providers: [modulProgramService]
})
export class modulProgramModule {}