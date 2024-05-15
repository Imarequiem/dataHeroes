<template>
  <div v-if="props.pages > 1" class="pagination">
    <template v-for="(num, index) of props.pages" :key="index">
      <pagination-btn :page="num" :url="route.path" @click="emit('toPage', num)" />
    </template>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'PaginationVue'
})

import { useRoute } from 'vue-router'

import PaginationBtn from './ui/PaginationBtn.vue';

const emit = defineEmits(['toPage'])
const props = defineProps<{
  pages: number,
}>();

const route = useRoute()
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 70%;
  margin-top: 50px;

  &>a:not(:last-child) {
    margin-right: 7px;
  }
}
</style>