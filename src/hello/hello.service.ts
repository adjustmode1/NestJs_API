import { Hello, HelloDocument } from './hello.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateHelloDto } from './dto/create-hello.dto';
import { UpdateHelloDto } from './dto/update-hello.dto';
import { Model } from 'mongoose';
@Injectable()
export class HelloService {

  constructor(@InjectModel(Hello.name) private helloModel:Model<HelloDocument>){}
  
  create(createHelloDto: CreateHelloDto) {
    return this.helloModel.insertMany({messages:"hello"});
    // return "à";
  }

  findAll() {
    return this.helloModel.find();
    // return "o";
  }

  findOne(id: number) {
    return `This action returns a #${id} hello`;
  }

  update(id: number, updateHelloDto: UpdateHelloDto) {
    return `This action updates a #${id} hello`;
  }

  remove(id: number) {
    return `This action removes a #${id} hello`;
  }
}
