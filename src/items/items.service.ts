import { Injectable, NotFoundException } from '@nestjs/common';
import { Item } from './item.entity';
import { CreateItemDto } from './create-item.dto';
import { UpdateItemDto } from './update-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemsRepository: Repository<Item>,
  ) {}

  create(itemDto: CreateItemDto): Promise<Item> {
    const newItem: Item = {
      id: null,
      description: itemDto.description,
      dueDate: itemDto.dueDate,
      complete: false,
    };

    return this.itemsRepository.save(newItem);
  }

  findAll(): Promise<Item[]> {
    return this.itemsRepository.find();
  }

  findOne(id: number): Promise<Item | null> {
    return this.itemsRepository.findOneBy({ id });
  }

  async deleteItem(id: number): Promise<void> {
    await this.itemsRepository.delete(id);
  }

  async updateItem(
    id: number,
    updateItemDto: UpdateItemDto,
  ): Promise<Item | null> {
    const item = await this.findOne(id);
    if (item) {
      item.description = updateItemDto.description;
      item.dueDate = updateItemDto.dueDate;
      item.complete = updateItemDto.complete;
      await this.itemsRepository.save([item]);

      return item;
    }

    throw new NotFoundException();
  }
}
