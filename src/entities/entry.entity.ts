import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { forum } from './forum.entity';
import { userCompletedEntry } from './userCompletedEntry.entity';
import { meeting } from './meeting.entity';
import { activity } from "./activity.entity";
import { material } from "./material.entity";
import { topics } from "./topics.entity";
import { questionnaire } from "./questionnaire.entity";


@Entity("entry")
export class entry{
    @PrimaryGeneratedColumn("increment", {type:"bigint"})
    idEntry:number
    @Column({type:"varchar", length:"50"})
    titleEntry:string
    @Column({type:"date"})
    contentEntry:Date
    @Column({type:"varchar", length:"50"})
    orderEntry: string
    @OneToMany(()=>forum, (forum)=> forum.entry)
    forum:forum[]
    @OneToMany(()=> userCompletedEntry, (userCompletedEntry)=> userCompletedEntry.entry)
    userCompletedEntry:userCompletedEntry[]

    @OneToOne(()=>meeting,(meeting)=>meeting.entry)
    @JoinColumn() // Especifica la columna de la clave foránea
    meeting: meeting
    @OneToOne(()=>activity,(activity)=>activity.entry)
    @JoinColumn()
    activity: activity
    @OneToOne(()=>material,(material)=>material.entry)
    @JoinColumn()
    material: material
    @OneToOne(()=>topics,(topics)=>topics.entry)
    @JoinColumn()
    topics: topics
    @OneToOne(()=>questionnaire, (questionnaire)=>questionnaire.entry)
    @JoinColumn()
    questionnaire:questionnaire;




}