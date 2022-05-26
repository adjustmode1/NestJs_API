import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Persons, PersonsDocument } from './person.schema';
@Injectable()
export class PersonService {

  // constructor(@InjectModel(Person.name) private personModel: Model<PersonDocument>){}
  constructor(@InjectModel(Persons.name) private personModel:Model<PersonsDocument>){}

  create(createPersonDto: CreatePersonDto) {
    this.personModel.insertMany(createPersonDto).then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
    return 'fawef';
  }

  async findAll(){
    return this.personModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
