import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { answer } from './answer.entity';

@Entity("answerOption")
export class answerOption{
    @PrimaryGeneratedColumn("increment", {type:"bigint"})
    idAnswerOption:number
    @Column({type:"varchar", length:"50"})
    textAnswerOption:number
    @Column({type:"bool"})
    esCorrectAnswerOption:boolean
    @OneToMany(()=>answer, (answer)=> answer.answerOption)
    answer:answer

}