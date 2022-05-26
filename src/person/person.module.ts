import { MongooseModule} from '@nestjs/mongoose';
import { Persons, PersonsSchema } from './person.schema';
import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
@Module({
  imports:[MongooseModule.forFeature([{name:Persons.name,schema:PersonsSchema}])],
  controllers: [PersonController],
  providers: [PersonService]
})
export class PersonModule {}
