<template>
  <div class="cards-container">
    <filter-form :filter="filter" @toFilter="toFilter()" />

    <div class="cards-container__wrap">

      <template v-for="character in characters.results" :key="character.id">
        <character-card class="cards-container__card" :character="character" />
      </template>

    </div>

    <div v-if="characters.info" class="cards-container__pagination">
      <template v-for="(num, index) of characters.info.pages" :key="index">
        <pagination-btn :page="num" :url="route.path" @click="page = num" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "MainVue"
})

import { ref, watch } from 'vue';
import { useRoute } from 'vue-router'
import type { Ref } from 'vue';

import CharacterCard from '@/main/characters/character/ui/card/index.vue';
import PaginationBtn from '@/components/ui/PaginationBtn.vue';
import FilterForm from '@/components/FilterForm.vue';

import { CharactersService } from '@/main/characters/classes/characters.service';

import type { Characters } from '@/types/characters.interface';
import type { Filter } from '@/types/filter.interface';

const route = useRoute()

const filter: Ref<Filter> = ref({
  name: "",
  status: ""
});

const page: Ref<number | any> = ref(Number(route.query.page))

const characters: Ref<Characters> = ref(await CharactersService.get()
  .fromServer({
    page: page.value,
    name: filter.value.name,
    status: filter.value.status,
  }))

watch(page, async () => {
  characters.value = await CharactersService.get()
    .fromServer({
      page: page.value,
      name: filter.value.name,
      status: filter.value.status,
    })
})

async function toFilter() {
  characters.value = await CharactersService.get()
    .fromServer({
      page: page.value,
      name: filter.value.name,
      status: filter.value.status,
    })
}
</script>

<style scoped lang="scss">
.cards-container {
  padding: 50px 20px;
  display: flex;
  background: rgb(39, 43, 51);
  min-height: 100svh;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.cards-container__wrap {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.cards-container__pagination {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 70%;
  margin-top: 50px;
}
</style>