<!-- eslint-disable vue/no-mutating-props -->
<template>
  <select v-model="props.filter.status" name="Status">
    <option value="" selected>All</option>
    <option value="Alive">Alive</option>
    <option value="Dead">Dead</option>
  </select>
</template>

<script setup lang="ts">
import type { Filter } from '@/types/filter.interface';

const props = defineProps<{
  name: string,
  filter: Filter
}>();
</script>

<style scoped></style>