import { Module } from '@nestjs/common';
import { postsController } from './postss.controller';
import { postsService } from './postss.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { posts } from '../../entities/posts.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([posts])
  ],
  controllers: [postsController],
  providers: [postsService]
})
export class postsModule {}