<template>
  <div :class="[$style.widget]">
    <div :class="[$style.widgetContent]">
      <div :class="[$style.header]">
        <div :class="[$style.image]">
          <img src="~@/assets/images/team.png" alt="Virtus.pro">
        </div>
        <h2 :class="[$style.name]">
          Virtus.pro по Dota 2
        </h2>
      </div>
      <div :class="[$style.info]">
        <div :class="[$style.group]">
          <div :class="[$style.label]">
            Сайт
          </div>
          <div :class="[$style.value]">
            <a href="" target="_blank" rel="nofollow">virtus.pro</a>
          </div>
        </div>
        <div :class="[$style.group]">
          <div :class="[$style.label]">
            Призовые
          </div>
          <div :class="[$style.value]">
            $ 9 000 147
          </div>
        </div>
      </div>
      <div :class="[$style.stats]">
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
            570
          </div>
          <div :class="[$style.percentItem]">
            35
          </div>
          <div :class="[$style.percentItem, $style.red]">
            501
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class WidgetTeam extends Vue {}
</script>

<style lang="scss" module>
.widget {
  background-color: var(--color-layer);
  border: 1px solid var(--color-border-transparent);
  border-radius: 4px;
  margin-bottom: 20px;

  transition: background-color $transition-mode, border $transition-mode;
  will-change: background-color, border;
}

.widgetContent {
  padding: 15px;
}

.header {
  align-items: center;
  display: flex;
  margin-bottom: 10px;
}

.image {
  flex: 0 0 auto;
  height: 80px;
  width: 80px;

  img {
    width: 100%;
  }
}

.name {
  line-height: 32px;
  margin-bottom: 0;
  margin-left: 20px;
  margin-top: 0;
}

.group {
  display: flex;
  flex-direction: column;

  &:nth-child(even) {
    margin-left: 30px;
  }
}

.label {
  opacity: 0.4;
}

.value {
  font-weight: 500;

  a {
    color: var(--color-primary);
    text-decoration: none;

    transition: color $transition;
    will-change: color;

    @include hover() {
      color: var(--color-primary-secondary);
    }
  }
}

.info {
  display: flex;
}

.stats {
  border-top: 1px solid var(--color-border);
  margin-top: 15px;
  padding-top: 20px;
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
