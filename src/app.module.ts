import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TabsModule } from './tabs/tabs.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/climedo'),
    TabsModule
  ],
  providers: [AppService],
})

export class AppModule {}
