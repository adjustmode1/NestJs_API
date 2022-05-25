import { courseInterface } from './interface/courses.interface';
import { HttpException, Injectable } from '@nestjs/common';
import { COURSES } from './courses.mock';
@Injectable()
export class CoursesService {
    courses = COURSES;
    getCoures(): Promise<any>{
        return new Promise((resolve,reject)=>{
            resolve(this.courses)
        })
    }
    getCoure(id): Promise<any>{
        return new Promise((resolve,reject)=>{
            const coure = this.courses.find(el=>el.id === id);
            if(!coure){
                throw new HttpException('Course does not exist',404);
            }
            resolve(coure);
        })
    }
    addCourse(course:courseInterface): Promise<any>{
        return new Promise((resolve,reject)=>{
            this.courses.push(course);
            resolve(this.courses);
        })
    }
    deleteCourse(id): Promise<any>{
        return new Promise((resolve,reject)=>{
            id = Number(id);
            let index = this.courses.findIndex(course=>course.id === id);
            if(index===-1){
                throw new HttpException('course does not exist',404);
            }
            this.courses.splice(index,1);
            resolve(this.courses)
        })
    }
}
