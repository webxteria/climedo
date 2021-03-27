import { Module } from '@nestjs/common';
import { TabsController } from './tabs.controller';
import { TabsService } from './tabs.service';
import { tabsSchema } from './tabs.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Tab', schema: tabsSchema }])],
  controllers: [TabsController],
  providers: [TabsService],
})
export class TabsModule {}
