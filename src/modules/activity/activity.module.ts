import { Module } from '@nestjs/common';
import { activityController } from './activity.controller';
import { activityService } from './activity.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { activity } from '../../entities/activity.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([activity])
  ],
  controllers: [activityController],
  providers: [activityService]
})
export class activityModule {}