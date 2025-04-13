import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { answer } from '../../entities/answer.entity';
import { Repository } from 'typeorm';
@Injectable()
export class answerService {
    
  constructor(
    @InjectRepository(answer) private readonly answerRepository: Repository<answer>
  ) { }

  async getAll() {
    return await this.answerRepository.find()
  }

  async getanswerByName(name) {
    return await this.answerRepository.createQueryBuilder("answer")
      .where("answer.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.answerRepository.findOne(id)
  }

  async create(body) {
    return await this.answerRepository.save(body)
  }


  async delete(id: number) {
    return await this.answerRepository.delete(id)
  }
}