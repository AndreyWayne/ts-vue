<template>
  <div>
    <div :class="[$style.header]">
      <div :class="[$style.title]">
        Статистика игрока
      </div>
    </div>
    <div :class="[$style.layer]">
      <div :class="[$style.block]">
        <table>
          <thead>
            <tr>
              <td>Кол-во сыгранных карт</td>
              <td>K/D</td>
              <td>ADR</td>
              <td>KPR</td>
              <td>Всего смертей</td>
              <td>Всего убийств</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12</td>
              <td>000</td>
              <td>85.5</td>
              <td>0.5</td>
              <td>000</td>
              <td>000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div :class="[$style.footer]">
        <Button with-border>
          Показать еще
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, mixins, Vue } from 'nuxt-property-decorator'

import Button from '~/components/Button/'

@Component({
  components: {
    Button
  }
})
export default class PlayerStatsCs extends mixins(Vue) {}
</script>

<style lang="scss" module>
.block {
  overflow: auto;
}

.layer {
  background-color: var(--color-layer);
  margin: 0 -15px 14px;

  transition: background-color $transition-mode;
  will-change: background-color;

  @include breakpoint('tablet') {
    border-radius: 4px;
    margin: 0 0 20px;
  }
}

.header {
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 10px;

  @include breakpoint('tablet') {
    margin-bottom: 20px;
  }
}

.title {
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
}

td {
  white-space: nowrap;
}

.footer {
  padding: 10px 25px;
}
</style>
