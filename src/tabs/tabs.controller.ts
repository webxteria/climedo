import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TabsService } from './tabs.service';
import { TabsRequestDTO } from './tabs-request.dto';

@Controller('tabs')
export class TabsController {
  constructor(private readonly tabsService: TabsService) {}


  @Post()
  async create(@Body() tab: TabsRequestDTO) {
    return await this.tabsService.create(tab);
  }

  @Get()
  async getAll() {
    return await this.tabsService.getAll();
  }

  @Get(':id')
  async get(
    @Param('id') id: string
  ) {
    return await this.tabsService.getSingle(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() tab: TabsRequestDTO
  ) {
    return await this.tabsService.update(id, tab);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string
  ) {
    return await this.tabsService.delete(id);
  }
}
