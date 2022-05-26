import { Schema } from '@nestjs/mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Tasks, TasksSchema } from './tasks.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Tasks.name,schema:TasksSchema}])],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
