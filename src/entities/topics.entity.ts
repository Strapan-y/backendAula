import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { entry } from "./entry.entity";
import {modulProgram} from "./modulProgram.entity"

@Entity("topics")
export class topics{
    @PrimaryGeneratedColumn("increment", {type:"bigint"})
    idTopics:number
    @Column({type:"varchar", length:"50"})
    ContentTopics:string
    @ManyToOne(()=> modulProgram, (modulProgram)=> modulProgram.topics)
    modulProgram:modulProgram
    @OneToOne(()=> entry, (entry)=> entry.topics)
    entry:entry
}