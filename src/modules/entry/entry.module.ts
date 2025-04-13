import { Module } from '@nestjs/common';
import { entryController } from './entry.controller';
import { entryService } from './entry.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entry } from '../../entities/entry.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([entry])
  ],
  controllers: [entryController],
  providers: [entryService]
})
export class entryModule {}