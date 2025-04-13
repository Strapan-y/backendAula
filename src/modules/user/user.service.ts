import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user } from '../../entities/user.entity';
import { Repository } from 'typeorm';
@Injectable()
export class userService {
    
  constructor(
    @InjectRepository(user) private readonly userRepository: Repository<user>
  ) { }

  async getAll() {
    return await this.userRepository.find()
  }

  async getuserByName(name) {
    return await this.userRepository.createQueryBuilder("user")
      .where("user.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.userRepository.findOne(id)
  }

  async create(body) {
    const userCreated= this.userRepository.save(body);
    return userCreated
  }


  async delete(id: number) {
    return await this.userRepository.delete(id)
  }
}