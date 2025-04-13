import { Module } from '@nestjs/common';
import { groupController } from './group.controller';
import { groupService } from './group.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { group } from '../../entities/group.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([group])
  ],
  controllers: [groupController],
  providers: [groupService]
})
export class groupModule {}