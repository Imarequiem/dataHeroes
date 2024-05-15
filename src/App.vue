<template>
  <div>
    <Header />
    <main>
      <suspense>
        <router-view />
      </suspense>
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from './components/widgets/Header.vue';
</script>

<style lang="scss"></style>