<template>
  <div :class="[$style.filter]">
    <span :class="[$style.label]">
      Фильтры
    </span>
    <span :class="[$style.icon]">
      <svg-icon name="filter" />
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class SettingsFilter extends Vue {}
</script>

<style lang="scss" module>
.filter {
  align-items: center;
  color: var(--color-primary);
  display: flex;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-transform: uppercase;
}

.label {
  display: none;

  @include breakpoint('mobile', 'wide') {
    display: flex;
  }
}

.icon {
  height: 20px;
  width: 20px;

  @include breakpoint('mobile', 'wide') {
    height: 15px;
    margin-left: 6px;
    width: 15px;
  }

  svg {
    height: 20px;
    width: 20px;

    @include breakpoint('mobile', 'wide') {
      height: 15px;
      width: 15px;
    }
  }
}
</style>
