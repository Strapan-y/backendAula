import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { permissionRole } from "./permissionRole.entity";

@Entity("permission")
export class permission {
    @PrimaryGeneratedColumn("increment", {type:"bigint"})
    idPermission:number
    @Column({type:"varchar", length:"50"})
    namePermission:string
    @Column({type:"bool"})
    statusPermission:boolean
    @OneToMany(()=>permissionRole,(permissionRole) => permissionRole.permission)
        permissionsRole:permissionRole[]
}