import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { enterprise } from './enterprise.entity';
import {program} from './program.entity';

@Entity("enterpriseProgram")
export class enterpriseProgram{
    @PrimaryGeneratedColumn("increment", {type:"bigint"})
    idEnterpriseProgram:number
    @Column({type:"varchar", length:"50"})
    statusEnterpriseProgram:string
    @Column({type:"date"})
    dateAssigmentEnterprise:Date
    @Column({type:"varchar", length:"50"})
    percentageEnterprise: string
    @ManyToOne(()=> enterprise, (enterprise)=> enterprise.enterpriseProgram)
    enterprise:enterprise
    @ManyToOne(()=> program, (program)=> program.enterpriseProgram)
    program:program

}