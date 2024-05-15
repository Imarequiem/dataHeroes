<template>
  <div class="card">
    <section class="img">
      <img :src="character.image" :alt="`Картинка с ${character.image}`">
    </section>

    <section class="info">
      <div class="section">
        <h1 class="section__text h1">{{ character.name }}</h1>

        <span class="section__status">
          <span class="section__status-span" :class="{ alive: character.status === 'Alive' }" />
          <p class="section__text p">
            {{ character.status }} - {{ character.species }}
          </p>
        </span>
      </div>

      <div class="section">
        <span class="section__span">
          Last known location:
        </span>
        <p class="section__text p">
          {{ character.location.name }}
        </p>
      </div>

      <div class="section">
        <span class="section__span">First seen in:</span>
        <p class="section__text p">{{ character.origin.name }}</p>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "CharacterCard"
})
import type { Character } from '@/types/characters.interface';

interface Props {
  character: Character,
}

const props = defineProps<Props>()
const { character } = props
</script>

<style scoped lang="scss">
.card {
  display: flex;
  background: rgb(60, 62, 68);
  height: 220px;
  width: 600px;
  flex-direction: row;
  align-items: stretch;
  border-radius: 20px;

  .img>img {
    width: 229.2px;
    height: 220px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 10px;
    width: 100%;
    height: 100%;
    text-transform: capitalize;
  }

  &:hover {
    box-shadow: 0px 0px 18px 12px rgba(0, 0, 0, 0.45);
    -webkit-box-shadow: 0px 0px 18px 12px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 0px 0px 18px 12px rgba(0, 0, 0, 0.45);
  }
}

.h1 {
  font-size: 1.5rem;
  font-weight: bold;
}

.section__text {
  color: #f5f5f5;
}

.section__status {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.section__span {
  color: rgb(158, 158, 158);
}

.section__status-span {
  display: block;
  height: 0.5rem;
  width: 0.5rem;
  background: rgb(214, 61, 46);
  margin-right: 0.375rem;
  border-radius: 50%;
}

.alive {
  background: #55cc44;
}

@media (max-width: 650px) {
  .card {
    height: initial;

    .info {
      margin-bottom: 10px;
    }
  }

  .card>.img>img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
    border-radius: 20px;
  }
}
</style>