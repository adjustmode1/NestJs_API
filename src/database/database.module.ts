import { Schema, MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[
        // MongooseModule.forRoot('mongodb://localhost/nest_mongo'),
        MongooseModule.forRoot('mongodb://thanhhuy:thanhhuy@localhost:27017/nest_mongo'),
    ]
})
export class DatabaseModule {}
