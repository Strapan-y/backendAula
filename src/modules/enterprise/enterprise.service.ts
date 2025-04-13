import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { enterprise } from '../../entities/enterprise.entity';
import { Repository } from 'typeorm';
@Injectable()
export class enterpriseService {
    
  constructor(
    @InjectRepository(enterprise) private readonly enterpriseRepository: Repository<enterprise>
  ) { }

  async getAll() {
    return await this.enterpriseRepository.find()
  }

  async getenterpriseByName(name) {
    return await this.enterpriseRepository.createQueryBuilder("enterprise")
      .where("enterprise.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.enterpriseRepository.findOne(id)
  }

  async create(body) {
    return await this.enterpriseRepository.save(body)
  }


  async delete(id: number) {
    return await this.enterpriseRepository.delete(id)
  }
}