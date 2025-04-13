import { Module } from '@nestjs/common';
import { documentTypeController } from './documentType.controller';
import { documentTypeService } from './documentType.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { documentType } from '../../entities/documentType.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([documentType])
  ],
  controllers: [documentTypeController],
  providers: [documentTypeService]
})
export class documentTypeModule {}