<template>
  <div :class="[$style.container]">
    <div :class="[$style.main]">
      <div :class="[$style.header]">
        <div :class="[$style.arrow, $style.prev]">
          <svg-icon name="arrow" />
        </div>
        <div :class="[$style.title]">
          Матчи 4 января 2020
        </div>
        <div :class="[$style.arrow, $style.next]">
          <svg-icon name="arrow" />
        </div>
      </div>
      <div :class="[$style.head]">
        <div :class="[$style.headItem]">
          <Tabs :tabs="currentTabs" />
        </div>
        <div :class="[$style.headItem]">
          <div :class="[$style.filters]">
            <DisciplineFilter />
            <SettingsFilter />
          </div>
        </div>
        <div :class="[$style.headItem, $style.params]">
          <div>
            <select class="select">
              <option value="">
                Выберите турнир
              </option>
            </select>
            <select class="select">
              <option value="">
                Выберите команду
              </option>
            </select>
          </div>
        </div>
        <div :class="[$style.headItem]">
          <div v-if="!isNotice" :class="[$style.notice]">
            <div>Часовой пояс <span>MSK+3</span></div>
            <div :class="[$style.right]">
              <div :class="[$style.close]" @click="onClick">
                <svg-icon name="close" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="viewport.isTabletOrBelow" :class="[$style.matches]">
        <Match />
        <Match />
        <Match />
        <Match />
        <Match />
      </div>
      <div v-if="viewport.isTabletOrHigher" :class="[$style.matches]">
        <MatchHorizontal />
        <MatchHorizontal />
        <MatchHorizontal />
        <MatchHorizontal />
        <MatchHorizontal />
        <MatchHorizontal />
      </div>
    </div>
    <div v-if="viewport.isDesktopOrHigher" :class="[$style.aside]">
      <WidgetTournaments />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, mixins, Prop, Vue } from 'nuxt-property-decorator'
import { ViewportMixin } from '@/mixins'

import Tabs from '~/components/Tabs/'
import DisciplineFilter from '~/components/DisciplineFilter/'
import SettingsFilter from '~/components/SettingsFilter/'
import Match from '~/components/Match/'
import MatchHorizontal from '~/components/MatchHorizontal/'
import WidgetTournaments from '~/components/WidgetTournaments/'

@Component({
  components: {
    Tabs,
    DisciplineFilter,
    SettingsFilter,
    Match,
    MatchHorizontal,
    WidgetTournaments
  }
})
export default class matches extends mixins(Vue, ViewportMixin) {
  @Prop({ type: Boolean })
  isNotice!: boolean

  get currentTabs (): Object {
    return [
      {
        position: 1,
        title: 'Вчера'
      },
      {
        position: 2,
        title: 'Сегодня'
      },
      {
        position: 3,
        title: 'Завтра'
      }
    ]
  }

  onClick (): void {
    this.isNotice = true
  }

  get viewport () {
    return this.$modules.viewport
  }
}
</script>

<style lang="scss" module>
.container {
  @include container();
  justify-content: center;
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

  flex: 0 0 auto;
}

.header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  @include breakpoint('tablet') {
    justify-content: center;
  }
}

.title {
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;

  @include breakpoint('desktop') {
    font-size: 24px;
    line-height: 28px;
  }
}

.arrow {
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex: 0 0 auto;
  height: 24px;
  justify-content: center;
  transition: background-color $transition;
  width: 24px;
  will-change: background-color;

  @include hover() {
    background-color: var(--color-primary);

    svg {
      stroke: white;
    }
  }

  svg {
    height: 18px;
    stroke: var(--color-primary);
    transition: stroke $transition;
    width: 12px;
    will-change: stroke;
  }
}

.prev {
  @include breakpoint('tablet') {
    margin-right: 45px;
  }
}

.next {
  transform: rotate(180deg);

  @include breakpoint('tablet') {
    margin-left: 45px;
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
    justify-content: space-between;
  }

  &:not(:last-child) {
    margin-bottom: 15px;
  }
}

.filters {
  display: flex;
  justify-content: space-between;
  width: 100%;
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

.notice {
  align-items: center;
  background-color: var(--color-bg-popular);
  display: flex;

  font-size: 12px;

  height: 30px;
  justify-content: space-between;

  margin: 0 0 10px;
  padding: 0 15px;

  transition: background-color $transition-mode;
  will-change: background-color;

  span {
    text-decoration: underline;
  }
}

.right {
  border-left: 1px solid var(--color-gray-dark);
  margin-left: 10px;
  padding-left: 8px;
}

.close {
  cursor: pointer;
  height: 24px;

  svg {
    stroke: var(--color-gray-dark);
  }
}

.matches {
  background-color: var(--color-layer);
  border: 1px solid var(--color-border-transparent);
  margin: 0 -15px 14px;
  padding: 20px 15px;

  transition: background-color $transition-mode, border $transition-mode;
  will-change: background-color, border;

  @include breakpoint('tablet') {
    border-radius: 4px;
    margin: 0 0 20px;
  }
}
</style>
