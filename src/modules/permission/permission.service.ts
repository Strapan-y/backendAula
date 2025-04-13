import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { permission } from '../../entities/permission.entity';
import { Repository } from 'typeorm';
@Injectable()
export class permissionService {
    
  constructor(
    @InjectRepository(permission) private readonly permissionRepository: Repository<permission>
  ) { }

  async getAll() {
    return await this.permissionRepository.find()
  }

  async getpermissionByName(name) {
    return await this.permissionRepository.createQueryBuilder("permission")
      .where("permission.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.permissionRepository.findOne(id)
  }

  async create(body) {
    return await this.permissionRepository.save(body)
  }


  async delete(id: number) {
    return await this.permissionRepository.delete(id)
  }
}