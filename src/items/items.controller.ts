import {
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  Body,
} from '@nestjs/common';
import { CreateItemDto } from './create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './item.entity';
import { UpdateItemDto } from './update-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  async findAllItems(): Promise<Item[]> {
    return await this.itemsService.findAll();
  }

  @Get(':id')
  async findOneItem(@Param('id') id: number): Promise<Item> {
    return await this.itemsService.findOne(id);
  }

  @Post()
  async createItem(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return await this.itemsService.create(createItemDto);
  }

  @Patch(':id')
  async updateItem(
    @Param('id') id: number,
    @Body() updateItemDto: UpdateItemDto,
  ): Promise<Item> {
    return await this.itemsService.updateItem(id, updateItemDto);
  }

  @Delete(':id')
  async deleteItem(@Param('id') id: number) {
    await this.itemsService.deleteItem(id);
  }
}
