import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { role } from '../../entities/role.entity';
import { Repository } from 'typeorm';
@Injectable()
export class roleService {
    
  constructor(
    @InjectRepository(role) private readonly roleRepository: Repository<role>
  ) { }

  async getAll() {
    return await this.roleRepository.find()
  }

  async getroleByName(name) {
    return await this.roleRepository.createQueryBuilder("role")
      .where("role.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.roleRepository.findOne(id)
  }

  async create(body) {
    return await this.roleRepository.save(body)
  }


  async delete(id: number) {
    return await this.roleRepository.delete(id)
  }
}