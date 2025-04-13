import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { enterpriseProgram } from '../../entities/enterpriseProgram.entity';
import { Repository } from 'typeorm';
@Injectable()
export class enterpriseProgramService {
    
  constructor(
    @InjectRepository(enterpriseProgram) private readonly enterpriseProgramRepository: Repository<enterpriseProgram>
  ) { }

  async getAll() {
    return await this.enterpriseProgramRepository.find()
  }

  async getenterpriseProgramByName(name) {
    return await this.enterpriseProgramRepository.createQueryBuilder("enterpriseProgram")
      .where("enterpriseProgram.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.enterpriseProgramRepository.findOne(id)
  }

  async create(body) {
    return await this.enterpriseProgramRepository.save(body)
  }


  async delete(id: number) {
    return await this.enterpriseProgramRepository.delete(id)
  }
}