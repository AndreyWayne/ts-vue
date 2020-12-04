<template>
  <div>
    <table>
      <thead>
        <tr>
          <td v-if="viewport.isTabletOrHigher">
            Место
          </td>
          <td>Имя</td>
          <td v-if="viewport.isTabletOrHigher" :class="[$style.center]">
            Страна
          </td>
          <td :class="[$style.center]">
            <div v-if="viewport.isTabletOrHigher">
              Дисциплина
            </div>
          </td>
          <td v-if="viewport.isTabletOrHigher" :class="[$style.center]">
            Команда
          </td>
          <td v-if="viewport.isDesktopWide" :class="[$style.center]">
            Победы / Поражения
          </td>
          <td :class="[$style.center]">
            Призовые
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-if="viewport.isTabletOrHigher">
            <div :class="[$style.place]">
              1
            </div>
          </td>
          <td>
            <div :class="[$style.player]">
              <div :class="[$style.photo]">
                <img src="~/assets/images/player.jpg" alt="n0tail">
              </div>
              <div>
                <div :class="[$style.nickname]">
                  n0tail
                </div>
                <div :class="[$style.name]">
                  Йохан Сундштайн
                </div>
              </div>
            </div>
          </td>
          <td v-if="viewport.isTabletOrHigher" :class="[$style.center]">
            <div :class="[$style.country]">
              <svg-icon name="flags/ru" />
            </div>
          </td>
          <td :class="[$style.center]">
            <div :class="[$style.discipline]">
              <svg-icon name="disciplines/dota" />
            </div>
          </td>
          <td v-if="viewport.isTabletOrHigher" :class="[$style.center]">
            <div :class="[$style.team]">
              <div :class="[$style.logo]">
                <img src="~@/assets/images/team.png" alt="Virtus.Pro">
              </div>
              <div>Virtus.Pro</div>
            </div>
          </td>
          <td v-if="viewport.isDesktopWide" :class="[$style.center]">
            <Stats />
          </td>
          <td :class="[$style.center]">
            <div :class="[$style.found]">
              $3 503 051
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Stats from '@/components/Stats'

@Component({
  components: {
    Stats
  }
})
export default class ListPlayer extends Vue {
  get viewport () {
    return this.$modules.viewport
  }
}
</script>

<style lang="scss" module>
thead {
  color: var(--color-text-light);
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;

  td {
    padding: 10px 0;
  }
}

tbody {
  td {
    padding: 12px 0;
  }
}

tr {
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-border);
  }
}

td {
  &:first-child {
    padding-left: 15px;
  }
}

.center {
  text-align: center;
}

.place {
  color: var(--color-text-light);
  font-size: 13px;
  line-height: 18px;
  margin-right: 10px;

  @include breakpoint('tablet') {
    margin-right: 0;
  }
}

.player {
  display: flex;
}

.photo {
  border-radius: 50%;
  flex: 0 0 auto;
  height: 40px;
  margin-right: 10px;
  overflow: hidden;
  width: 40px;
}

.nickname {
  font-size: 14px;
  line-height: 20px;
}

.name {
  color: var(--color-text-gray);
  font-size: 14px;
  line-height: 20px;
}

.team {
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: center;
}

.logo {
  height: 32px;
  margin-right: 6px;
  width: 32px;

  @include breakpoint('tablet') {
    height: 30px;
    width: 30px;
  }
}

img {
  width: 100%;
}

.country {
  svg {
    border-radius: 3px;
    height: 20px;
    width: 28px;
  }
}

.discipline {
  height: 15px;

  @include breakpoint('tablet') {
    height: 20px;
  }

  svg {
    height: 15px;
    width: 15px;

    @include breakpoint('tablet') {
      height: 20px;
      width: 20px;
    }
  }
}

.found {
  font-size: 13px;
  line-height: 18px;
}
</style>
