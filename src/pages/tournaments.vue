<template>
  <div :class="[$style.container]">
    <div :class="[$style.main]">
      <h1 :class="[$style.title]">
        Турниры
      </h1>
      <div :class="[$style.head]">
        <div :class="[$style.headItem]">
          <div :class="[$style.tab]">
            <Tabs :tabs="currentTabs" />
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
          <select id="tier" name="">
            <option value="Выберите тир">
              Выберите тир
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
          <select id="team" name="">
            <option value="Выберите команду">
              Выберите команду
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
      <div :class="[$style.list]">
        <div :class="[$style.tier]">
          <div :class="[$style.tierHeader]">
            <div :class="[$style.tierTitle]">
              Тир 1 турниры
            </div>
          </div>
          <div :class="[$style.tierList]">
            <TournamentItem />
            <TournamentItem />
            <TournamentItem />
          </div>
        </div>
        <div :class="[$style.tier]">
          <div :class="[$style.tierHeader]">
            <div :class="[$style.tierTitle]">
              Тир 2 турниры
            </div>
          </div>
          <div :class="[$style.tierList]">
            <TournamentItem />
            <TournamentItem />
            <TournamentItem />
          </div>
          <div :class="[$style.tierFooter]">
            <Button with-border>
              Показать еще
            </Button>
          </div>
        </div>
        <div :class="[$style.tier]">
          <div :class="[$style.tierHeader]">
            <div :class="[$style.tierTitle]">
              Тир 3 турниры
            </div>
          </div>
          <div :class="[$style.tierList]">
            <TournamentItem />
            <TournamentItem />
            <TournamentItem />
          </div>
          <div :class="[$style.tierFooter]">
            <Button with-border>
              Показать еще
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="viewport.isDesktopOrHigher" :class="[$style.aside]">
      <WidgetMatch />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Tabs from '@/components/Tabs'
import DisciplineFilter from '@/components/DisciplineFilter'
import TournamentItem from '@/components/TournamentItem'
import Button from '@/components/Button'
import WidgetMatch from '@/components/WidgetMatch'

@Component({
  components: {
    Tabs,
    DisciplineFilter,
    TournamentItem,
    Button,
    WidgetMatch
  }
})
export default class tournaments extends Vue {
  get currentTabs (): Object {
    return [
      {
        position: 1,
        title: 'Прошедшие'
      },
      {
        position: 2,
        title: 'Текущие',
        count: 8
      },
      {
        position: 3,
        title: 'Будущие',
        count: 8
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

.list {
  display: flex;
  flex-wrap: wrap;
}

.tier {
  margin-bottom: 30px;
}

.tierHeader {
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 20px;
}

.tierTitle {
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
  margin-bottom: 5px;
}

.tierList {
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
}

.tierFooter {
  margin-top: 20px;
}
</style>
