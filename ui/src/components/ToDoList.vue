<script setup>
import ToDoListItem from '@/components/ToDoListItem.vue';
import AddToDoListItem from '@/components/AddToDoListItem.vue';
import { useToDoListStore } from '@/stores/ToDoListStore.ts';

const store = useToDoListStore()

function addItem(description) {
  store.addItem(description)
}

function completeItem(id) {
  store.completeItem(id)
}

function deleteItem(id) {
  store.deleteItem(id)
}
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Description</th>
        <th scope="col">Completed</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>

    <tbody>
      <ToDoListItem
        v-for="item in store.todoList"
        :todoId=item.id
        :description="item.description"
        :complete="item.complete ? 'Y' : 'N'"
        @complete-item="completeItem"
        @delete-item="deleteItem"
      />
    </tbody>
  </table>

  <AddToDoListItem
    @add-item="addItem"
  />
</template>

<style scoped>

</style>
