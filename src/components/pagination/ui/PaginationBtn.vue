<template>
  <router-link :to="{
    path: url,
    query: { page: page }
  }" exact>
    {{ page }}
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  url: string;
  page: number | string;
}>();
</script>

<style scoped lang="scss">
.router-link-exact-active:focus {
  color: grey !important;
}
</style>