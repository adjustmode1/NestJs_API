import { IsEmpty } from 'class-validator';

export class AuthDto{
    @IsEmpty()
    email:string;
    @IsEmpty()
    password:string
}