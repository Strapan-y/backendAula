import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userCompletedEntry } from '../../entities/userCompletedEntry.entity';
import { Repository } from 'typeorm';
@Injectable()
export class userCompletedEntryService {
    
  constructor(
    @InjectRepository(userCompletedEntry) private readonly userCompletedEntryRepository: Repository<userCompletedEntry>
  ) { }

  async getAll() {
    return await this.userCompletedEntryRepository.find()
  }

  async getuserCompletedEntryByName(name) {
    return await this.userCompletedEntryRepository.createQueryBuilder("userCompletedEntry")
      .where("userCompletedEntry.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.userCompletedEntryRepository.findOne(id)
  }

  async create(body) {
    return await this.userCompletedEntryRepository.save(body)
  }


  async delete(id: number) {
    return await this.userCompletedEntryRepository.delete(id)
  }
}