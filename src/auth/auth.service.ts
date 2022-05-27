import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Auth, AuthDocument } from './schema/auth.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {

    constructor(@InjectModel(Auth.name) private authModel:Model<AuthDocument>){}

    findAll(){
        return this.authModel.find();
    }
}
