<template>
  <div :class="[$style.widget]">
    <div :class="[$style.widgetHeader]">
      <div :class="[$style.widgetTitle]">
        Рейтинг HLTV
      </div>
    </div>
    <div :class="[$style.widgetContent]">
      <div :class="[$style.bookmaker]">
        <div :class="[$style.head]">
          <div :class="[$style.headTitle, $style.team]">
            Команда
          </div>
          <div :class="[$style.headTitle, $style.rating]">
            Рейтинг
          </div>
        </div>
        <div :class="[$style.list]">
          <div :class="[$style.item]">
            <div :class="[$style.col, $style.team]">
              <div :class="[$style.place]">
                1
              </div>
              <div :class="[$style.teamInfo]">
                <div :class="[$style.logo]">
                  <img src="~@/assets/images/team.png" alt="Virtus.Pro">
                </div>
                <div>Virtus.Pro</div>
              </div>
            </div>
            <div :class="[$style.col, $style.rating]">
              <div :class="[$style.points]">
                100
              </div>
            </div>
          </div>
          <div :class="[$style.item]">
            <div :class="[$style.col, $style.team]">
              <div :class="[$style.place]">
                2
              </div>
              <div :class="[$style.teamInfo]">
                <div :class="[$style.logo]">
                  <img src="~@/assets/images/team.png" alt="Virtus.Pro">
                </div>
                <div>Virtus.Pro</div>
              </div>
            </div>
            <div :class="[$style.col, $style.rating]">
              <div :class="[$style.points]">
                100
              </div>
            </div>
          </div>
          <div :class="[$style.item]">
            <div :class="[$style.col, $style.team]">
              <div :class="[$style.place]">
                3
              </div>
              <div :class="[$style.teamInfo]">
                <div :class="[$style.logo]">
                  <img src="~@/assets/images/team.png" alt="Virtus.Pro">
                </div>
                <div>Virtus.Pro</div>
              </div>
            </div>
            <div :class="[$style.col, $style.rating]">
              <div :class="[$style.points]">
                100
              </div>
            </div>
          </div>
          <div :class="[$style.item]">
            <div :class="[$style.col, $style.team]">
              <div :class="[$style.place]">
                4
              </div>
              <div :class="[$style.teamInfo]">
                <div :class="[$style.logo]">
                  <img src="~@/assets/images/team.png" alt="Virtus.Pro">
                </div>
                <div>Virtus.Pro</div>
              </div>
            </div>
            <div :class="[$style.col, $style.rating]">
              <div :class="[$style.points]">
                100
              </div>
            </div>
          </div>
          <div :class="[$style.item]">
            <div :class="[$style.col, $style.team]">
              <div :class="[$style.place]">
                5
              </div>
              <div :class="[$style.teamInfo]">
                <div :class="[$style.logo]">
                  <img src="~@/assets/images/team.png" alt="Virtus.Pro">
                </div>
                <div>Virtus.Pro</div>
              </div>
            </div>
            <div :class="[$style.col, $style.rating]">
              <div :class="[$style.points]">
                100
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button with-border>
        смотреть весь HLTV рейтинг
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
export default class WidgetHltv extends Vue {}
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
}

.team {
  width: 100%;
}

.rating {
  width: fit-content;
}

.item {
  align-items: center;
  display: flex;
  font-size: 14px;
  padding-bottom: 10px;
  padding-top: 10px;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-border);
    margin-bottom: 5px;
  }
}

.col {
  align-items: center;
  display: flex;
}

.place {
  font-size: 12px;
  line-height: 18px;
  margin-right: 10px;
  opacity: 0.5;
}

.teamInfo {
  align-items: center;
  display: flex;
}

.logo {
  height: 32px;
  margin-right: 5px;
  width: 32px;

  img {
    width: 100%;
  }
}

.points {
  opacity: 0.5;
}
</style>
