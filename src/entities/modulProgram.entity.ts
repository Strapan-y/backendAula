import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { topics } from './topics.entity';
import { program } from './program.entity';

@Entity("modulProgram")
export class modulProgram{
    @PrimaryGeneratedColumn("increment", {type:"bigint"})
    idModule:number
    @Column({type:"varchar", length:"50"})
    nameModule:string
    @Column({type:"varchar", length:"50"})
    imgModule:string
    @Column({type:"varchar", length:"50"})
    contentModule:string
    @Column({type:"int"})
    orderModule:number

    @ManyToOne(()=> program, (program)=> program.modulProgram)
    program:program
    @OneToMany(()=> topics, (topics)=>topics.modulProgram)
    topics:topics

}