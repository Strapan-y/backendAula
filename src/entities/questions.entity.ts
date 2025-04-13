import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { questionnaire } from "./questionnaire.entity";
import { answer } from './answer.entity';

@Entity("questions")
export class questions {
    @PrimaryGeneratedColumn("increment", {type:"bigint"})
    idQuestions:number
    @Column({type:"varchar", length:"50"})
    typeQuestions:string
    @Column({type:"varchar", length:"50"})
    textQuestion:string
    @ManyToOne(()=> questionnaire,(questionnaire)=> questionnaire.questions)
    questionnaire:questionnaire
    @OneToMany(()=> answer, (answer)=> answer.questions)
    answer:answer
}