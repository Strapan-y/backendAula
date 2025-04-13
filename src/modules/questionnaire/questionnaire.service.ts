import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { questionnaire } from '../../entities/questionnaire.entity';
import { Repository } from 'typeorm';
@Injectable()
export class questionnaireService {
    
  constructor(
    @InjectRepository(questionnaire) private readonly questionnaireRepository: Repository<questionnaire>
  ) { }

  async getAll() {
    return await this.questionnaireRepository.find()
  }

  async getquestionnaireByName(name) {
    return await this.questionnaireRepository.createQueryBuilder("questionnaire")
      .where("questionnaire.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.questionnaireRepository.findOne(id)
  }

  async create(body) {
    return await this.questionnaireRepository.save(body)
  }


  async delete(id: number) {
    return await this.questionnaireRepository.delete(id)
  }
}