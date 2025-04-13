import { Module } from '@nestjs/common';
import { enterpriseController } from './enterprise.controller';
import { enterpriseService } from './enterprise.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { enterprise } from '../../entities/enterprise.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([enterprise])
  ],
  controllers: [enterpriseController],
  providers: [enterpriseService]
})
export class enterpriseModule {}