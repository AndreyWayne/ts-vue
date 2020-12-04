<template>
  <div :class="[$style.container]">
    <div :class="[$style.about]">
      <div v-if="viewport.isDesktopOrHigher" :class="[$style.logo]">
        <img src="~/assets/images/team.png" alt="Virtus.Pro">
      </div>
      <div :class="[$style.info]">
        <div :class="[$style.header]">
          <div v-if="viewport.isDesktopOrBellow" :class="[$style.logo]">
            <img src="~/assets/images/team.png" alt="Virtus.Pro">
          </div>
          <h1 :class="[$style.name]">
            Virtus.pro по CS:GO
          </h1>
        </div>
        <div :class="[$style.parameters]">
          <div :class="[$style.group]">
            <div :class="[$style.label]">
              Страна
            </div>
            <div :class="[$style.value]">
              Россия
            </div>
          </div>
          <div :class="[$style.group]">
            <div :class="[$style.label]">
              Основан
            </div>
            <div :class="[$style.value]">
              в 2003 году
            </div>
          </div>
          <div :class="[$style.group]">
            <div :class="[$style.label]">
              Призовые
            </div>
            <div :class="[$style.value]">
              $ 5 122 147
            </div>
          </div>
          <div :class="[$style.group]">
            <div :class="[$style.label]">
              HLTV
            </div>
            <div :class="[$style.value]">
              #20
            </div>
          </div>
        </div>
        <div :class="[$style.description]">
          <p>Профессиональная команда в CS:GO.</p>
          <p>Чемпион ESL Major Series One Katowice 2014.</p>
        </div>
        <div :class="[$style.stats]">
          <Stats />
        </div>
      </div>
      <div :class="[$style.right]">
        <div v-if="viewport.isDesktopOrHigher" :class="[$style.rightGroup]">
          <div :class="[$style.rightLabel]">
            Организация
          </div>
          <div :class="[$style.organization]">
            <div>
              <img src="~/assets/images/team.png" alt="Virtus.Pro">
            </div>
            <div :class="[$style.organizationName]">
              Virtus.pro
            </div>
          </div>
        </div>
        <div :class="[$style.rightGroup]">
          <div :class="[$style.rightLabel]">
            Команды по дисциплинам:
          </div>
          <div :class="[$style.disciplines]">
            <div :class="[$style.disciplinesItem]">
              <svg-icon name="disciplines/dota" />
            </div>
            <div :class="[$style.disciplinesItem]">
              <svg-icon name="disciplines/cs" />
            </div>
            <div :class="[$style.disciplinesItem]">
              <svg-icon name="disciplines/pubg" />
            </div>
            <div :class="[$style.disciplinesItem]">
              <svg-icon name="disciplines/lol" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="[$style.main]">
      <div>
        <div :class="[$style.tab]">
          <Tabs :tabs="currentTabs" :is-bold="true" />
        </div>
        <Lineup />
      </div>
      <div>
        <NearestMatch />
      </div>
      <div>
        <HistoryMatches />
      </div>
      <div>
        <Awards :awards="awards" />
      </div>
      <div>
        <CsStatsMaps />
      </div>
    </div>
    <div :class="[$style.aside]">
      <WidgetNews title="Новости команды" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Stats from '~/components/Stats/'
import Lineup from '~/components/Lineup/'
import NearestMatch from '~/components/NearestMatch/'
import HistoryMatches from '~/components/HistoryMatches/'
import Awards from '~/components/Awards/'
import CsStatsMaps from '~/components/CsStatsMaps/'
import WidgetNews from '~/components/WidgetNews/'
import Tabs from '~/components/Tabs/'

@Component({
  components: {
    Stats,
    Lineup,
    Tabs,
    NearestMatch,
    HistoryMatches,
    Awards,
    WidgetNews,
    CsStatsMaps
  }
})
export default class TeamPage extends Vue {
  get currentTabs (): Object {
    return [
      {
        position: 1,
        title: 'Текущий состав'
      },
      {
        position: 2,
        title: 'В этой команде играли'
      }
    ]
  }

  get awards (): Object {
    return [
      {
        id: 1,
        tournament: {
          discipline: 'dota',
          name: 'DreamHack Rotterdam 2019',
          url: '',
          place: 'Роттердам. Нидерланды',
          date: '20.10.2019'
        },
        position: 1,
        prizeAmount: '$25 000',
        prizePool: '$100 000'
      },
      {
        id: 2,
        tournament: {
          discipline: 'dota',
          name: 'DreamHack Rotterdam 2019',
          url: '',
          place: 'Роттердам. Нидерланды',
          date: '20.10.2019'
        },
        position: 2,
        prizeAmount: '$25 000',
        prizePool: '$100 000'
      },
      {
        id: 3,
        tournament: {
          discipline: 'dota',
          name: 'DreamHack Rotterdam 2019',
          url: '',
          place: 'Роттердам. Нидерланды',
          date: '20.10.2019'
        },
        position: 3,
        prizeAmount: '$25 000',
        prizePool: '$100 000'
      },
      {
        id: 4,
        tournament: {
          discipline: 'dota',
          name: 'DreamHack Rotterdam 2019',
          url: '',
          place: 'Роттердам. Нидерланды',
          date: '20.10.2019'
        },
        position: 4,
        prizeAmount: '$25 000',
        prizePool: '$100 000'
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
}

.about {
  align-items: flex-start;
  background-color: var(--color-layer);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin: 0 -15px 20px;
  padding: 10px;
  width: calc(100% + 30px);

  @include breakpoint('tablet') {
    margin: 0 0 20px;
    padding: 20px;
    width: 100%;
  }

  @include breakpoint('desktop') {
    flex-direction: row;
    margin: 0 10px 20px;
    padding: 20px;
    width: 100%;
  }
}

.left {
  display: flex;
  margin-bottom: 15px;

  @include breakpoint('tablet') {
    flex-direction: column;
    margin-bottom: 0;
  }
}

.logo {
  height: 80px;
  margin-right: 20px;
  width: 80px;

  @include breakpoint('tablet') {
    height: 70px;
    width: 70px;
  }

  @include breakpoint('desktop') {
    flex: 0 0 auto;
    margin-right: 0;
  }

  img {
    width: 100%;
  }
}

.info {
  width: 100%;

  @include breakpoint('desktop') {
    margin-left: 30px;
    max-width: 528px;
  }

  @include breakpoint('desktop', 'wide') {
    max-width: 640px;
  }
}

.name {
  font-size: 24px;
  line-height: 32px;
  margin: 8px 0 15px;

  @include breakpoint('tablet') {
    font-size: 36px;
    line-height: 42px;
    margin: 0;
  }

  @include breakpoint('desktop') {
    margin: 0 0 15px;
  }
}

.header {
  align-items: center;
  display: flex;

  @include breakpoint('tablet') {
    margin: 0 0 15px;
  }
}

.parameters {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @include breakpoint('tablet') {
    grid-template-columns: repeat(4, 1fr);
  }
}

.group {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-right: 40px;
}

.label {
  color: var(--color-text-gray);
}

.value {
  font-weight: 500;
}

.description {
  border-top: 1px solid var(--color-border);
  margin-top: 14px;
  padding-top: 14px;

  p {
    margin-top: 0;
  }
}

.stats {
  border-top: 1px solid var(--color-border);
  margin-top: 14px;
  padding-top: 14px;
}

.right {
  margin-top: 20px;

  @include breakpoint('desktop') {
    margin-left: 20px;
    margin-top: 0;
  }

  @include breakpoint('desktop', 'medium') {
    margin-left: 135px;
  }
}

.rightGroup {
  &:not(:last-child) {
    margin-bottom: 15px;
  }
}

.rightLabel {
  font-weight: 500;
  margin-bottom: 15px;

  @include breakpoint('desktop') {
    font-weight: normal;
  }
}

.organization {
  align-items: center;
  display: flex;

  img {
    height: 40px;
    width: 40px;
  }
}

.organizationName {
  font-size: 24px;
  font-weight: 500;
  line-height: 48px;
  margin-left: 10px;
}

.disciplines {
  display: flex;
}

.disciplinesItem {
  &:not(:last-child) {
    margin-right: 20px;

    @include breakpoint('tablet') {
      margin-right: 10px;
    }
  }

  svg {
    height: 40px;
    width: 40px;
  }
}

.tab {
  margin-bottom: 15px;
}

.main {
  width: 100%;

  @include breakpoint('desktop') {
    margin: 0 10px;
  }

  @include breakpoint('desktop', 'wide') {
    max-width: 970px;
  }
}

.aside {
  width: 100%;

  @include breakpoint('desktop') {
    margin: 0 10px;
  }

  @include breakpoint('desktop', 'wide') {
    width: 310px;
  }
}
</style>
