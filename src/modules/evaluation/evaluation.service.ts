import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { evaluation } from '../../entities/evaluation.entity';
import { Repository } from 'typeorm';
@Injectable()
export class evaluationService {
    
  constructor(
    @InjectRepository(evaluation) private readonly evaluationRepository: Repository<evaluation>
  ) { }

  async getAll() {
    return await this.evaluationRepository.find()
  }

  async getevaluationByName(name) {
    return await this.evaluationRepository.createQueryBuilder("evaluation")
      .where("evaluation.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.evaluationRepository.findOne(id)
  }

  async create(body) {
    return await this.evaluationRepository.save(body)
  }


  async delete(id: number) {
    return await this.evaluationRepository.delete(id)
  }
}