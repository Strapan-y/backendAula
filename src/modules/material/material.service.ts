import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { material } from '../../entities/material.entity';
import { Repository } from 'typeorm';
@Injectable()
export class materialService {
    
  constructor(
    @InjectRepository(material) private readonly materialRepository: Repository<material>
  ) { }

  async getAll() {
    return await this.materialRepository.find()
  }

  async getmaterialByName(name) {
    return await this.materialRepository.createQueryBuilder("material")
      .where("material.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.materialRepository.findOne(id)
  }

  async create(body) {
    return await this.materialRepository.save(body)
  }


  async delete(id: number) {
    return await this.materialRepository.delete(id)
  }
}