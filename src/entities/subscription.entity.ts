import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { typeSubscription } from './typeSubscription.entity';
import { customSubscription } from "./customSubscription.entity";
import { enterprise } from "./enterprise.entity";

@Entity("subscription")
export class subscription {
    @PrimaryGeneratedColumn("increment", {type:"bigint"})
    idsubscription:number
    @Column({type:"varchar", length:"50"})
    namesubscription:string
    @Column({type:"int"})
    pricesubscription:number
    @Column({type:"date"})
    startsubscription: Date
    @Column({type:"date"})
    endsubscription: Date
    @ManyToOne(()=> typeSubscription, (typeSubscription)=> typeSubscription.subscription)
    typeSubscription:typeSubscription
    @ManyToOne(()=> customSubscription, (customSubscription)=> customSubscription.subscription)
    customSubscription:customSubscription
    @ManyToOne(()=> enterprise, (enterprise)=> enterprise.subscription)
    enterprise:enterprise
}