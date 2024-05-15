<!-- eslint-disable vue/no-mutating-props -->
<template>
  <input v-model="props.filter.name" :type="type" :placeholder="placeholder">
</template>

<script setup lang="ts">
import type { Filter } from '@/types/filter.interface';

const props = defineProps<{
  placeholder: string,
  type: string,
  filter: Filter
}>();
</script>

<style scoped></style>