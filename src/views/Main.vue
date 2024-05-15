<template>
  <div class="cards-container">
    <filter-form :filter="filter" @toFilter="toFilter()" />

    <div class="cards-container__wrap">

      <template v-for="character in characters.results" :key="character.id">
        <character-card class="cards-container__card" :character="character" />
      </template>

    </div>

    <pagination :pages="characters.info.pages" @toPage="(num: number) => page = num" />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "MainVue"
})

import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import type { Ref } from 'vue';

import Pagination from '@/components/pagination/Pagination.vue';
import FilterForm from '@/components/form/FilterForm.vue';

import CharacterCard from '@/main/characters/character/ui/card/index.vue';

import { CharactersService } from '@/main/characters/classes/characters.service';

import type { Characters } from '@/types/characters.interface';
import type { Filter } from '@/types/filter.interface';

const router = useRouter()
const route = useRoute()

if (!route.query.page) {
  router.push({ path: '/', query: { page: '1' } })
}

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
  page.value = 1
  characters.value = await CharactersService.get()
    .fromServer({
      page: page.value,
      name: filter.value.name,
      status: filter.value.status,
    })
  router.push({
    path: route.path,
    query: {
      page: page.value,
      name: filter.value.name,
      status: filter.value.status,
    }
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

@media (min-width: 1950px) {
  .cards-container__wrap {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1250px) {
  .cards-container__wrap {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (max-width: 650px) {
  .cards-container__card {
    flex-direction: column;
  }
}
</style>