<template>
  <div :class="[$style.widget]">
    <div :class="[$style.header]">
      <div :class="[$style.title]">
        Матчи
      </div>
    </div>
    <div :class="[$style.content]">
      <div :class="[$style.tabs]">
        <Tabs :tabs="currentTabs" />
      </div>

      <div v-if="!isNotice" :class="[$style.notice]">
        <div>Часовой пояс <span>MSK+3</span></div>
        <div :class="[$style.right]">
          <div :class="[$style.close]" @click="onClick">
            <svg-icon name="close" />
          </div>
        </div>
      </div>

      <div>
        <Match v-for="match in matches" :key="match.id" :match="match" />
      </div>

      <Button to="matches" with-border>
        Все матчи
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

import Tabs from '@/components/Tabs'

import Match from '@/components/Match'
import Button from '@/components/Button'

@Component({
  components: {
    Tabs,
    Match,
    Button
  }
})
export default class WidgetMatch extends Vue {
  @Prop({ type: Boolean })
  isNotice!: boolean

  get currentTabs (): Object {
    return [
      {
        position: 1,
        title: 'Прошедшие'
      },
      {
        position: 2,
        title: 'Live'
      },
      {
        position: 3,
        title: 'Будущие'
      }
    ]
  }

  get matches (): Object {
    return [
      {
        id: 1,
        tournament: {
          name: 'Intel Extreme Masters',
          group: 'Группа В',
          url: 'tournaments'
        },
        date: 'Live',
        teamFirst: {
          name: 'Team Liquid',
          score: 1,
          url: 'team'
        },
        teamSecond: {
          name: 'Virtus.Pro',
          score: 1,
          url: 'team'
        },
        url: 'match'
      },
      {
        id: 2,
        tournament: {
          name: 'Intel Extreme Masters',
          group: 'Группа A',
          url: 'tournaments'
        },
        date: 'Live',
        teamFirst: {
          name: 'Na`Vi',
          score: 1,
          url: 'team'
        },
        teamSecond: {
          name: 'FaZe',
          score: 0,
          url: 'team'
        },
        url: 'match',
        bookmaker: {
          teamFirst: 1.23,
          teamSecond: 4.68
        }
      },
      {
        id: 3,
        tournament: {
          name: 'Intel Extreme Masters',
          url: 'tournaments'
        },
        date: 'Live',
        teamFirst: {
          name: 'Team Liquid',
          score: 0,
          url: 'team'
        },
        teamSecond: {
          name: 'Virtus.Pro',
          score: 1,
          url: 'team'
        },
        url: 'match'
      }
    ]
  }

  onClick (): void {
    this.isNotice = true
  }
}
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

.header {
  display: flex;
  justify-content: space-between;

  padding: 20px 15px 0;
}

.title {
  font-size: 18px;
  font-weight: 500;

  letter-spacing: 0.5px;
  line-height: 26px;

  text-transform: uppercase;
}

.content {
  padding: 15px;
}

.tabs {
  margin-bottom: 5px;
}

.notice {
  align-items: center;
  background-color: var(--color-bg-popular);
  display: flex;

  font-size: 12px;

  height: 30px;
  justify-content: space-between;

  margin: 0 -15px 10px;
  padding: 0 15px;

  transition: background-color $transition-mode;
  will-change: background-color;

  span {
    text-decoration: underline;
  }
}

.right {
  border-left: 1px solid var(--color-gray-dark);
  padding-left: 8px;
}

.close {
  cursor: pointer;
  height: 24px;

  svg {
    stroke: var(--color-gray-dark);
  }
}
</style>
