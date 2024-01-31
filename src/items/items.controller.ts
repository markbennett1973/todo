import { Controller, Get, Param, Post, Patch, Delete, Body } from "@nestjs/common";
import { CreateItemDto } from "./create-item.dto";
import { ItemsService } from "./items.service";
import { Item } from "./item.interface";
import { UpdateItemDto } from "./update-item.dto";

@Controller('items')
export class ItemsController {
    constructor(private itemsService: ItemsService) {}

    @Get()
    findAllItems(): Item[] {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOneItem(@Param('id') id: number): Item {
        return this.itemsService.findOne(id);
    }

    @Post()
    createItem(@Body() createItemDto: CreateItemDto): Item {
        return this.itemsService.create(createItemDto);
    }

    @Patch(':id')
    updateItem(@Param('id') id: number, @Body() updateItemDto: UpdateItemDto): Item {
        return this.itemsService.updateItem(id, updateItemDto);
    }

    @Delete(':id')
    deleteItem(@Param('id') id: number) {
        this.itemsService.deleteItem(id);
    }
}