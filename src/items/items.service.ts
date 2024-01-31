import { Injectable, NotFoundException } from "@nestjs/common";
import { Item } from "./item.interface";
import { CreateItemDto } from "./create-item.dto";
import { UpdateItemDto } from "./update-item.dto";

@Injectable()
export class ItemsService {
    readonly #items: Item[] = [];

    create(itemDto: CreateItemDto): Item {
        const newItem: Item = {
            id: this.#getNextItemId(),
            description: itemDto.description,
            dueDate: itemDto.dueDate,
            complete: false
        }

        this.#items.push(newItem);

        return newItem;
    }

    findAll(): Item[] {
        return this.#items;
    }

    findOne(id: number): Item {
        const index = this.#findIndexOfItemId(id);
        return this.#items[index];
    }

    deleteItem(id: number) {
        const index = this.#findIndexOfItemId(id);
        this.#items.splice(index, 1);
    }

    updateItem(id: number, updateItemDto: UpdateItemDto): Item
    {
        const index = this.#findIndexOfItemId(id);
        this.#items[index].description = updateItemDto.description;
        this.#items[index].dueDate = updateItemDto.dueDate;
        this.#items[index].complete = updateItemDto.complete;

        return this.#items[index];
    }

    #getNextItemId(): number {
        let maxId = 0;
        for (var i = 0; i < this.#items.length; i++) {
            maxId = Math.max(this.#items[i].id, maxId);
        }

        return maxId + 1;
    }

    #findIndexOfItemId(id: number): number
    {
        for (var i = 0; i < this.#items.length; i++) {
            if (this.#items[i].id == id) {
                return i;
            }
        }

        throw new NotFoundException('Item ' + id + ' not found');
    }
}