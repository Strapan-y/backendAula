import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userAgreement } from '../../entities/userAgreement.entity';
import { Repository } from 'typeorm';
@Injectable()
export class userAgreementService {
    
  constructor(
    @InjectRepository(userAgreement) private readonly userAgreementRepository: Repository<userAgreement>
  ) { }

  async getAll() {
    return await this.userAgreementRepository.find()
  }

  async getuserAgreementByName(name) {
    return await this.userAgreementRepository.createQueryBuilder("userAgreement")
      .where("userAgreement.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.userAgreementRepository.findOne(id)
  }

  async create(body) {
    return await this.userAgreementRepository.save(body)
  }


  async delete(id: number) {
    return await this.userAgreementRepository.delete(id)
  }
}