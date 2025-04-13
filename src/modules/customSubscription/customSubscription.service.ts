import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { customSubscription } from '../../entities/customSubscription.entity';
import { Repository } from 'typeorm';
@Injectable()
export class customSubscriptionService {
    
  constructor(
    @InjectRepository(customSubscription) private readonly customSubscriptionRepository: Repository<customSubscription>
  ) { }

  async getAll() {
    return await this.customSubscriptionRepository.find()
  }

  async getcustomSubscriptionByName(name) {
    return await this.customSubscriptionRepository.createQueryBuilder("customSubscription")
      .where("customSubscription.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.customSubscriptionRepository.findOne(id)
  }

  async create(body) {
    return await this.customSubscriptionRepository.save(body)
  }


  async delete(id: number) {
    return await this.customSubscriptionRepository.delete(id)
  }
}