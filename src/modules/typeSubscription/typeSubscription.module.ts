import { Module } from '@nestjs/common';
import { typeSubscriptionController } from './typeSubscription.controller';
import { typeSubscriptionService } from './typeSubscription.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeSubscription } from '../../entities/typeSubscription.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([typeSubscription])
  ],
  controllers: [typeSubscriptionController],
  providers: [typeSubscriptionService]
})
export class typeSubscriptionModule {}