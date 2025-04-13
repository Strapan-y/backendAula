import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { user } from "./user.entity";
import { forum } from "./forum.entity";


@Entity("forumParticipation")
export class forumParticipation {
    @PrimaryGeneratedColumn("increment",{type:"bigint"})
    idForumParticipation:number
    @Column({type:"date"})
    dateCreatedForumParticipation:Date
    @Column({type:"jsonb", nullable: true})
    contentJsonForumParticipation: object
   
    @ManyToOne(()=> user, (user)=> user.forumParticipation) //Con esto creo la foranea 
    user: user
    @OneToMany(()=>forum,(forum) => forum.forumParticipation)
    forum:forum
    

}