<script setup>
const description = ""
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
      placeholder="Description">

    <button
      type="button"
      class="btn btn-secondary"
      @click="$emit('addItem', description)">
      Add Item
    </button>
  </div>
</template>
