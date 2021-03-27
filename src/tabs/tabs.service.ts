import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tab } from './tabs.model';
import { TabsRequestDTO } from './tabs-request.dto';

@Injectable()
export class TabsService {
    
  constructor(@InjectModel('Tab') private readonly tabModel: Model<Tab>) {}

  async create(tab: TabsRequestDTO) {
    return await new this.tabModel(tab).save();
  }

  async getAll() {
    return await this.tabModel.find().exec();
  }

  async getSingle(id: string) {
    try {
      return await this.tabModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find book.');
    }
  }

  async update(id: string, tab: TabsRequestDTO) {
    let exisitingTabData = await this.getSingle(id);
    await exisitingTabData.update(tab);
    return await this.getSingle(id);
  }

  async delete(id: string) {
    try {
      let tab = await this.tabModel.deleteOne({ _id: id }).exec();
      if (tab) await this.tabModel;
    } catch (error) {
      throw new NotFoundException('Could not find book.');
    }
  }
}
