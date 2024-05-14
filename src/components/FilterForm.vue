<!-- eslint-disable vue/no-mutating-props -->
<template>
  <form class="filter-form" method="get" @click.prevent>
    <input v-model="props.filter.name" type="text" placeholder="Name">
    <select v-model="props.filter.status" name="" placeholder="Status">
      <option value="" />
      <option value="Alive">Alive</option>
      <option value="Dead">Dead</option>
    </select>
    <input type="submit" value="Submit" @click="emit('toFilter')">
  </form>
</template>

<script setup lang="ts">
import type { Filter } from '@/types/filter.interface';

const props = defineProps<{
  filter: Filter
}>();

const emit = defineEmits(['toFilter'])
</script>

<style scoped></style>