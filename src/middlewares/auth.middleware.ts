import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AuthMidlleware implements NestMiddleware{
    use(req:Request,res:Response, next:NextFunction){
        console.log('middleware:',req);
        next();
    }
}