import { Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { user } from "./user.entity";


@Entity ("evaluation")
export class evaluation{
    @PrimaryGeneratedColumn("increment", {type:"bigint"})
    idEvaluation:number
    @Column({type:"date"})
    dateEvaluation:Date
    @Column({type:"varchar", length:"50"})
    ratingEvaluation:string
    @ManyToOne(()=> user, (user)=> user.evaluation)
    user:user
    

    
}