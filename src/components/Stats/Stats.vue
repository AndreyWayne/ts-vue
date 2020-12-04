<template>
  <div :class="[$style.stat]">
    <div :class="[$style.label]">
      Всего матчей: 3000
    </div>
    <div :class="[$style.progress]">
      <div :class="[$style.line, $style.green]" style="width: 58%;" />
      <div :class="[$style.line]" style="width: 12%;" />
      <div :class="[$style.line, $style.red]" style="width: 30%;" />
    </div>
    <div :class="[$style.percent]">
      <div :class="[$style.percentItem, $style.green]">
        570 (50%)
      </div>
      <div :class="[$style.percentItem]">
        35 (50%)
      </div>
      <div :class="[$style.percentItem, $style.red]">
        501 (50%)
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Stats extends Vue {}
</script>

<style lang="scss" module>
.stat {
  width: 100%;
}

.progress {
  border-radius: 10px;
  display: flex;
  margin-bottom: 4px;
  margin-top: 6px;
  overflow: hidden;
}

.line {
  background-color: var(--color-gray);
  height: 10px;
}

.line.green {
  background-color: var(--color-green);
}

.line.red {
  background-color: var(--color-red);
}

.percent {
  display: flex;
  justify-content: space-between;
}

.percentItem {
  font-size: 14px;
  line-height: 20px;
}

.percentItem.green {
  color: var(--color-green);
}

.percentItem.red {
  color: var(--color-red);
}
</style>
