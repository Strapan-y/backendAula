import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { forum } from '../../entities/forum.entity';
import { Repository } from 'typeorm';
@Injectable()
export class forumService {
    
  constructor(
    @InjectRepository(forum) private readonly forumRepository: Repository<forum>
  ) { }

  async getAll() {
    return await this.forumRepository.find()
  }

  async getforumByName(name) {
    return await this.forumRepository.createQueryBuilder("forum")
      .where("forum.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.forumRepository.findOne(id)
  }

  async create(body) {
    return await this.forumRepository.save(body)
  }


  async delete(id: number) {
    return await this.forumRepository.delete(id)
  }
}