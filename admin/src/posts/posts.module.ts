import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Posts } from './post.model'
@Module({
  imports: [TypegooseModule.forFeature([Posts])],
  controllers: [PostsController],
 
})
export class PostsModule { }
