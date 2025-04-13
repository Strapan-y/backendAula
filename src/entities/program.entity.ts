import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { enterpriseProgram } from './enterpriseProgram.entity';
import { group } from './group.entity';
import { modulProgram } from "./modulProgram.entity"

@Entity("program")
export class program{
    @PrimaryGeneratedColumn("increment", {type:"bigint"})
    idProgram:number
    @Column({type:"varchar", length:"50"})
    nameProgram:string
    @OneToMany(()=> enterpriseProgram, (enterpriseProgram)=> enterpriseProgram.program)
    enterpriseProgram: enterpriseProgram
    @OneToMany(()=>group, (group)=> group.program)
    group:group
    @OneToMany(()=> modulProgram, (modulProgram)=> modulProgram.program)
    modulProgram:modulProgram


    

}