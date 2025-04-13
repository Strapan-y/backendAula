import { Column, Entity,ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { userGroup } from './userGroup.entity';
import { program } from './program.entity';


@Entity("group")
export class group{
    @PrimaryGeneratedColumn("increment", {type:"bigint"})
    idGroup:number
    @Column({type:"varchar", length:"50"})
    maxUsersGroup:string
    @OneToMany(()=> userGroup, (userGroup)=> userGroup.group)
    userGroup:userGroup
    @ManyToOne(()=> program, (program)=> program.group)
    program:program
    

}