import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Courses{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column()
    description:string;

    @Column()
    author:string;

    @Column()
    url:string;
}