import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { answerOption } from '../../entities/answerOption.entity';
import { Repository } from 'typeorm';
@Injectable()
export class answerOptionService {
    
  constructor(
    @InjectRepository(answerOption) private readonly answerOptionRepository: Repository<answerOption>
  ) { }

  async getAll() {
    return await this.answerOptionRepository.find()
  }

  async getanswerOptionByName(name) {
    return await this.answerOptionRepository.createQueryBuilder("answerOption")
      .where("answerOption.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.answerOptionRepository.findOne(id)
  }

  async create(body) {
    return await this.answerOptionRepository.save(body)
  }


  async delete(id: number) {
    return await this.answerOptionRepository.delete(id)
  }
}