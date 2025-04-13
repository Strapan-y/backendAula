import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { group } from '../../entities/group.entity';
import { Repository } from 'typeorm';
@Injectable()
export class groupService {
    
  constructor(
    @InjectRepository(group) private readonly groupRepository: Repository<group>
  ) { }

  async getAll() {
    return await this.groupRepository.find()
  }

  async getgroupByName(name) {
    return await this.groupRepository.createQueryBuilder("group")
      .where("group.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.groupRepository.findOne(id)
  }

  async create(body) {
    return await this.groupRepository.save(body)
  }


  async delete(id: number) {
    return await this.groupRepository.delete(id)
  }
}