import { Module } from '@nestjs/common';
import { meetingController } from './meeting.controller';
import { meetingService } from './meeting.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { meeting } from '../../entities/meeting.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([meeting])
  ],
  controllers: [meetingController],
  providers: [meetingService]
})
export class meetingModule {}