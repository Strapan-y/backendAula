import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { user } from './user.entity';
import { group } from './group.entity';


@Entity("userGroup")
export class userGroup{
    @PrimaryGeneratedColumn("increment", {type:"bigint"})
    idUserGroup:number
    @Column({type:"varchar", length:"50"})
    progressUserGroup: string
    @Column({type:"varchar", length:"50"})
    currentModuleGroup:string
    @ManyToOne(()=> user, (user)=> user.userGroup)
    user:user
    @ManyToOne(()=> group, (group)=> group.userGroup)
    group:group

}