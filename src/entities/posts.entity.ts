import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { enterprise } from './enterprise.entity';

@Entity("posts")
export class posts{
    @PrimaryGeneratedColumn("increment", {type:"bigint"})
    idPosts:number
    @Column({type:"varchar", length:"50"})
    contentPosts:string
    @ManyToOne(()=> enterprise, (enterprise)=> enterprise.posts)
    enterprise:enterprise
}