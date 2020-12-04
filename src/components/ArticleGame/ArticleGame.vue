<template>
  <div :class="[$style.attach]">
    <h2>Call of Duty: Warzone</h2>
    <div :class="[$style.game]">
      <div :class="[$style.image]">
        <img src="~@/assets/images/game.jpg" alt="Call of Duty: Warzone">
      </div>
      <div :class="[$style.layer]">
        <p><span>Дата выпуска:</span> 25 октября 2019</p>
        <p><span>Разработчик:</span> Infinity Ward</p>
        <p><span>Издатель:</span> Activision</p>
        <p><span>Платформы:</span> PC</p>
        <p><span>Жанр:</span> Шутеры от первого лица</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ArticleGame extends Vue {}
</script>

<style lang="scss" module>
.attach {
  display: flex;
  flex-direction: column;
  font-family: Roboto, serif;
  margin-bottom: 30px;
}

.game {
  display: flex;
  flex-direction: column;
  max-width: 310px;

  @include breakpoint('tablet') {
    flex-direction: row;
    max-width: 100%;
  }
}

.image {
  border-radius: 4px;
  flex: 0 0 auto;
  height: 145px;
  margin-bottom: 10px;
  overflow: hidden;
  width: fit-content;

  @include breakpoint('tablet') {
    height: 156px;
    margin-bottom: 0;
    margin-right: 20px;
  }
}

.layer {
  background-color: var(--color-layer);
  border-radius: 4px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  transition: background-color $transition-mode;
  width: 100%;
  will-change: background-color;

  p {
    font-size: 14px !important;
    line-height: 22px !important;
    margin: 0;
  }

  span {
    color: var(--color-text-gray);
  }
}
</style>
