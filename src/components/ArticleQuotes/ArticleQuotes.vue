<template>
  <div :class="[$style.attach]">
    <div :class="[$style.header]">
      <div :class="[$style.photo]">
        <img src="~@/assets/images/player.jpg" alt="XBOCT">
      </div>
      <div :class="[$style.info]">
        <div :class="[$style.name]">
          XBOCT
        </div>
        <div :class="[$style.position]">
          Комментатор
        </div>
      </div>
    </div>
    <div :class="[$style.content]">
      <div :class="[$style.quot, $style.quotTop]">
        <svg-icon name="quot" />
      </div>
      <p>Шо творят малые а</p>
      <p>
        Когда нам прислали ключи на Dota 2, это была сырая игра. Аналог какого-то HoN или LoL. Вроде бы турнир на
        миллион долларов, надо готовиться, но все играли в Warcraft, и только Dendi тренировался в самой “Доте”.
      </p>
      <p>
        Почти все улучшения, кроме косметических, будут полезны в игре. Но они в любом случае не сделают вождение легким
        . И хотя все задания сводятся к движению из точки А в точку Б, заскучать вряд ли получится.
      </p>
      <div :class="[$style.quot, $style.quotBottom]">
        <svg-icon name="quot" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ArticleQuotes extends Vue {}
</script>

<style lang="scss" module>
.attach {
  display: flex;
  flex-direction: column;
  font-family: Roboto, serif;
  margin-bottom: 30px;
}

.header {
  align-items: center;
  display: flex;
  margin-bottom: 20px;

  @include breakpoint('tablet') {
    margin-bottom: 0;
  }
}

.photo {
  border-radius: 50%;
  height: 60px;
  overflow: hidden;
  width: 60px;

  @include breakpoint('tablet') {
    height: 90px;
    width: 90px;
  }
}

.info {
  margin-left: 10px;

  @include breakpoint('tablet') {
    margin-left: 20px;
  }
}

.name {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
}

.position {
  color: var(--color-gray-dark);
  font-size: 14px;
  line-height: 20px;
  margin-top: 6px;
}

.content {
  padding-bottom: 16px;
  padding-left: 32px;
  position: relative;

  @include breakpoint('tablet') {
    padding-bottom: 0;
    padding-left: 110px;
    padding-right: 110px;
  }

  p {
    display: inline;
    font-size: 18px;
    line-height: 25px;
    margin: 0 0 10px;
  }
}

.quot {
  position: absolute;
}

.quotTop {
  left: 0;
  top: 4px;

  @include breakpoint('tablet') {
    left: 66px;
  }
}

.quotBottom {
  display: inline-block;
  padding-bottom: 1px;
  padding-right: 14px;
  position: relative;
  transform: rotate(180deg);
}
</style>
