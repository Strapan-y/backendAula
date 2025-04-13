import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { activity } from '../../entities/activity.entity';
import { Repository } from 'typeorm';
@Injectable()
export class activityService {
    
  constructor(
    @InjectRepository(activity) private readonly activityRepository: Repository<activity>
  ) { }

  async getAll() {
    return await this.activityRepository.find()
  }

  async getactivityByName(name) {
    return await this.activityRepository.createQueryBuilder("activity")
      .where("activity.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.activityRepository.findOne(id)
  }

  async create(body) {
    return await this.activityRepository.save(body)
  }


  async delete(id: number) {
    return await this.activityRepository.delete(id)
  }
}