import { Module } from '@nestjs/common';
import { subscriptionController } from './subscription.controller';
import { subscriptionService } from './subscription.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { subscription } from '../../entities/subscription.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([subscription])
  ],
  controllers: [subscriptionController],
  providers: [subscriptionService]
})
export class subscriptionModule {}