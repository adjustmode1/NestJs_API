import {Contains, IsEmail, IsEmpty} from "class-validator";
export class CoursesDto{
    @IsEmpty({message:"ID does not empty"})
    id:number;

    @IsEmail()
    title:string;

    @Contains('hello')
    description:string;

    author:string;
    url:string;
}