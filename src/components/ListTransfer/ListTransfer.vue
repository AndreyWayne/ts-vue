<template>
  <div>
    <!--<div>
      <div :class="[$style.thead]">
        <div v-if="viewport.isTabletOrHigher" :class="[$style.td, $style.tdPlayer]">
          Игрок
        </div>
        <div :class="[$style.td, $style.center]">
          <div v-if="viewport.isDesktopOrHigher">
            Дисциплина
          </div>
        </div>
        <div :class="[$style.td, $style.center]">
          Ушёл из
        </div>
        <div :class="[$style.td, $style.center]">
          Пришёл в
        </div>
        <div :class="[$style.td, $style.center]">
          Дата
        </div>
      </div>
      <div :class="[$style.tbody]">
        <div :class="[$style.tr]">
          <div :class="[$style.td, $style.tdPlayer]">
            <div :class="[$style.player]">
              <div :class="[$style.photo]">
                <img src="~/assets/images/player.jpg" alt="n0tail" />
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
          </div>
          <div :class="[$style.td, $style.center]">
            <div :class="[$style.discipline]">
              <svg-icon name="disciplines/dota" />
            </div>
          </div>
          <div :class="[$style.td, $style.center]">
            <div :class="[$style.team]">
              <div :class="[$style.logo]">
                <img src="~@/assets/images/team.png" alt="Virtus.Pro" />
              </div>
              <div>Virtus.Pro</div>
            </div>
          </div>
          <div :class="[$style.td, $style.center]">
            <div :class="[$style.team]">
              <div :class="[$style.logo]">
                <img src="~@/assets/images/team.png" alt="Virtus.Pro" />
              </div>
              <div>Virtus.Pro</div>
            </div>
          </div>
          <div :class="[$style.td, $style.center]">
            <nuxt-link to="" :class="[$style.link]">
              20.07.2020
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>-->
    <table>
      <thead>
        <tr>
          <td>Игрок</td>
          <td v-if="viewport.isTabletOrHigher" :class="[$style.center]">
            Дисциплина
          </td>
          <td v-if="viewport.isDesktopWideOrHigher" :class="[$style.center]">
            Ушёл из
          </td>
          <td v-if="viewport.isDesktopWideOrHigher" :class="[$style.center]" />
          <td v-if="viewport.isDesktopWideOrHigher" :class="[$style.center]">
            Пришёл в
          </td>
          <td v-if="viewport.isMobileOrDesktop" :class="[$style.center]">
            Трансфер
          </td>
          <td :class="[$style.center]">
            Дата
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
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
            <div :class="[$style.discipline]">
              <svg-icon name="disciplines/dota" />
            </div>
          </td>
          <td v-if="viewport.isDesktopWideOrHigher" :class="[$style.center]">
            <div :class="[$style.team]">
              <div :class="[$style.logo]">
                <img src="~@/assets/images/team.png" alt="Virtus.Pro">
              </div>
              <div>Virtus.Pro</div>
            </div>
          </td>
          <td v-if="viewport.isDesktopWideOrHigher">
            »
          </td>
          <td v-if="viewport.isDesktopWideOrHigher" :class="[$style.center]">
            <div :class="[$style.team]">
              <div :class="[$style.logo]">
                <img src="~@/assets/images/team.png" alt="Virtus.Pro">
              </div>
              <div>Virtus.Pro</div>
            </div>
          </td>
          <td v-if="viewport.isMobileOrDesktop">
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
          </td>
          <td :class="[$style.center]">
            <nuxt-link v-if="viewport.isTabletOrHigher" to="" :class="[$style.link]">
              20.07.2020
            </nuxt-link>
            <nuxt-link v-if="viewport.isMobile" to="" :class="[$style.link]">
              20.07
            </nuxt-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ListTransfer extends Vue {
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

.center {
  text-align: center;
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

.link {
  color: var(--color-primary);
  font-size: 13px;
  line-height: 18px;
}

.teams {
  align-items: center;
  display: flex;
  justify-content: center;
  padding-left: 15px;
  padding-right: 15px;
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
</style>
