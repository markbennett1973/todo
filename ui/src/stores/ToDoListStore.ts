import { defineStore} from 'pinia';
import { ToDoList } from '@/types/ToDoList.js';
import { ToDoListItem } from '../types/ToDoListItem';

export const useToDoListStore = defineStore('todolist', {
  state: () => ({
    todoList: [] as ToDoList[]
  }),

  actions: {
    addItem(description: string) {
      const item = new ToDoListItem()
      item.description = description
      const maxId = this.todoList.reduce((prev, current) => (prev.id > current.id) ? prev.id : current.id, 0)
      item.id = maxId + 1
      item.complete = false
      this.todoList.push(item)
    },

    completeItem(id: number) {
      const match = this.todoList.find(item => item.id === id)
      if (match) {
        match.complete = true
      }
    },

    deleteItem(id: number) {
      const index = this.todoList.findIndex(item => item.id === id);

      if (index !== -1) {
        this.todoList.splice(index, 1);
      }
    }
  }
});
