<template>
  <div :class="[$style.container]">
    <div :class="[$style.about]">
      <div :class="[$style.left]">
        <div :class="[$style.photo]">
          <img src="~/assets/images/player.jpg" alt="N0tail">
        </div>
        <div :class="[$style.social]">
          <a href="" target="_blank" :class="[$style.socialItem]">
            <svg-icon name="socials/tw" />
          </a>
          <a href="" target="_blank" :class="[$style.socialItem]">
            <svg-icon name="socials/vk" />
          </a>
          <a href="" target="_blank" :class="[$style.socialItem]">
            <svg-icon name="socials/fb" />
          </a>
          <a href="" target="_blank" :class="[$style.socialItem]">
            <svg-icon name="socials/ig" />
          </a>
        </div>
      </div>
      <div :class="[$style.info]">
        <div :class="[$style.profile]">
          <div :class="[$style.discipline]">
            <svg-icon name="disciplines/dota" />
          </div>
          <h1 :class="[$style.title]">
            N0tail
          </h1>
        </div>
        <div :class="[$style.parameters]">
          <div :class="[$style.group]">
            <div :class="[$style.label]">
              Имя
            </div>
            <div :class="[$style.value]">
              Йохан Сундштейн
            </div>
          </div>
          <div :class="[$style.group]">
            <div :class="[$style.label]">
              Возраст
            </div>
            <div :class="[$style.value]">
              26 лет
            </div>
          </div>
          <div :class="[$style.group]">
            <div :class="[$style.label]">
              Дата рождения
            </div>
            <div :class="[$style.value]">
              8 октября 1993
            </div>
          </div>
          <div :class="[$style.group]">
            <div :class="[$style.label]">
              Страна
            </div>
            <div :class="[$style.value]">
              Дания
              <!--<svg-icon name="flags/dk" />-->
            </div>
          </div>
          <div :class="[$style.group]">
            <div :class="[$style.label]">
              Призовые
            </div>
            <div :class="[$style.value]">
              $ 3 503 051
            </div>
          </div>
          <div :class="[$style.group]">
            <div :class="[$style.label]">
              Команда
            </div>
            <div :class="[$style.value]">
              OG
            </div>
          </div>
        </div>
        <div :class="[$style.description]">
          <p>Профессиональный игрок в CS:GO</p>
          <div>
            <p><b>Основные награды:</b></p>
            <p><b>1 место</b> — Parimatch League ($40 00)</p>
            <p><b>1 место</b> — Adrenaline Cyber League 2019 ($65 000)</p>
            <a href="#awards" :class="[$style.more]">
              Смотреть все награды
            </a>
          </div>
        </div>
        <div :class="[$style.stats]">
          <Stats />
        </div>
      </div>
      <div v-if="viewport.isDesktopOrHigher" :class="[$style.team]">
        <div :class="[$style.logo]">
          <img src="~/assets/images/team.png" alt="Virtus.Pro">
        </div>
        <div :class="[$style.teamName]">
          OG по Dota2
        </div>
      </div>
    </div>
    <div :class="[$style.main]">
      <PlayerTeams :team="teams" />
      <PlayerStatsCs />
      <HistoryMatches />
      <Awards id="awards" />
      <PlayerPopularHeroes />
    </div>
    <div v-if="viewport.isTabletOrHigher" :class="[$style.aside]">
      <WidgetNews title="Новости об игроке" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import PlayerStatsCs from '~/components/PlayerStatsCs/'
import PlayerTeams from '~/components/PlayerTeams/'
import HistoryMatches from '~/components/HistoryMatches/'
import Awards from '~/components/Awards/'
import PlayerPopularHeroes from '~/components/PlayerPopularHeroes/'
import Stats from '~/components/Stats/'
import WidgetNews from '~/components/WidgetNews/'
import Button from '~/components/Button/'

@Component({
  components: {
    Stats,
    PlayerStatsCs,
    PlayerTeams,
    HistoryMatches,
    Awards,
    PlayerPopularHeroes,
    WidgetNews,
    Button
  }
})
export default class player extends Vue {
  get teams (): Object {
    return [
      {
        id: 1,
        team: {
          logo: require('~/assets/images/team.png'),
          name: 'Virtus.Pro'
        },
        period: '16.12.2019 — настоящее время',
        position: 'Игрок'
      },
      {
        id: 2,
        team: {
          logo: require('~/assets/images/team.png'),
          name: 'Virtus.Pro'
        },
        period: '04.05.2018 — 20.10.2019',
        position: 'Игрок'
      },
      {
        id: 3,
        team: {
          logo: require('~/assets/images/team.png'),
          name: 'Virtus.Pro'
        },
        period: '09.02.2016 — 28.07.2019',
        position: 'Игрок'
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

  @include breakpoint('tablet') {
    padding-left: 0;
    padding-right: 0;
  }
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

.photo {
  border-radius: 4px;
  height: 180px;
  overflow: hidden;
  width: 180px;

  img {
    width: 100%;
  }
}

.social {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;

  @include breakpoint('tablet') {
    flex-direction: row;
    margin-left: 0;
    margin-top: 14px;
  }
}

.socialItem {
  height: 24px;
  margin: 5px 0;

  @include breakpoint('tablet') {
    margin: 0 5px;
  }
}

.info {
  max-width: 640px;
  width: 100%;

  @include breakpoint('tablet') {
    margin-left: 20px;
  }
}

.profile {
  align-items: center;
  display: flex;
  margin-bottom: 15px;

  @include breakpoint('tablet') {
    margin-bottom: 20px;
  }
}

.discipline {
  height: 24px;
  margin-right: 10px;

  @include breakpoint('tablet') {
    height: 40px;
    margin-right: 20px;
  }

  svg {
    height: 24px;
    width: 24px;

    @include breakpoint('tablet') {
      height: 40px;
      width: 40px;
    }
  }
}

.title {
  font-size: 24px;
  line-height: 32px;
  margin: 0;

  @include breakpoint('tablet') {
    font-size: 36px;
  }
}

.parameters {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @include breakpoint('tablet') {
    grid-template-columns: repeat(3, 1fr);
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

.more {
  color: var(--color-primary);
  text-decoration: dotted;
}

.stats {
  border-top: 1px solid var(--color-border);
  margin-top: 14px;
  padding-top: 14px;
}

.team {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  margin-left: 20px;
  max-width: 324px;
}

.logo {
  margin-right: 32px;

  img {
    height: 80px;
    width: 80px;
  }
}

.teamName {
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
}

.main {
  @include main();
}

.aside {
  @include aside();
}

tbody {
  tr {
    border-bottom: 2px solid var(--color-border);
  }

  td {
    padding-bottom: 15px !important;
    padding-top: 20px !important;
  }
}

td {
  padding-left: 22px !important;
  padding-right: 22px !important;
}
</style>
