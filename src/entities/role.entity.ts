import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { permissionRole } from './permissionRole.entity';
import { user } from "./user.entity";

@Entity("role")
export class role {
    @PrimaryGeneratedColumn("increment", {type:"bigint"})
    idRole:number
    @Column({type:"enum", enum:["EMPRESA","DOCENTE","ESTUDIANTE","ADMINISTRADOR"]})
    nameRole:"EMPRESA"|"DOCENTE"|"ESTUDIANTE"|"ADMINISTRADOR"
    @OneToMany(()=>permissionRole,(permissionRole) => permissionRole.role)
    permissionsRole:permissionRole[]
    @OneToMany(()=>user,(user) => user.role)
    user:user[]


}