import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { subscription } from "./subscription.entity";

@Entity("typeSubscription")
export class typeSubscription {
    @PrimaryGeneratedColumn("increment", {type:"bigint"})
    idTypesubscription:number
    @Column({type:"varchar", length:"50"})
    nameTypesubscription:string
    @Column({type:"varchar", length:"50"})
    durationTypesubscription:number
    @Column({type:"int"})
    priceTypesubscription:number
    @OneToMany(()=> subscription, (subscription)=> subscription.typeSubscription)
    subscription:subscription
}