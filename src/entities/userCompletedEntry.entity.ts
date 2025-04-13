import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { user } from "./user.entity";
import { entry } from "./entry.entity";

@Entity("userCompletedEntry")
export class userCompletedEntry{
    @PrimaryGeneratedColumn("increment", {type:"bigint"})
    idUserCompletedEntry:number
    @Column({type:"date"})
    dateCompletedUserCompletedEntry:Date
    @ManyToOne(()=>user, (user)=> user.userCompletedEntry)
    user:user
    @ManyToOne(()=> entry, (entry)=> entry.userCompletedEntry)
    entry:entry

}