import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Query, Redirect, Req ,Res} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesDto } from './courses.dto';
import { Request, Response } from 'express';
@Controller('courses')
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
        const courses = await this.courseService.addCourse(coure_to_add);
        return courses;
    }

    @Delete()
    async deleteCourse(@Query() query){
        const courses = await this.courseService.deleteCourse(query.Id);
        return courses;
    }
}
