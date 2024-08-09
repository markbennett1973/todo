import { defineStore} from 'pinia';
import axios from 'axios';
import { ToDoList } from '@/types/ToDoList.js';

const itemsApi = 'http://localhost:3000/items';

export const useToDoListStore = defineStore('todolist', {
  state: () => ({
    todoList: [] as ToDoList[],
    completeItems: [] as ToDoList[],
    incompleteItems: [] as ToDoList[],
  }),

  actions: {
    addItem(description: string) {
      axios.post(itemsApi, {
        description: description
      }).then(response => {
        // this.todoList.push(response.data)
        this.refreshItems()
      })
    },

    completeItem(id: number, completed: boolean) {
      axios.patch(itemsApi + '/' + id, {
        complete: completed
      }).then(() => {
        this.refreshItems()
      })
    },

    deleteItem(id: number) {
      axios.delete(itemsApi + '/' + id)
        .then(() => {
          this.refreshItems()
        })
    },

    refreshItems() {
      axios.get(itemsApi)
        .then((response) => {
          this.todoList = response.data
          this.completeItems = this.todoList.filter((item) => item.complete)
          this.incompleteItems = this.todoList.filter((item) => !item.complete)
      })
    }
  }
});
