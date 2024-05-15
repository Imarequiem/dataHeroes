<template>
  <header>
    <img src="/public/logo.png" alt="Data Heroes logo" width="100px">
    <h1>Rick & Morty</h1>
  </header>
</template>

<script setup lang="ts">
defineOptions({
  name: 'HeaderVue'
})
</script>

<style scoped lang="scss">
header {
  background: rgb(222, 225, 226);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}

h1 {
  display: flex;
}
</style>