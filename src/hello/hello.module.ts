import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { HelloService } from './hello.service';
import { HelloController } from './hello.controller';
import { Hello, HelloSchema } from './hello.schema';
@Module({
  imports:[MongooseModule.forFeature([{name:Hello.name,schema:HelloSchema}])],
  controllers: [HelloController],
  providers: [HelloService]
})
export class HelloModule {}
