import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Query, Redirect, Req ,Res} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesDto } from './dto/courses.dto';
import { Request, Response } from 'express';
import { validate } from 'class-validator';
// @Controller('courses')
@Controller('fakeroutes')
export class CoursesController {
    constructor(private courseService: CoursesService){}

    @Get()
    async getCourses(){
        const courses = await this.courseService.getCoures();
        return courses;
    }

    @Get(':courseId')
    async getCourse(@Req() req:Request,@Res() res:Response){
        console.log(req.params);
        
        const course = await this.courseService.getCoure(req.params.courseId);
        res.status(HttpStatus.OK).send(course);
    }

    @Post()
    async addCourse(@Body() coure_to_add:CoursesDto){
        let co = new CoursesDto();
        co.id = null;
        validate(co).then(err=>{
            console.log('err',err)
        })
        const courses = await this.courseService.addCourse(coure_to_add);
        return courses;
    }

    @Delete()
    async deleteCourse(@Req() req:Request){
        const courses = await this.courseService.deleteCourse(req.query['Id']);
        return courses;
    }
}
