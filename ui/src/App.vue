<script setup>
import ToDoList from '@/components/ToDoList.vue'
import { ref } from 'vue'

const showCompleted = ref(false)
</script>

<template>
  <div class="container">
    <h1 class="my-4">To-Do List</h1>
    <ToDoList :showCompleted="false"/>

    <div class="form-check">
      <input v-model="showCompleted" class="form-check-input" type="checkbox" id="showCompleted">
      <label class="form-check-label" for="showCompleted">
        Show completed items
      </label>
    </div>
    <ToDoList v-if="showCompleted" :showCompleted="true"/>
  </div>
</template>
