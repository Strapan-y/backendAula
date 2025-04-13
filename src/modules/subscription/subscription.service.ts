import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { subscription } from '../../entities/subscription.entity';
import { Repository } from 'typeorm';
@Injectable()
export class subscriptionService {
    
  constructor(
    @InjectRepository(subscription) private readonly subscriptionRepository: Repository<subscription>
  ) { }

  async getAll() {
    return await this.subscriptionRepository.find()
  }

  async getsubscriptionByName(name) {
    return await this.subscriptionRepository.createQueryBuilder("subscription")
      .where("subscription.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.subscriptionRepository.findOne(id)
  }

  async create(body) {
    return await this.subscriptionRepository.save(body)
  }


  async delete(id: number) {
    return await this.subscriptionRepository.delete(id)
  }
}