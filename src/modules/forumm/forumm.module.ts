import { Module } from '@nestjs/common';
import { forumController } from './forumm.controller';
import { forumService } from './forumm.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { forum } from '../../entities/forum.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([forum])
  ],
  controllers: [forumController],
  providers: [forumService]
})
export class forumModule {}