import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { topics } from '../../entities/topics.entity';
import { Repository } from 'typeorm';
@Injectable()
export class topicsService {
    
  constructor(
    @InjectRepository(topics) private readonly topicsRepository: Repository<topics>
  ) { }

  async getAll() {
    return await this.topicsRepository.find()
  }

  async gettopicsByName(name) {
    return await this.topicsRepository.createQueryBuilder("topics")
      .where("topics.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.topicsRepository.findOne(id)
  }

  async create(body) {
    return await this.topicsRepository.save(body)
  }


  async delete(id: number) {
    return await this.topicsRepository.delete(id)
  }
}