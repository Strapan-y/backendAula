import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { role } from "./role.entity";
import { permission } from './permission.entity';

@Entity("permissionRole")
export class permissionRole {
    @PrimaryGeneratedColumn("increment", {type:"bigint"})
    idPermissionRole:number
    @Column({type:"date"})
    datePermissionRole: Date
    @Column({type:"bool"})
    statusPermission:boolean
    @ManyToOne(()=> role, (role)=> role.permissionsRole)
    role:role
    @ManyToOne(()=> permission, (permission)=> permission.permissionsRole)
    permission:permission
}