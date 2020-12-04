<template>
  <div :class="[$style.widget]">
    <div :class="[$style.widgetHeader]">
      <div :class="[$style.widgetTitle]">
        Топ авторов за месяц
      </div>
      <div :class="[$style.tooltip]">
        <svg-icon name="question" />
      </div>
    </div>
    <div :class="[$style.widgetContent]">
      <div :class="[$style.header]">
        <div :class="[$style.cell]">
          Автор
        </div>
        <div :class="[$style.cell]">
          Рейтинг
        </div>
      </div>
      <div :class="[$style.list]">
        <div :class="[$style.item]">
          <div :class="[$style.cell]">
            <div :class="[$style.avatar]">
              <img src="~/assets/images/player.jpg" alt="Мой никнэйм очень длинный чтобы вместиться.">
            </div>
            <div :class="[$style.user]">
              <div :class="[$style.nickname]">
                Мой никнэйм очень длинный чтобы вместиться.
              </div>
              <div :class="[$style.rank]">
                <div>Знающий</div>
                <svg-icon name="star" />
              </div>
            </div>
          </div>
          <div :class="[$style.cell]">
            <div :class="[$style.rating, $style.ratingHigh]">
              <svg-icon name="rating" />
              <div>1357</div>
            </div>
          </div>
        </div>
        <div :class="[$style.item]">
          <div :class="[$style.cell]">
            <div :class="[$style.avatar]">
              <img src="~/assets/images/player.jpg" alt="Мой никнэйм очень длинный чтобы вместиться.">
            </div>
            <div :class="[$style.user]">
              <div :class="[$style.nickname]">
                Мой никнэйм
              </div>
              <div :class="[$style.rank]">
                <div>Знающий</div>
                <svg-icon name="star" />
              </div>
            </div>
          </div>
          <div :class="[$style.cell]">
            <div :class="[$style.rating, $style.ratingHigh]">
              <svg-icon name="rating" />
              <div>1357</div>
            </div>
          </div>
        </div>
      </div>
      <TheButton title="Смотреть все" border />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import TheButton from '~/components/TheButton'

@Component({
  components: {
    TheButton
  }
})
export default class WidgetAuthors extends Vue {}
</script>

<style lang="scss" module>
.widget {
  background-color: var(--color-layer);
  border-radius: 4px;

  transition: background-color $transition-mode, border $transition;
  will-change: background-color, border;
}

.widgetHeader {
  align-items: center;
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

.tooltip {
  cursor: pointer;
  height: 20px;
  width: 20px;

  @include hover() {
    circle {
      fill: color('licorice', 'light');
    }

    path {
      fill: var(--color-layer);
    }
  }

  svg {
    height: 20px;
    width: 20px;
  }

  circle {
    fill: transparent;
    stroke: color('licorice', 'light');

    transition: fill $transition;
    will-change: fill;
  }

  path {
    fill: color('licorice', 'light');

    transition: fill $transition;
    will-change: fill;
  }
}

.widgetContent {
  padding: 15px;
}

.header {
  color: color('gray', 'dark');
  display: flex;
  font-size: 14px;
  font-weight: 500;
  justify-content: space-between;
  line-height: 16px;
  margin-bottom: 4px;
  padding: 0 10px;
}

.list {
  margin-bottom: 10px;
}

.item {
  display: flex;
  justify-content: space-between;
  min-height: 57px;
  padding: 0 10px;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-border);
  }
}

.cell {
  align-items: center;
  display: flex;
}

.avatar {
  border-radius: 50%;
  flex: 0 0 auto;
  height: 32px;
  margin-right: 10px;
  overflow: hidden;
  width: 32px;

  img {
    width: 100%;
  }
}

.user {
  display: flex;
  flex-direction: column;
}

.nickname {
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  max-width: 152px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.rank {
  align-items: center;
  color: var(--color-text-gray);
  display: flex;
  font-size: 12px;
  line-height: 16px;

  transition: color $transition-mode;
  will-change: color;

  svg {
    fill: var(--color-primary);
    height: 12px;
    margin-left: 4px;
    width: 12px;
  }
}

.rating {
  align-items: center;
  color: var(--color-text-gray);
  display: flex;

  font-size: 12px;
  line-height: 18px;

  transition: color $transition-mode;
  will-change: color;

  svg {
    fill: color('gray', 'dark');
    margin-right: 4px;

    transition: fill $transition;
    will-change: fill;
  }
}

.ratingHigh {
  color: var(--color-green);

  svg {
    fill: var(--color-green);
  }
}
</style>
