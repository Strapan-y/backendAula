import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { entry } from "./entry.entity";

@Entity("material")
export class material {
    @PrimaryGeneratedColumn("increment", {type:"bigint"})
    idMaterial:number
    @Column({type:"varchar", length:"50"})
    nameMaterial:string
    @Column({type:"varchar", length:"50"})
    urlMaterial:string
    @Column({type:"date"})
    dateEndMaterial:Date
    @Column({type:"int"})
    ratingMaterial:number

    @OneToOne(()=> entry, (entry)=> entry.material)
    entry:entry
}