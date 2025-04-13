import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { user } from "./user.entity";
import { enterprise } from './enterprise.entity';

@Entity("userAgreement")
export class userAgreement{
    @PrimaryGeneratedColumn("increment", {type:"bigint"})
    idUserAgreement:number
    @Column({type:"date"})
    startdateuserAgreement: Date
    @Column({type:"date"})
    endDateUserAgreement: Date
    @Column({type:"bool"})
    statusPermission:boolean
    @ManyToOne(()=> user, (user)=> user.userAgreement)
    user:user
    @ManyToOne(()=> enterprise, (enterprise)=> enterprise.userAgreement)
    enterprise:enterprise


}