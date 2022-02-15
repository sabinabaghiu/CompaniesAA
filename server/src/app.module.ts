import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [MongooseModule.forRoot(config.mongoURI), CompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
