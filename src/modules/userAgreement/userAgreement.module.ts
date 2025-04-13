import { Module } from '@nestjs/common';
import { userAgreementController } from './userAgreement.controller';
import { userAgreementService } from './userAgreement.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userAgreement } from '../../entities/userAgreement.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([userAgreement])
  ],
  controllers: [userAgreementController],
  providers: [userAgreementService]
})
export class userAgreementModule {}