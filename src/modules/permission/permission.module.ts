import { Module } from '@nestjs/common';
import { permissionController } from './permission.controller';
import { permissionService } from './permission.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { permission } from '../../entities/permission.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([permission])
  ],
  controllers: [permissionController],
  providers: [permissionService]
})
export class permissionModule {}