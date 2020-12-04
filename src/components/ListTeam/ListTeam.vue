<template>
  <div>
    <table v-if="showListTeam">
      <thead>
        <tr>
          <td v-if="viewport.isTabletOrHigher">
            Место
          </td>
          <td>Команда</td>
          <td :class="[$style.center]">
            <div v-if="viewport.isTabletOrHigher">
              Дисциплина
            </div>
          </td>
          <td v-if="viewport.isTabletOrHigher" :class="[$style.center]">
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
            <div :class="[$style.team]">
              <div v-if="viewport.isMobile" :class="[$style.place]">
                1
              </div>
              <div :class="[$style.logo]">
                <img src="~@/assets/images/team.png" alt="Virtus.Pro">
              </div>
              <div>Virtus.Pro</div>
            </div>
          </td>
          <td :class="[$style.center]">
            <div :class="[$style.discipline]">
              <svg-icon name="disciplines/dota" />
            </div>
          </td>
          <td v-if="viewport.isTabletOrHigher" :class="[$style.center]">
            <Stats />
          </td>
          <td :class="[$style.center]">
            <div :class="[$style.found]">
              $32 503 051
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div
      v-else
      :class="[$style.notFound]"
    >
      Список команд пуст
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import Stats from '@/components/Stats'

@Component({
  components: {
    Stats
  }
})

export default class ListTeam extends Vue {
  @Prop({ required: true, default: [] })
  readonly teams!: any[]

  get showListTeam(): number {
    return this.teams.length
  }

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

.name {
  color: var(--color-text-gray);
  font-size: 14px;
  line-height: 20px;
}

.team {
  align-items: center;
  display: flex;
  font-size: 14px;
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

.found {
  font-size: 13px;
  line-height: 18px;
}

.notFound {
  padding: 15px 0;
  text-align: center;
}
</style>
