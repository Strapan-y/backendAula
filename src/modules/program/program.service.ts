import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { program } from '../../entities/program.entity';
import { Repository } from 'typeorm';
@Injectable()
export class programService {
    
  constructor(
    @InjectRepository(program) private readonly programRepository: Repository<program>
  ) { }

  async getAll() {
    return await this.programRepository.find()
  }

  async getprogramByName(name) {
    return await this.programRepository.createQueryBuilder("program")
      .where("program.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.programRepository.findOne(id)
  }

  async create(body) {
    return await this.programRepository.save(body)
  }


  async delete(id: number) {
    return await this.programRepository.delete(id)
  }
}