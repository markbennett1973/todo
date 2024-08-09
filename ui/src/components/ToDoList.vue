<script setup>
import ToDoListItem from '@/components/ToDoListItem.vue';
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Description</th>
        <th scope="col">Due date</th>
        <th scope="col">Completed</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>

    <tbody>
      <ToDoListItem todo-id="1" description="First item" complete="0"/>
      <ToDoListItem todo-id="2" description="Second item" complete="1"/>
    </tbody>
  </table>

  <button
    type="button"
    class="btn btn-primary"
    @click="count++"
  >Add Item</button>
</template>

<style scoped>

</style>
