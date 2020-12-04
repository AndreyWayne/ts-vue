<template>
  <div :class="[$style.widget]">
    <div :class="[$style.widgetHeader]">
      <div :class="[$style.widgetTitle]">
        Трансферы
      </div>
    </div>
    <div :class="[$style.widgetContent]">
      <div :class="[$style.transfer]">
        <div :class="[$style.head]">
          <div :class="[$style.headTitle]">
            Игрок
          </div>
          <div :class="[$style.headTitle]">
            Трансфер
          </div>
          <div :class="[$style.headTitle]">
            Дата
          </div>
        </div>
        <div :class="[$style.list]">
          <div :class="[$style.item]">
            <div :class="[$style.itemCell]">
              <div :class="[$style.itemPhoto]">
                <img src="~@/assets/images/player.jpg" alt="player">
              </div>
              <div :class="[$style.player]">
                <div :class="[$style.playerNickname]">
                  dimasick
                </div>
                <div :class="[$style.playerDiscipline]">
                  CS:GO
                </div>
              </div>
            </div>
            <div :class="[$style.itemCell]">
              <div :class="[$style.teams]">
                <div :class="[$style.teamsName]">
                  GMB
                </div>
                <div :class="[$style.teamsTo]">
                  »
                </div>
                <div :class="[$style.teamsName]">
                  X
                </div>
              </div>
            </div>
            <div :class="[$style.itemCell]">
              <div :class="[$style.date]">
                01.10
              </div>
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

import Button from '@/components/Button'

@Component({
  components: {
    Button
  }
})
export default class WidgetTransfer extends Vue {}
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

.transfer {
  font-size: 14px;
  margin-bottom: 10px;
}

.head {
  display: flex;
  margin-bottom: 5px;
}

.headTitle {
  color: color('gray', 'dark');
  font-weight: 500;
  line-height: 16px;

  width: 100%;

  &:nth-child(2) {
    padding-left: 25px;
    padding-right: 25px;
  }

  &:nth-child(3) {
    padding-right: 24px;
    width: fit-content;
  }
}

.item {
  align-items: center;
  display: flex;
  height: 48px;

  &:not(:last-child) {
    border-bottom: 1px solid color('licorice', 'light');
    margin-bottom: 5px;
  }
}

.itemCell {
  display: flex;
  width: 100%;

  &:first-child {
    padding-left: 10px;
  }

  &:nth-child(3) {
    padding-right: 24px;
    width: fit-content;
  }
}

.itemPhoto {
  margin-right: 5px;

  img {
    border-radius: 50%;
    width: 32px;
  }
}

.player {
  display: flex;
  flex-direction: column;
}

.playerNickname {
  font-size: 14px;
}

.playerDiscipline {
  opacity: 0.5;
}

.teams {
  align-items: center;
  display: flex;
  padding-left: 25px;
  padding-right: 25px;
}

.teamsName {
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
}

.teamsTo {
  color: var(--color-primary);
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  padding: 0 10px 0 12px;
}

.date {
  opacity: 0.5;
}
</style>
