import { Module } from '@nestjs/common';
import { forumParticipationController } from './forumParticipation.controller';
import { forumParticipationService } from './forumParticipation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { forumParticipation } from '../../entities/forumParticipation.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([forumParticipation])
  ],
  controllers: [forumParticipationController],
  providers: [forumParticipationService]
})
export class forumParticipationModule {}