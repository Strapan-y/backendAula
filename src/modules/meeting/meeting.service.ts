import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { meeting } from '../../entities/meeting.entity';
import { Repository } from 'typeorm';
@Injectable()
export class meetingService {
    
  constructor(
    @InjectRepository(meeting) private readonly meetingRepository: Repository<meeting>
  ) { }

  async getAll() {
    return await this.meetingRepository.find()
  }

  async getmeetingByName(name) {
    return await this.meetingRepository.createQueryBuilder("meeting")
      .where("meeting.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.meetingRepository.findOne(id)
  }

  async create(body) {
    return await this.meetingRepository.save(body)
  }


  async delete(id: number) {
    return await this.meetingRepository.delete(id)
  }
}