import { AuthService } from './auth.service';
import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService:AuthService,private jwtService:JwtService){}

    @Get()
    findAll(){
        return this.authService.findAll();
    }

    @Post('signin')
    @UseGuards(AuthGuard('local'))
    signIn(@Req() req:Request){
        const user = req.user;
        // console.log('user',user+":  "+typeof(user))
        // let payload = {email:user.email,id:user._id};
        let key = this.jwtService.sign({...user});
        return key
    }

    @Get('test')
    @UseGuards(AuthGuard('jwt'))
    testApi(@Req() req:Request){
        return 'ok';
    }
}
