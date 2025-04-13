import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { documentType } from '../../entities/documentType.entity';
import { Repository } from 'typeorm';
@Injectable()
export class documentTypeService {
    
  constructor(
    @InjectRepository(documentType) private readonly documentTypeRepository: Repository<documentType>
  ) { }

  async getAll() {
    return await this.documentTypeRepository.find()
  }

  async getdocumentTypeByName(name) {
    return await this.documentTypeRepository.createQueryBuilder("documentType")
      .where("documentType.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.documentTypeRepository.findOne(id)
  }

  async create(body) {
    return await this.documentTypeRepository.save(body)
  }


  async delete(id: number) {
    return await this.documentTypeRepository.delete(id)
  }
}