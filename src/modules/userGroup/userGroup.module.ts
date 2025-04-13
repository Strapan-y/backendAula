import { Module } from '@nestjs/common';
import { userGroupController } from './userGroup.controller';
import { userGroupService } from './userGroup.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userGroup } from '../../entities/userGroup.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([userGroup])
  ],
  controllers: [userGroupController],
  providers: [userGroupService]
})
export class userGroupModule {}