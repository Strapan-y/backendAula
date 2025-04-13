import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { questions } from '../../entities/questions.entity';
import { Repository } from 'typeorm';
@Injectable()
export class questionsService {
    
  constructor(
    @InjectRepository(questions) private readonly questionsRepository: Repository<questions>
  ) { }

  async getAll() {
    return await this.questionsRepository.find()
  }

  async getquestionsByName(name) {
    return await this.questionsRepository.createQueryBuilder("questions")
      .where("questions.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.questionsRepository.findOne(id)
  }

  async create(body) {
    return await this.questionsRepository.save(body)
  }


  async delete(id: number) {
    return await this.questionsRepository.delete(id)
  }
}