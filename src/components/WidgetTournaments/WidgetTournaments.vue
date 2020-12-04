<template>
  <div :class="[$style.widget]">
    <div :class="[$style.widgetHeader]">
      <div :class="[$style.widgetTitle]">
        Турниры
      </div>
    </div>
    <div :class="[$style.widgetContent]">
      <Tabs :tabs="currentTabs" />

      <div :class="[$style.list]">
        <Tournament />
        <Tournament />
        <Tournament />
        <Tournament />
        <Tournament />
      </div>

      <Button with-border>
        Смотреть все турниры
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Tabs from '@/components/Tabs'
import Tournament from '@/components/Tournament'
import Button from '@/components/Button'

@Component({
  components: {
    Tabs,
    Tournament,
    Button
  }
})
export default class WidgetTournaments extends Vue {
  get currentTabs (): Object {
    return [
      {
        position: 1,
        title: 'Прошедшие'
      },
      {
        position: 2,
        title: 'Текущие',
        count: 8
      },
      {
        position: 3,
        title: 'Будущие',
        count: 8
      }
    ]
  }
}
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

.widgetHeader {
  display: flex;
  justify-content: space-between;

  padding: 20px 15px 0;
}

.widgetTitle {
  font-size: 18px;
  font-weight: 500;

  letter-spacing: 0.5px;
  line-height: 26px;

  text-transform: uppercase;
}

.widgetContent {
  padding: 15px;
}

.list {
  margin-bottom: 10px;
}
</style>
