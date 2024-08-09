<script setup>
import { ref } from 'vue'

const description = ref('')
defineEmits(['addItem'])
</script>

<template>
  <h5>Add New Item</h5>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      name="description"
      v-model="description"
      @keyup.enter="[$emit('addItem', description), description='']"
      placeholder="Description">

    <button
      type="button"
      class="btn btn-secondary"
      @click="[$emit('addItem', description), description='']">
      Add Item
    </button>
  </div>
</template>
