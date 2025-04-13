import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userGroup } from '../../entities/userGroup.entity';
import { Repository } from 'typeorm';
@Injectable()
export class userGroupService {
    
  constructor(
    @InjectRepository(userGroup) private readonly userGroupRepository: Repository<userGroup>
  ) { }

  async getAll() {
    return await this.userGroupRepository.find()
  }

  async getuserGroupByName(name) {
    return await this.userGroupRepository.createQueryBuilder("userGroup")
      .where("userGroup.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.userGroupRepository.findOne(id)
  }

  async create(body) {
    return await this.userGroupRepository.save(body)
  }


  async delete(id: number) {
    return await this.userGroupRepository.delete(id)
  }
}