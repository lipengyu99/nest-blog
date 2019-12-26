import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiProperty, ApiOperation } from '@nestjs/swagger';
// import { PostModel } from './post.model';
import * as mongoose from 'mongoose';
// import { IsNotEmpty } from 'class-validator';
import { Posts } from './post.model';
import { InjectModel} from 'nestjs-typegoose'
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Crud } from 'nestjs-mongoose-crud'

// export class CreatePostsDto {
//     @ApiProperty()
//     @IsNotEmpty({ message:'请填写标题'})
//     title: string
//     @ApiProperty()
//     content: string
// }

@ApiTags('posts')
@Crud({
    model:Posts
})
@Controller('posts')
export class PostsController {

constructor(@InjectModel(Posts) private readonly model:ModelType<Posts>){

}
  
}
