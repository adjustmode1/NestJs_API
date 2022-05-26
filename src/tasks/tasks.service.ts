import { Tasks, TasksDocument } from './tasks.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {

  constructor(@InjectModel(Tasks.name) private tasksModel:Model<TasksDocument>){}

  create(createTaskDto: CreateTaskDto) {
    return this.tasksModel.insertMany(createTaskDto);
  }

  findAll() {
    return this.tasksModel.find().exec();
  }

  findOne(id: string) {
    return `This action returns a #${id} task`;
  }

  update(id: string, updateTaskDto: UpdateTaskDto): Promise<string> {
    return new Promise((resolve,reject)=>{
      this.tasksModel.updateOne({_id:id},{task:updateTaskDto.task}).then(res=>{
        console.log(res)
        resolve(id)
      })
      .catch(err=>{
        console.log(err)
        reject('')
      })
    })
  }

  remove(id: string): Promise<any>{
    return new Promise((resolve,reject)=>{
      this.tasksModel.deleteOne({_id:id}).exec()
      .then(res=>{
        if(res.deletedCount===1){
          resolve(id)
        }else{
          reject('')
        }
      })
      .catch(err=>{
        console.log(err)
        reject('')
      })
    })
  }
}
