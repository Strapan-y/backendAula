import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { userAgreement } from "./userAgreement.entity";
import { posts } from "./posts.entity";
import { enterpriseProgram } from './enterpriseProgram.entity';
import { subscription } from "./subscription.entity";

@Entity("enterprise")
export class enterprise{
    @PrimaryGeneratedColumn("increment", {type:"bigint"})
    idEnterprise:number
    @Column({type:"varchar", length:"50"})
    nameEnterprise:string
    @Column({type:"varchar", length:"50"})
    subscriptionEnterprise:string
    @Column({type:"int"})
    nitEnterprise:number
    @Column({type:"int"})
    phoneEnterprise:number
    @Column({type:"varchar", length:"50"})
    addressEnterprise:string
    @Column({type:"varchar", length:"50"})
    emailEnterprise:string
    @Column({type:"varchar", length:"50"})
    countryEnterprise:string
    @Column({type:"varchar", length:"50"})
    departmentEnterprise:string
    @Column({type:"varchar", length:"50"})
    municipalityEnterprise:string
    @OneToMany(()=>userAgreement,(userAgreement) => userAgreement.enterprise)
    userAgreement:userAgreement
    @OneToMany(()=>posts,(posts) => posts.enterprise)
    posts:posts
    @OneToMany(()=>enterpriseProgram,(enterpriseProgram)=>enterpriseProgram.enterprise)
    enterpriseProgram:enterpriseProgram
    @OneToMany(()=>subscription,(subscription)=>subscription.enterprise)
    subscription:subscription
}