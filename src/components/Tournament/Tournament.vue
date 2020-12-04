<template>
  <nuxt-link to="" :class="[$style.tournament]">
    <div :class="[$style.discipline]">
      <svg-icon name="disciplines/dota" />
    </div>
    <div :class="[$style.info]">
      <div :class="[$style.name]">
        Intel Extreme Masters
      </div>
      <div :class="[$style.date]">
        <div :class="[$style.live]">
          LIVE
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Tournament extends Vue {}
</script>

<style lang="scss" module>
.tournament {
  align-items: flex-start;
  display: flex;
  padding-top: 9px;
  text-decoration: none;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-border);
    padding-bottom: 9px;
  }
}

.info {
  display: flex;
  flex-direction: column;
  margin-left: 5px;
}

.discipline {
  margin-top: 2px;

  svg {
    height: 15px;
    width: 15px;
  }
}

.name {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}

.date {
  font-size: 14px;
}

.live {
  color: var(--color-primary);
}
</style>
