import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type HelloDocument = Hello & Document;

@Schema({collection:"hellon"})
export class Hello {
    @Prop({required:true})
    messages:string;

}

export const HelloSchema = SchemaFactory.createForClass(Hello)