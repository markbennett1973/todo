<script setup>

defineProps([
  'todoId',
  'description',
  'dueDate',
  'complete'
])
</script>

<template>
  <tr>
    <th scope="row">{{ todoId }}</th>
    <td>{{ description }}</td>
    <td>{{ dueDate }}</td>
    <td>{{ complete }}</td>
    <td>
      <button class="btn btn-success">Complete</button>
      <button class="btn btn-danger">Delete</button>
    </td>
  </tr>
</template>

<style scoped>

</style>
