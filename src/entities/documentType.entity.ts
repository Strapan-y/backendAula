import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { user } from './user.entity';


@Entity("documentType")
export class documentType {
    @PrimaryGeneratedColumn("increment", {type:"bigint"})
    idDocumentType:number
    @Column({type:"enum", enum:["TI","CC","CE","PASAPORTE"]})
    documenType:"TI"|"CC"|"CE"|"PASAPORTE"
    @OneToMany(()=> user, (user)=> user.documentType)  
    users:user[]
    

}