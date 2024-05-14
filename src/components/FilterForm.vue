<template>
  <form class="filter-form" method="get" @click.prevent>
    <div class="filter-form__filters">
      <input-form :placeholder="'Name'" :type="'text'" :filter="props.filter" />
      <select-form :filter="$props.filter" :name="'Status'" />
    </div>

    <input type="submit" value="Submit" class="filter-form__submit" @click="emit('toFilter')">
  </form>
</template>

<script setup lang="ts">
import InputForm from './ui/form/InputForm.vue';
import SelectForm from './ui/form/SelectForm.vue';

import type { Filter } from '@/types/filter.interface';

const props = defineProps<{
  filter: Filter
}>();

const emit = defineEmits(['toFilter'])
</script>

<style scoped lang="scss">
.filter-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;

  &>* {
    margin: 5px;
  }

  .filter-form__filters {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  input,
  select {
    padding: 5px;
    border-color: transparent;
    border-radius: 5px;
  }

  .filter-form__submit {
    padding: 5px;
    border-color: transparent;
    border-radius: 10px;
  }
}
</style>