<script setup>

defineProps([
  'todoId',
  'description',
  'dueDate',
  'complete'
])

defineEmits([
  'completeItem',
  'deleteItem'
])

</script>

<template>
  <tr>
    <th scope="row">{{ todoId }}</th>
    <td>{{ description }}</td>
    <td>{{ complete }}</td>
    <td>
      <button
        class="btn btn-success"
        @click="$emit('completeItem', todoId)"
      >
        Complete
      </button>

      <button
        class="btn btn-danger"
        @click="$emit('deleteItem', todoId)"
      >
        Delete
      </button>
    </td>
  </tr>
</template>

<style scoped>

</style>
