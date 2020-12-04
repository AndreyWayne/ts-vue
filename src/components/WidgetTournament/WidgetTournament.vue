<template>
  <div :class="[$style.widget]">
    <div :class="[$style.widgetContent]">
      <div :class="[$style.header]">
        <div :class="[$style.discipline]">
          <svg-icon name="disciplines/cs" />
        </div>
        <div :class="[$style.title]">
          The International 2019
        </div>
      </div>
      <div :class="[$style.description]">
        Турнир по Dota 2 серии The International, проводится с 15.03.2020 по 22.03.2020. Сумма призовых: $34 330 000.
        Место проведения: Шанхай
      </div>

      <Button with-border>
        Перейти на страницу турнира
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Button from '~/components/Button'

@Component({
  components: {
    Button
  }
})
export default class WidgetTournament extends Vue {}
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
  margin-bottom: 20px;
}

.discipline {
  height: 24px;
  margin-right: 8px;
  width: 24px;

  svg {
    height: 24px;
    width: 24px;
  }
}

.title {
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
}

.description {
  line-height: 22px;
  margin-bottom: 15px;
}
</style>
