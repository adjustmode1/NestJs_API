import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { UsersModule } from './users/users.module';
import { HomesModule } from './homes/homes.module';
import { DatabaseModule } from './database/database.module';
import { PersonModule } from './person/person.module';
import { HelloModule } from './hello/hello.module';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [CoursesModule, UsersModule, HomesModule, PersonModule,DatabaseModule, HelloModule, TasksModule, AuthModule, UploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
