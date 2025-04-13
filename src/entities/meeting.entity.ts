import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { entry } from './entry.entity';

@Entity ("meeting")
export class meeting{
    @PrimaryGeneratedColumn("increment", {type:"bigint"})
    idMeeting:number
    @Column({type:"varchar", length:"50"})
    urlMeeting:string
    @Column({type:"date"})
    dateCreatedMeeting:Date
    @Column({type:"date"})
    dateMeeting:Date

    @OneToOne(()=>entry,(entry)=>entry.meeting)
    entry: entry



    
    

}