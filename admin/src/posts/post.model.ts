import { getModelForClass, prop } from "@typegoose/typegoose";
import { ApiProperty } from "@nestjs/swagger";

export class Posts {
   @ApiProperty()
    @prop({required:true})
    title:string
    
    @ApiProperty()
    @prop()
    content:string

}
//export const PostModel = getModelForClass(Posts)