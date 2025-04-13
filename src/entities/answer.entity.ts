import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { questions } from "./questions.entity";
import { answerOption } from './answerOption.entity';

@Entity("answer")
export class answer{
    @PrimaryGeneratedColumn("increment", {type:"bigint"})
    idAnswer:number
    @Column({type:"varchar", length:"50"})
    responseAnswer:number

    @ManyToOne(()=> questions, (questions)=> questions.answer)
    questions:questions
    @ManyToOne(()=> answerOption, (answerOption)=>answerOption.answer)
    answerOption:answerOption

}