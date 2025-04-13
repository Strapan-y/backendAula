import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { forumParticipation } from './forumParticipation.entity';
import { entry } from "./entry.entity";


@Entity("forum")
export class forum{
    @PrimaryGeneratedColumn("increment",{type:"bigint"})
    idForum:number
    @Column({type:"date"})
    dateForum:Date
    @Column({type:"varchar", length:"50"})
    statusForum:string
    @ManyToOne(()=>entry, (entry)=> entry.forum)
    entry:entry
    @OneToMany(()=>forumParticipation,(forumParticipation) => forumParticipation.forum)
    forumParticipation:forumParticipation
    
}