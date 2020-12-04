<template>
  <div :class="[$style.widget]">
    <div :class="[$style.widgetHeader]">
      <div :class="[$style.widgetTitle]">
        Рецензии на игры
      </div>
    </div>
    <div :class="[$style.widgetContent]">
      <div>
        <div :class="[$style.item]">
          <div :class="[$style.image]">
            <img src="~/assets/images/player.jpg" alt="Call of Duty: Modern Warfare - Operator Edition (2019) PC">
          </div>
          <div :class="[$style.info]">
            <nuxt-link to="" :class="[$style.title]">
              Call of Duty: Modern Warfare - Operator Edition (2019) PC
            </nuxt-link>
            <div :class="[$style.rating]">
              Оценка: Отлично (8.2/10)
            </div>
          </div>
        </div>
      </div>

      <Button with-border>
        Смотреть все
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
export default class WidgetReview extends Vue {}
</script>

<style lang="scss" module>
.widget {
  background-color: var(--color-layer);
  border: 1px solid var(--color-border-transparent);
  border-radius: 4px;

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

.item {
  display: flex;
  margin-bottom: 14px;
}

.image {
  margin-right: 10px;

  img {
    border-radius: 4px;
    height: 91px;
    width: 91px;
  }
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title {
  color: var(--color-text);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  margin-bottom: 8px;
  text-decoration: none;

  transition: color $transition;
  will-change: color;

  @include hover() {
    color: var(--color-primary-secondary);
  }
}

.rating {
  color: var(--color-primary);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}
</style>
