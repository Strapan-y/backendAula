import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { entry } from "./entry.entity";

@Entity("activity")
export class activity{
    @PrimaryGeneratedColumn("increment", {type:"bigint"})
    idActivity:number
    @Column({type:"varchar", length:"50"})
    nameActivity:string
    @Column({type:"varchar", length:"50"})
    descriptionActivity:string
    @Column({type:"date"})
    dateCreationActivity:Date
    @Column({type:"date"})
    dateEndActivity:Date
    @Column({type:"bool"})
    statusActivity: boolean
    @Column({type:"varchar"})
    urlActivity:string
    
    @OneToOne(()=> entry, (entry)=> entry.activity)
    entry:entry
}