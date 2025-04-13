import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { subscription } from "./subscription.entity";

@Entity("customSubscription")
export class customSubscription {
    @PrimaryGeneratedColumn("increment", {type:"bigint"})
    idCustomSubscription:number
    @Column({type:"varchar", length:"50"})
    customePricePerUser:string
    @Column({type:"date"})
    startDateCustomSubscription:Date
    @Column({type: "int"})
    userQuantity: number
    @OneToMany(()=> subscription, (subscription)=> subscription.customSubscription)
    subscription:subscription
}