import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { modulProgram } from '../../entities/modulProgram.entity';
import { Repository } from 'typeorm';
@Injectable()
export class modulProgramService {
    
  constructor(
    @InjectRepository(modulProgram) private readonly modulProgramRepository: Repository<modulProgram>
  ) { }

  async getAll() {
    return await this.modulProgramRepository.find()
  }

  async getmodulProgramByName(name) {
    return await this.modulProgramRepository.createQueryBuilder("modulProgram")
      .where("modulProgram.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.modulProgramRepository.findOne(id)
  }

  async create(body) {
    return await this.modulProgramRepository.save(body)
  }


  async delete(id: number) {
    return await this.modulProgramRepository.delete(id)
  }
}