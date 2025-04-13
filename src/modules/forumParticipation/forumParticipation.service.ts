import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { forumParticipation } from '../../entities/forumParticipation.entity';
import { Repository } from 'typeorm';
@Injectable()
export class forumParticipationService {
    
  constructor(
    @InjectRepository(forumParticipation) private readonly forumParticipationRepository: Repository<forumParticipation>
  ) { }

  async getAll() {
    return await this.forumParticipationRepository.find()
  }

  async getforumParticipationByName(name) {
    return await this.forumParticipationRepository.createQueryBuilder("forumParticipation")
      .where("forumParticipation.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.forumParticipationRepository.findOne(id)
  }

  async create(body) {
    return await this.forumParticipationRepository.save(body)
  }


  async delete(id: number) {
    return await this.forumParticipationRepository.delete(id)
  }
}