import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { posts } from '../../entities/posts.entity';
import { Repository } from 'typeorm';
@Injectable()
export class postsService {
    
  constructor(
    @InjectRepository(posts) private readonly postsRepository: Repository<posts>
  ) { }

  async getAll() {
    return await this.postsRepository.find()
  }

  async getpostsByName(name) {
    return await this.postsRepository.createQueryBuilder("posts")
      .where("posts.name = :name")
      .setParameters({ name: name })
      .getMany();
  }

  async getById(id) {
    return await this.postsRepository.findOne(id)
  }

  async create(body) {
    return await this.postsRepository.save(body)
  }


  async delete(id: number) {
    return await this.postsRepository.delete(id)
  }
}