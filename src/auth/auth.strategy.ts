import { HttpException, UnauthorizedException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy){
    constructor(private authService:AuthService){
        super({
            usernameField:'email'
        })
    }

    async validate(email:string,password:string){
        const user = await this.authService.validate(email,password);
        if(!user){
            throw new UnauthorizedException('signin failse');
        }
        return user;
    }
}