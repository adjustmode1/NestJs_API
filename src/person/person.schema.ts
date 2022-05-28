import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PersonsDocument = Persons & Document;

@Schema({collection:'people'})
export class Persons {
    
    @Prop({required:true})
    name:string;

    @Prop()
    age:number;
}

export const PersonsSchema = SchemaFactory.createForClass(Persons)