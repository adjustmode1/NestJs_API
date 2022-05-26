import { IsEmpty } from 'class-validator';
export class CreateTaskDto {
    @IsEmpty()
    task:string;
}
