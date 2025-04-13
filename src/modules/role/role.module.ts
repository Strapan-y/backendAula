import { Module } from '@nestjs/common';
import { roleController } from './role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { role } from '../../entities/role.entity';
import { roleService } from './role.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([role])
  ],
  controllers: [roleController],
  providers: [roleService]
})
export class roleModule {}