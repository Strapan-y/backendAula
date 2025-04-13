import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { entry } from '../../entities/entry.entity';
import { Repository } from 'typeorm';
@Injectable()
export class entryService {
    
  constructor(
    @InjectRepository(entry) private readonly entryRepository: Repository<entry>
  ) { }

  async getAll() {
    return await this.entryRepository.find()
  }

  async getentryByName(name) {
    return await this.entryRepository.createQueryBuilder("entry")
      .where("entry.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.entryRepository.findOne(id)
  }

  async create(body) {
    return await this.entryRepository.save(body)
  }


  async delete(id: number) {
    return await this.entryRepository.delete(id)
  }
}