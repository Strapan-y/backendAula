import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { permissionRole } from '../../entities/permissionRole.entity';
import { Repository } from 'typeorm';
@Injectable()
export class permissionRoleService {
    
  constructor(
    @InjectRepository(permissionRole) private readonly permissionRoleRepository: Repository<permissionRole>
  ) { }

  async getAll() {
    return await this.permissionRoleRepository.find()
  }

  async getpermissionRoleByName(name) {
    return await this.permissionRoleRepository.createQueryBuilder("permissionRole")
      .where("permissionRole.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.permissionRoleRepository.findOne(id)
  }

  async create(body) {
    return await this.permissionRoleRepository.save(body)
  }


  async delete(id: number) {
    return await this.permissionRoleRepository.delete(id)
  }
}