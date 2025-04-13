import { BeforeInsert, Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { documentType } from './documentType.entity';
import {userGroup} from './userGroup.entity';
import { forumParticipation } from './forumParticipation.entity';
import { userAgreement } from "./userAgreement.entity";
import { userCompletedEntry } from './userCompletedEntry.entity';
import { evaluation } from './evaluation.entity';
import { role } from "./role.entity";
import { HttpException, HttpStatus } from "@nestjs/common";

const bcrypt = require('bcrypt');



@Entity("user")
export class user {
    @PrimaryGeneratedColumn("increment",{type:"bigint"})
    idUser:number
    @Column({type:"varchar", length:"50"})
    nameUser:string
    @Column({type:"varchar", length:"50"})
    lastNameUser:string
    @Column({type:"varchar", length:"50"})
    countryUser:string
    @Column({type:"varchar", length:"50"})
    departmentUser:string
    @Column({type:"varchar", length:"50"})
    municipalityUser:string
    @Column({type:"int"})
    documentUser:number
    @Column({type:"int"})
    phoneUser:number
    @Column({type:"varchar", length:"255"})
    photoUser:string
    @Column({type:"enum", enum:["FEMENINO","MASCULINO","PREFIERO NO DECIR","OTRO"]})
    genderUser:"FEMENINO"|"MASCULINO"| "PREFIERO NO DECIR"|"OTRO"
    @Column({type:"bool"})
    dbState:boolean
    @Column({type:"varchar", length:"50"})
    passwordUser:string

    @BeforeInsert()
    async hashPassword() {
      this.passwordUser = await bcrypt.hash(this.passwordUser, 10);
    }
  
    async validatePassword(password: string): Promise<boolean> {
      /* return await bcrypt.compareSync(password, this.password); */
      if (this.dbState === false) {
        throw new HttpException('Usuario inhabilitado', HttpStatus.BAD_REQUEST);
      } else {
        if (password == this.passwordUser) {
          return true
        } else {
          throw new HttpException('Contraseña incorrecta', HttpStatus.BAD_REQUEST);
          return false
        }
      }
    }


    @Column({type:"varchar", length:"50"})
    addresUser:string
    @Column({type:"varchar", length:"50"})
    emailUser:string
    @ManyToOne(()=> documentType, (documentType)=> documentType.users) //Con esto creo la foranea 
    documentType: documentType
    @ManyToOne(()=> role, (role)=> role.user) //Con esto creo la foranea 
    role:role
    @OneToMany(()=>userGroup,(userGroup) => userGroup.user)
    userGroup:userGroup
    @OneToMany(() => forumParticipation, (forumParticipation)=> forumParticipation.user)
    forumParticipation:forumParticipation
    @OneToMany(()=> userAgreement, (userAgreement)=> userAgreement.user)
    userAgreement:userAgreement
    @OneToMany(()=> userCompletedEntry, (userCompletedEntry)=> userCompletedEntry.user)
    userCompletedEntry:userCompletedEntry
    @OneToMany(()=> evaluation, (evaluation)=> evaluation.user)
    evaluation:evaluation
    

    


    


    




    
}