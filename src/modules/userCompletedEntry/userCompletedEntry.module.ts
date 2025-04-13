import { Module } from '@nestjs/common';
import { userCompletedEntryController } from './userCompletedEntry.controller';
import { userCompletedEntryService } from './userCompletedEntry.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userCompletedEntry } from '../../entities/userCompletedEntry.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([userCompletedEntry])
  ],
  controllers: [userCompletedEntryController],
  providers: [userCompletedEntryService]
})
export class userCompletedEntryModule {}