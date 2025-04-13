import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { activityModule } from './modules/activity/activity.module';
import { answerModule } from './modules/answer/answer.module';
import { answerOptionModule } from './modules/answerOption/answerOption.module';
import { customSubscriptionModule } from './modules/customSubscription/customSubscription.module';
import { documentTypeModule } from './modules/documentType/documentType.module';
import { enterpriseModule } from './modules/enterprise/enterprise.module';
import { enterpriseProgramModule } from './modules/enterpriseProgram/enterpriseProgram.module';
import { entryModule } from './modules/entry/entry.module';
import { evaluationModule } from './modules/evaluation/evaluation.module';
import { forumModule } from './modules/forumm/forumm.module';
import { groupModule } from './modules/group/group.module';
import { materialModule } from './modules/material/material.module';
import { meetingModule } from './modules/meeting/meeting.module';
import { modulProgramModule } from './modules/modulProgram/modulProgram.module';
import { permissionModule } from './modules/permission/permission.module';
import { permissionRoleModule } from './modules/permissionRole/permissionRole.module';
import { postsModule } from './modules/postss/postss.module';
import { programModule } from './modules/program/program.module';
import { questionnaireModule } from './modules/questionnaire/questionnaire.module';
import { questionsModule } from './modules/questions/questions.module';
import { roleModule } from './modules/role/role.module';
import { subscriptionModule } from './modules/subscription/subscription.module';
import { topicsModule } from './modules/topics/topics.module';
import { typeSubscriptionModule } from './modules/typeSubscription/typeSubscription.module';
import { userModule } from './modules/user/user.module';
import { userAgreementModule } from './modules/userAgreement/userAgreement.module';
import { userCompletedEntryModule } from './modules/userCompletedEntry/userCompletedEntry.module';
import { userGroupModule } from './modules/userGroup/userGroup.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'production'
          ? '.env.production'
          : '.env.development',
    }),
    TypeOrmModule.forRoot({
      name: "default",
      type: 'postgres',
      host: 'switchyard.proxy.rlwy.net',
      port: 35846,
      username: 'postgres',
      password: 'IlwySLvIrwIoPHGpxskUJUOklqOssXki',
      database: 'railway',
      entities: ['dist/entities/*.entity.js'],
      synchronize: true,
      logging: true,
      ssl: { rejectUnauthorized: false }
      }),
    activityModule,
    answerModule,
    answerOptionModule,
    customSubscriptionModule,
    documentTypeModule,
    enterpriseModule,
    enterpriseProgramModule,
    entryModule,
    evaluationModule,
    forumModule,
    groupModule,
    materialModule,
    meetingModule,
    modulProgramModule,
    permissionModule,
    permissionRoleModule,
    postsModule,
    programModule,
    questionnaireModule,
    questionsModule,
    roleModule,
    subscriptionModule,
    topicsModule,
    typeSubscriptionModule,
    userModule,
    userAgreementModule,
    userCompletedEntryModule,
    userGroupModule





  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

