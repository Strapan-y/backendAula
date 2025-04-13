import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { typeSubscription } from '../../entities/typeSubscription.entity';
import { Repository } from 'typeorm';
@Injectable()
export class typeSubscriptionService {
    
  constructor(
    @InjectRepository(typeSubscription) private readonly typeSubscriptionRepository: Repository<typeSubscription>
  ) { }

  async getAll() {
    return await this.typeSubscriptionRepository.find()
  }

  async gettypeSubscriptionByName(name) {
    return await this.typeSubscriptionRepository.createQueryBuilder("typeSubscription")
      .where("typeSubscription.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.typeSubscriptionRepository.findOne(id)
  }

  async create(body) {
    return await this.typeSubscriptionRepository.save(body)
  }


  async delete(id: number) {
    return await this.typeSubscriptionRepository.delete(id)
  }
}