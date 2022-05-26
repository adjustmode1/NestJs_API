import { SchemaFactory } from '@nestjs/mongoose';
import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TasksDocument = Tasks & Document;

@Schema({collection:'tasks'})
export class Tasks{
    @Prop()
    task:String
}

export const TasksSchema = SchemaFactory.createForClass(Tasks)