<template>
  <div :class="[$style.widget]">
    <div :class="[$style.widgetContent]">
      <div :class="[$style.player]">
        <div :class="[$style.photo]">
          <img src="~@/assets/images/player.jpg" alt="nickname">
        </div>
        <div :class="[$style.info]">
          <div :class="[$style.discipline]">
            <svg-icon name="disciplines/cs" />
          </div>
          <h2 :class="[$style.nickname]">
            MATUMBAMAN
          </h2>
        </div>
        <div>
          <div :class="[$style.group]">
            <div :class="[$style.label]">
              Имя
            </div>
            <div :class="[$style.value]">
              Лассе Урпалайнен
            </div>
          </div>
          <div>
            <div :class="[$style.label]">
              Игрок команды
            </div>
            <div :class="[$style.value]">
              Team Secret
            </div>
          </div>
        </div>
        <div :class="[$style.stats]">
          <div :class="[$style.label]">
            Статистика игрока
          </div>
          <div :class="[$style.counts]">
            <div :class="[$style.countsItem, $style.green]">
              337 побед
            </div>
            <div :class="[$style.countsItem]">
              66 ничьих
            </div>
            <div :class="[$style.countsItem, $style.red]">
              179 поражений
            </div>
          </div>
          <div :class="[$style.progress]">
            <div :class="[$style.line, $style.green]" style="width: 58%;" />
            <div :class="[$style.line]" style="width: 12%;" />
            <div :class="[$style.line, $style.red]" style="width: 30%;" />
          </div>
          <div :class="[$style.percent]">
            <div :class="[$style.percentItem, $style.green]">
              57.90%
            </div>
            <div :class="[$style.percentItem]">
              11.37%
            </div>
            <div :class="[$style.percentItem, $style.red]">
              30.76%
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class WidgetPlayer extends Vue {}
</script>

<style lang="scss" module>
.widget {
  background-color: var(--color-layer);
  border: 1px solid var(--color-primary);
  border-radius: 4px;
  margin-bottom: 20px;

  transition: background-color $transition-mode, border $transition;
  will-change: background-color, border;
}

.widgetContent {
  padding: 15px;
}

.photo {
  display: flex;
  margin-bottom: 26px;

  img {
    border-radius: 4px;
    width: 146px;
  }
}

.discipline {
  margin-right: 7px;
}

.nickname {
  margin: 0;
}

.info {
  display: flex;
  margin-bottom: 20px;
}

.group {
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
}

.label {
  opacity: 0.4;
}

.value {
  font-weight: 500;
}

.stats {
  border-top: 1px solid var(--color-border);
  margin-top: 20px;
  padding-top: 20px;
}

.counts {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}

.countsItem {
  font-size: 14px;
  line-height: 20px;
}

.countsItem.green {
  color: var(--color-green);
}

.countsItem.red {
  color: var(--color-red);
}

.progress {
  border-radius: 10px;
  display: flex;
  margin-bottom: 4px;
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
