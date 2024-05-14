<template>
  <router-link :to="{
    path: url,
    query: { page: page }
  }">
    {{ page }}
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
	url: string;
	page: number;
}>();
</script>

<style scoped lang="scss"></style>