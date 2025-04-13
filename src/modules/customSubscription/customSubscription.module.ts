import { Module } from '@nestjs/common';
import { customSubscriptionController } from './customSubscription.controller';
import { customSubscriptionService } from './customSubscription.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { customSubscription } from '../../entities/customSubscription.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([customSubscription])
  ],
  controllers: [customSubscriptionController],
  providers: [customSubscriptionService]
})
export class customSubscriptionModule {}