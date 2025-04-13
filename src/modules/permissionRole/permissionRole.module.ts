import { Module } from '@nestjs/common';
import { permissionRoleController } from './permissionRole.controller';
import { permissionRoleService } from './permissionRole.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { permissionRole } from '../../entities/permissionRole.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([permissionRole])
  ],
  controllers: [permissionRoleController],
  providers: [permissionRoleService]
})
export class permissionRoleModule {}