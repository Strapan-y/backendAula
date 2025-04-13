import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { questions } from "./questions.entity"
import { entry } from "./entry.entity"

@Entity("questionnaire")
export class questionnaire {
    @PrimaryGeneratedColumn("increment", {type:"bigint"})
    idQuestionnaire:number
    @Column({type:"varchar", length:"50"})
    nameQuestionnaire:string
    @Column({type:"varchar", length:"50"})
    instrutionsQuestionnaire:string
    @Column({type:"date"})
    dateCreationsQuestionnaire:Date

    @OneToOne(()=>entry, (entry)=>entry.questionnaire)
    entry:entry;
    
    @OneToMany(()=> questions,(questions)=> questions.questionnaire)
    questions:questions
    

}