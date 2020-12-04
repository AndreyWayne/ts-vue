<template>
  <article :class="[$style.wrapper]">
    <div :class="[$style.article]">
      <div :class="[$style.header]">
        <div :class="[$style.discipline]">
          <svg-icon name="disciplines/dota" />
        </div>
        <div>
          <h3 :class="[$style.title]">
            Warcraft Gold League 2020 Summer Season - Западная квалификация
          </h3>
        </div>
      </div>
      <nuxt-link to="" :class="[$style.image]">
        <img src="~/assets/images/tournament.jpg" alt="SECTOR: MOSTBET DOTA 2">
      </nuxt-link>
      <div :class="[$style.info]">
        <div :class="[$style.group]">
          <div :class="[$style.label]">
            Дата проведения
          </div>
          <div :class="[$style.value]">
            с 19.11.2019 по 24.12.2019
          </div>
        </div>
        <div :class="[$style.group]">
          <div :class="[$style.label]">
            Сумма призовых
          </div>
          <div :class="[$style.value]">
            $9 875
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class TournamentItem extends Vue {}
</script>

<style lang="scss" module>
.wrapper {
  padding: 10px;
  width: 100%;

  @include breakpoint('mobile', 'wide') {
    width: 50%;
  }

  @include breakpoint('desktop', 'wide') {
    width: 33.33%;
  }
}

.article {
  background-color: var(--color-layer);
  border-radius: 4px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  height: 100%;
  padding: 15px;
  transition: background-color $transition-mode;
  width: 100%;
  will-change: background-color;
}

.header {
  align-items: center;
  display: flex;
  margin-bottom: 12px;
}

.discipline {
  margin-right: 12px;

  svg {
    height: 35px;
    width: 35px;
  }
}

.title {
  font-size: 14px;
  font-weight: 500;
  height: 36px;
  line-height: 18px;
  margin: 0;
  overflow: hidden;
  position: relative;
}

.image {
  margin-top: 14px;

  img {
    width: 100%;
  }
}

.info {
  margin-top: 8px;
}

.group {
  &:not(:last-child) {
    margin-bottom: 10px;
  }
}

.label {
  font-size: 12px;
  line-height: 20px;
}

.value {
  font-size: 13px;
  font-weight: 500;
  line-height: 28px;
}
</style>
