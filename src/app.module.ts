import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContasModule } from './contas/contas.module';

@Module({
  imports: [
    ContasModule,
    MongooseModule.forRoot('mongodb+srv://eliane:hB8NcHtKEmszBB@cluster0.jxkvgdu.mongodb.net/test')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
