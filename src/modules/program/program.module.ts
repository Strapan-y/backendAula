import { Module } from '@nestjs/common';
import { programController } from './program.controller';
import { programService } from './program.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { program } from '../../entities/program.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([program])
  ],
  controllers: [programController],
  providers: [programService]
})
export class programModule {}