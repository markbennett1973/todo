<script setup>

defineProps([
  'todoId',
  'description',
  'dueDate',
  'renderAsCompleted',
])

defineEmits([
  'completeItem',
  'deleteItem'
])

</script>

<template>
  <tr
    v-if="renderAsCompleted"
    class="completed">
    <td>{{ description }}</td>
    <td>
      <button
        class="btn btn-outline-success"
        @click="$emit('completeItem', todoId, false)"
      >
        Reactivate
      </button>
      <button
        class="btn btn-outline-danger"
        @click="$emit('deleteItem', todoId)"
      >
        Delete
      </button>
    </td>
  </tr>

  <tr
    v-else>
    <td>{{ description }}</td>
    <td>
      <button
        class="btn btn-success"
        @click="$emit('completeItem', todoId, true)"
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
  .completed td {
    color: #999999;
    text-decoration: line-through;
  }
</style>
