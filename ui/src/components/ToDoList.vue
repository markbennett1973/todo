<script setup>
import ToDoListItem from '@/components/ToDoListItem.vue';
import AddToDoListItem from '@/components/AddToDoListItem.vue';
import { useToDoListStore } from '@/stores/ToDoListStore.ts';

defineProps([
  'showCompleted'
])

const store = useToDoListStore()
store.refreshItems()

function addItem(description) {
  if (description) {
    store.addItem(description)
  }
}

function completeItem(id, isCompleted) {
  store.completeItem(id, isCompleted)
}

function deleteItem(id) {
  store.deleteItem(id)
}
</script>

<template>
  <table class="table">
    <tbody>
      <ToDoListItem
        v-for="item in showCompleted ? store.completeItems : store.incompleteItems"
        :todoId=item.id
        :description="item.description"
        :render-as-completed="showCompleted"
        @complete-item="completeItem"
        @delete-item="deleteItem"
      />
    </tbody>
  </table>

  <AddToDoListItem
    v-if="!showCompleted"
    @add-item="addItem"
  />
</template>

<style scoped>

</style>
