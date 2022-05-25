import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { UsersModule } from './users/users.module';
import { HomesModule } from './homes/homes.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [CoursesModule, UsersModule, HomesModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
