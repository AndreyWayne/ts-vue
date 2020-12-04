<template>
  <div :class="[$style.container]">
    <div :class="[$style.main]">
      <h1 :class="[$style.title]">
        Команды и игроки
      </h1>
      <div :class="[$style.head]">
        <div :class="[$style.headItem]">
          <div :class="[$style.tab]">
            <Tabs :tabs="currentTabs" :is-bold="true" />
          </div>
          <div v-if="viewport.isTabletOrHigher" :class="[$style.sort]">
            За всё время
          </div>
          <select v-if="viewport.isMobile" id="" name="">
            <option value="За всё время">
              Показывать: за всё время
            </option>
            <option value="За всё время">
              2020
            </option>
            <option value="За всё время">
              2019
            </option>
            <option value="За всё время">
              2018
            </option>
            <option value="За всё время">
              2017
            </option>
            <option value="За всё время">
              2016
            </option>
          </select>
        </div>
        <div :class="[$style.headItem]">
          <DisciplineFilter />
        </div>
        <div :class="[$style.headItem, $style.params]">
          <select id="country" name="">
            <option value="Все регионы">
              Все регионы
            </option>
            <option value="Tier 1">
              Tier 1
            </option>
            <option value="Tier 2">
              Tier 2
            </option>
            <option value="Tier 3">
              Tier 3
            </option>
          </select>
        </div>
      </div>
      <div :class="[$style.layer]">
        <ListTeam
          :teams="teamsData"
        />
      </div>
      <div :class="[$style.tools]">
        <div :class="[$style.pagination]">
          <div :class="[$style.paginationItem, $style.isActive]">
            1
          </div>
          <div :class="[$style.paginationItem]">
            2
          </div>
          <div :class="[$style.paginationItem]">
            3
          </div>
          <div :class="[$style.paginationItem]">
            4
          </div>
          <div :class="[$style.paginationItem]">
            5
          </div>
          <div :class="[$style.paginationItem]">
            6
          </div>
          <div :class="[$style.paginationMore]">
            ...
          </div>
          <div :class="[$style.paginationItem]">
            99
          </div>
        </div>
        <div v-if="viewport.isTabletOrHigher" :class="[$style.results]">
          Всего команд: 7222
        </div>
      </div>
      <div :class="[$style.layer]">
        <ListPlayer />
      </div>
      <div :class="[$style.tools]">
        <div :class="[$style.pagination]">
          <div :class="[$style.paginationItem, $style.isActive]">
            1
          </div>
          <div :class="[$style.paginationItem]">
            2
          </div>
          <div :class="[$style.paginationItem]">
            3
          </div>
          <div :class="[$style.paginationItem]">
            4
          </div>
          <div :class="[$style.paginationItem]">
            5
          </div>
          <div :class="[$style.paginationItem]">
            6
          </div>
          <div :class="[$style.paginationMore]">
            ...
          </div>
          <div :class="[$style.paginationItem]">
            99
          </div>
        </div>
        <div v-if="viewport.isTabletOrHigher" :class="[$style.results]">
          Всего игроков: 7222
        </div>
      </div>
      <div :class="[$style.layer]">
        <ListTransfer />
      </div>
      <div :class="[$style.tools]">
        <div :class="[$style.pagination]">
          <div :class="[$style.paginationItem, $style.isActive]">
            1
          </div>
          <div :class="[$style.paginationItem]">
            2
          </div>
          <div :class="[$style.paginationItem]">
            3
          </div>
          <div :class="[$style.paginationItem]">
            4
          </div>
          <div :class="[$style.paginationItem]">
            5
          </div>
          <div :class="[$style.paginationItem]">
            6
          </div>
          <div :class="[$style.paginationMore]">
            ...
          </div>
          <div :class="[$style.paginationItem]">
            99
          </div>
        </div>
      </div>
    </div>
    <div v-if="viewport.isDesktopOrHigher" :class="[$style.aside]">
      <WidgetDpc />
      <WidgetHltv />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, mixins, Vue } from 'nuxt-property-decorator'
import { ViewportMixin } from '@/mixins'
import { Context } from '@nuxt/types'
import { mapState } from 'vuex'

import Tabs from '@/components/Tabs'
import DisciplineFilter from '@/components/DisciplineFilter'
import WidgetDpc from '@/components/WidgetDpc'
import WidgetHltv from '@/components/WidgetHltv'
import ListTeam from '@/components/ListTeam'
import ListPlayer from '@/components/ListPlayer'
import ListTransfer from '@/components/ListTransfer'

@Component({
  components: {
    Tabs,
    DisciplineFilter,
    WidgetDpc,
    WidgetHltv,
    ListTeam,
    ListPlayer,
    ListTransfer
  }
})
export default class teamsAndPlayers extends mixins(Vue, ViewportMixin) {
  $modules: any

  async fetch ({ store }: Context) {
    await store.dispatch('teams/ACTION_TEAMS_DATA_ENTRY')
  }

  get teamsData(): any[] {
    return this.$store.state.teams.teamsData
  }

  get teamsTotalCount(): number {
    return this.$store.state.teams.teamsTotalCount
  }

  get currentTabs (): Object {
    return [
      {
        position: 1,
        title: 'Команды'
      },
      {
        position: 2,
        title: 'Игроки'
      },
      {
        position: 3,
        title: 'Трансферы'
      }
    ]
  }

  get viewport () {
    return this.$modules.viewport
  }
}
</script>

<style lang="scss" module>
.container {
  @include container();
  margin-top: 20px;

  @include breakpoint('desktop') {
    flex-wrap: nowrap;
  }
}

.main {
  @include main();
}

.aside {
  @include aside();
}

.title {
  font-size: 20px;
  line-height: 32px;
  text-align: center;

  @include breakpoint('tablet') {
    font-size: 24px;
    line-height: 28px;
  }

  @include breakpoint('desktop') {
    font-size: 36px;
    line-height: 42px;
  }
}

.head {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;

  @include breakpoint('desktop', 'wide') {
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
}

.headItem {
  display: flex;
  flex-direction: column;
  width: 100%;

  @include breakpoint('tablet', 'base') {
    flex-direction: row;
  }

  &:not(:last-child) {
    margin-bottom: 15px;
  }
}

.tab {
  flex: 1;
  margin-bottom: 20px;

  @include breakpoint('tablet') {
    margin-bottom: 0;
  }
}

.sort {
  align-items: center;
  display: flex;
  font-size: 13px;
  line-height: 18px;
  margin-left: 12px;

  &::after {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid var(--color-text);
    content: '';
    display: flex;
    margin-left: 10px;
    transition: border-top $transition-mode;
    width: 0;
    will-change: border-top;
  }
}

.params {
  select {
    margin-bottom: 15px;

    @include breakpoint('tablet') {
      margin-bottom: 0;
      margin-right: 18px;
      width: fit-content;
    }
  }
}

.layer {
  background-color: var(--color-layer);
  margin: 0 -15px;

  @include breakpoint('desktop') {
    margin: 0;
  }
}

.tools {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 30px;
  position: relative;
}

.results {
  color: var(--color-text-gray);
  font-weight: 500;
  position: absolute;
  right: 0;
  transition: color $transition;
  will-change: color;
}

.pagination {
  display: flex;
}

.paginationItem {
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 26px;
  justify-content: center;
  margin: 0 3px;
  transition: background-color $transition, color $transition;
  width: 26px;
  will-change: background-color, color;

  @include hover() {
    background-color: var(--color-primary);
    color: white;
  }
}

.paginationMore {
  align-items: center;
  border-radius: 50%;
  display: flex;
  height: 26px;
  justify-content: center;
  margin: 0 3px;
  width: 26px;
}

.isActive {
  background-color: var(--color-primary);
  color: white;
}
</style>
