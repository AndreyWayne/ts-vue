<template>
  <div :class="[$style.widget]">
    <div :class="[$style.widgetHeader]">
      <div :class="[$style.widgetTitle]">
        Рейтинг букмекеров
      </div>
    </div>
    <div :class="[$style.widgetContent]">
      <div :class="[$style.bookmaker]">
        <div :class="[$style.head]">
          <div :class="[$style.headTitle]">
            Компания
          </div>
          <div :class="[$style.headTitle]">
            Оценка
          </div>
          <div :class="[$style.headTitle]">
            Бонус
          </div>
        </div>
        <div :class="[$style.list]">
          <nuxt-link to="" :class="[$style.item]">
            <div :class="[$style.itemCell]">
              <div :class="[$style.itemLogo]">
                <img src="~@/assets/images/bookmaker.png" alt="bookmaker">
              </div>
            </div>
            <div :class="[$style.itemCell]">
              <svg :class="[$style.itemRating]">
                <svg-icon name="stars" />
              </svg>
            </div>
            <div :class="[$style.itemCell]">
              <div :class="[$style.itemBonus]">
                3 000 ₽
              </div>
            </div>
          </nuxt-link>
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

import Button from '@/components/Button'

@Component({
  components: {
    Button
  }
})
export default class WidgetBookmaker extends Vue {}
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

.bookmaker {
  margin-bottom: 10px;
}

.head {
  display: flex;
  font-size: 14px;
  margin-bottom: 5px;
}

.headTitle {
  color: color('gray', 'dark');
  font-weight: 500;
  line-height: 16px;

  width: 100%;

  &:nth-child(2) {
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
  }
}

.item {
  align-items: center;
  color: var(--color-text);
  display: flex;
  height: 48px;
  text-decoration: none;

  transition: color $transition-mode;
  will-change: color;

  &:not(:last-child) {
    border-bottom: 1px solid color('licorice', 'light');
    margin-bottom: 5px;
  }
}

.itemCell {
  display: flex;
  width: 100%;

  &:nth-child(2) {
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;
  }
}

.itemLogo {
  padding-left: 10px;

  img {
    max-width: 100%;
    width: 80px;
  }
}

.itemRating {
  height: 12px;
  width: 76px;
}

.itemBonus {
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
}
</style>
