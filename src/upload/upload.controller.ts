import { Controller, Get, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('upload')
export class UploadController {

    @Post('upload')
    @UseInterceptors(FileInterceptor('file',{
        storage:diskStorage({
            destination:'./save-upload',
            filename:(req,file,cb)=>{
                cb(null,Date.now()+file.originalname);
            }
        })
    }))
    uploadFile(@UploadedFile() file: Express.Multer.File){
        console.log(file)
        return "ok";
    }

    @Post('uploads')
    @UseInterceptors(FilesInterceptor('files',10,{
        storage:diskStorage({
            destination:'./save-upload',
            filename:(req,file,cb)=>{
                cb(null,Date.now()+file.originalname);
            }
        })
    }))
    uploadsFile(@UploadedFiles() files: Array<Express.Multer.File>){
        console.log(files)
        return "files ok";
    }

    @Get()
    testApi(){
        return "ok";
    }
}
