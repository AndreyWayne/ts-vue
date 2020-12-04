<template>
  <div>
    <div :class="[$style.container]">
      <div :class="[$style.tournament]">
        <div :class="[$style.tournamentLeft]">
          <div :class="[$style.block]">
            <div :class="[$style.discipline]">
              <svg-icon name="disciplines/dota" />
            </div>
            <div :class="[$style.info]">
              <h3 :class="[$style.title]">
                Sector: Mostbet DOTA 2 | Плей-офф
              </h3>
              <div :class="[$style.data]">
                <div :class="[$style.infoItem]">
                  <div :class="[$style.infoItemLabel]">
                    Дата проведения
                  </div>
                  <div :class="[$style.infoItemText]">
                    14.10.2019 - 23.02.2020
                  </div>
                </div>
                <div :class="[$style.infoItem]">
                  <div :class="[$style.infoItemLabel]">
                    Сумма призовых
                  </div>
                  <div :class="[$style.infoItemText]">
                    $5 070
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div :class="[$style.navbar]">
            <Button v-if="viewport.isDesktopOrHigher">
              Смотреть стрим
            </Button>
            <Button v-if="viewport.isTablet">
              Стрим
            </Button>
            <Button v-if="viewport.isDesktopOrHigher">
              Турнирная сетка
            </Button>
            <Button v-if="viewport.isTablet">
              Сетка
            </Button>
            <Button>
              Расписание
            </Button>
            <Button v-if="viewport.isDesktopOrHigher">
              Составы команд
            </Button>
            <Button v-if="viewport.isTablet">
              Составы
            </Button>
            <Button>
              Новости
            </Button>
            <Button>
              Результаты
            </Button>
          </div>
        </div>
        <div :class="[$style.tournamentRight]" />
      </div>
      <div :class="[$style.match]">
        <div v-if="viewport.isDesktopWide" :class="[$style.lineup]">
          <div :class="[$style.lineupTeam]">
            Игроки
            <span>Virtus.pro</span>
          </div>
          <div :class="[$style.lineupList]">
            <div v-for="player in listLineup" :key="player.position" :class="[$style.player]">
              <div :class="[$style.playerPhoto]">
                <img src="~@/assets/images/player.jpg" alt="iLTW">
              </div>
              <div :class="[$style.playerInfo]">
                <div :class="[$style.playerData]">
                  <div :class="[$style.country]">
                    <svg-icon name="flags/ru" />
                  </div>
                  <div :class="[$style.playerNickname]">
                    {{ player.nickname }}
                  </div>
                </div>
                <div :class="[$style.playerName]">
                  {{ player.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div :class="[$style.matchStat]">
          <div :class="[$style.matchInfo]">
            <h1 :class="[$style.matchTitle]">
              Dota 2
              <br>
              Virtus.pro vs VP.Prodigy
            </h1>
            <h2 :class="[$style.matchTournament]">
              Sector: Mostbet DOTA 2
            </h2>
            <Button>
              Перейти к турнирной сетке
            </Button>
          </div>
          <div :class="[$style.matchResults]">
            <div :class="[$style.matchResultsTeam]">
              <div :class="[$style.matchResultsTeamLogo]">
                <img src="~@/assets/images/team.png" alt="Virtus.pro">
              </div>
              <div :class="[$style.matchResultsTeamName]">
                Virtus.pro
              </div>
            </div>
            <div :class="[$style.matchResultsMiddle]">
              <div :class="[$style.matchResultsBo]">
                BEST-OF-3
              </div>
              <div :class="[$style.matchResultsScore]">
                1 : 1
              </div>
              <div :class="[$style.matchResultsDate]">
                27/02 в 14:00
              </div>
              <div :class="[$style.matchResultsStatus]">
                Прошедший
              </div>
            </div>
            <div :class="[$style.matchResultsTeam]">
              <div :class="[$style.matchResultsTeamLogo]">
                <img src="~@/assets/images/team.png" alt="VP.Prodigy">
              </div>
              <div :class="[$style.matchResultsTeamName]">
                VP.Prodigy
              </div>
            </div>
          </div>
        </div>
        <div v-if="viewport.isDesktopWide" :class="[$style.lineup]">
          <div :class="[$style.lineupTeam]">
            Игроки
            <span>VP.Prodigy</span>
          </div>
          <div :class="[$style.lineupList]">
            <div v-for="player in listLineup" :key="player.position" :class="[$style.player]">
              <div :class="[$style.playerPhoto]">
                <img src="~@/assets/images/player.jpg" alt="iLTW">
              </div>
              <div :class="[$style.playerInfo]">
                <div :class="[$style.playerData]">
                  <div :class="[$style.country]">
                    <svg-icon name="flags/ru" />
                  </div>
                  <div :class="[$style.playerNickname]">
                    {{ player.nickname }}
                  </div>
                </div>
                <div :class="[$style.playerName]">
                  {{ player.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="viewport.isDesktop" :class="[$style.lineup]">
          <div :class="[$style.head]">
            <div :class="[$style.item, $style.isActive]">
              Игроки Gambit
            </div>
            <div :class="[$style.item]">
              Игроки OG
            </div>
          </div>
          <div>
            <div :class="[$style.lineupList]">
              <div v-for="player in listLineup" :key="player.position" :class="[$style.player]">
                <div :class="[$style.playerPhoto]">
                  <img src="~@/assets/images/player.jpg" alt="iLTW">
                </div>
                <div :class="[$style.playerInfo]">
                  <div :class="[$style.playerNickname]">
                    {{ player.nickname }}
                  </div>
                  <div class="flag-icon flag-icon-ru" />
                  <div :class="[$style.playerName]">
                    {{ player.name }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="viewport.isTablet" :class="[$style.lineupTablet]">
        <div :class="[$style.lineup]">
          <div :class="[$style.lineupTeam]">
            Игроки
            <span>Virtus.pro</span>
          </div>
          <div :class="[$style.lineupList]">
            <div :class="[$style.player]">
              <div :class="[$style.playerPhoto]">
                <img src="~@/assets/images/player.jpg" alt="iLTW">
              </div>
              <div :class="[$style.playerInfo]">
                <div :class="[$style.playerNickname]">
                  iLTW
                </div>
                <div class="flag-icon flag-icon-ru" />
                <div :class="[$style.playerName]">
                  Игорь Филатов
                </div>
              </div>
            </div>
            <div :class="[$style.player]">
              <div :class="[$style.playerPhoto]">
                <img src="~@/assets/images/player.jpg" alt="No[o]ne">
              </div>
              <div :class="[$style.playerInfo]">
                <div :class="[$style.playerNickname]">
                  No[o]ne
                </div>
                <div class="flag-icon flag-icon-ru" />
                <div :class="[$style.playerName]">
                  Владимир Миненко
                </div>
              </div>
            </div>
            <div :class="[$style.player]">
              <div :class="[$style.playerPhoto]">
                <img src="~@/assets/images/player.jpg" alt="No[o]ne">
              </div>
              <div :class="[$style.playerInfo]">
                <div :class="[$style.playerNickname]">
                  Resolut1on
                </div>
                <div class="flag-icon flag-icon-ru" />
                <div :class="[$style.playerName]">
                  Роман Фоминок
                </div>
              </div>
            </div>
            <div :class="[$style.player]">
              <div :class="[$style.playerPhoto]">
                <img src="~@/assets/images/player.jpg" alt="iLTW">
              </div>
              <div :class="[$style.playerInfo]">
                <div :class="[$style.playerNickname]">
                  iLTW
                </div>
                <div class="flag-icon flag-icon-ru" />
                <div :class="[$style.playerName]">
                  Игорь Филатов
                </div>
              </div>
            </div>
            <div :class="[$style.player]">
              <div :class="[$style.playerPhoto]">
                <img src="~@/assets/images/player.jpg" alt="No[o]ne">
              </div>
              <div :class="[$style.playerInfo]">
                <div :class="[$style.playerNickname]">
                  No[o]ne
                </div>
                <div class="flag-icon flag-icon-ru" />
                <div :class="[$style.playerName]">
                  Владимир Миненко
                </div>
              </div>
            </div>
          </div>
        </div>
        <div :class="[$style.lineup]">
          <div :class="[$style.lineupTeam]">
            Игроки
            <span>VP.Prodigy</span>
          </div>
          <div :class="[$style.lineupList]">
            <div :class="[$style.player]">
              <div :class="[$style.playerPhoto]">
                <img src="~@/assets/images/player.jpg" alt="iLTW">
              </div>
              <div :class="[$style.playerInfo]">
                <div :class="[$style.playerNickname]">
                  iLTW
                </div>
                <div class="flag-icon flag-icon-ru" />
                <div :class="[$style.playerName]">
                  Игорь Филатов
                </div>
              </div>
            </div>
            <div :class="[$style.player]">
              <div :class="[$style.playerPhoto]">
                <img src="~@/assets/images/player.jpg" alt="No[o]ne">
              </div>
              <div :class="[$style.playerInfo]">
                <div :class="[$style.playerNickname]">
                  No[o]ne
                </div>
                <div class="flag-icon flag-icon-ru" />
                <div :class="[$style.playerName]">
                  Владимир Миненко
                </div>
              </div>
            </div>
            <div :class="[$style.player]">
              <div :class="[$style.playerPhoto]">
                <img src="~@/assets/images/player.jpg" alt="No[o]ne">
              </div>
              <div :class="[$style.playerInfo]">
                <div :class="[$style.playerNickname]">
                  Resolut1on
                </div>
                <div class="flag-icon flag-icon-ru" />
                <div :class="[$style.playerName]">
                  Роман Фоминок
                </div>
              </div>
            </div>
            <div :class="[$style.player]">
              <div :class="[$style.playerPhoto]">
                <img src="~@/assets/images/player.jpg" alt="iLTW">
              </div>
              <div :class="[$style.playerInfo]">
                <div :class="[$style.playerNickname]">
                  iLTW
                </div>
                <div class="flag-icon flag-icon-ru" />
                <div :class="[$style.playerName]">
                  Игорь Филатов
                </div>
              </div>
            </div>
            <div :class="[$style.player]">
              <div :class="[$style.playerPhoto]">
                <img src="~@/assets/images/player.jpg" alt="No[o]ne">
              </div>
              <div :class="[$style.playerInfo]">
                <div :class="[$style.playerNickname]">
                  No[o]ne
                </div>
                <div class="flag-icon flag-icon-ru" />
                <div :class="[$style.playerName]">
                  Владимир Миненко
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="viewport.isMobile" :class="[$style.lineup]">
        <div :class="[$style.head]">
          <div :class="[$style.item, $style.isActive]">
            Игроки Gambit
          </div>
          <div :class="[$style.item]">
            Игроки OG
          </div>
        </div>
        <div>
          <div :class="[$style.lineupList]">
            <div :class="[$style.player]">
              <div :class="[$style.playerPhoto]">
                <img src="~@/assets/images/player.jpg" alt="iLTW">
              </div>
              <div :class="[$style.playerInfo]">
                <div :class="[$style.playerNickname]">
                  iLTW
                </div>
                <div class="flag-icon flag-icon-ru" />
                <div :class="[$style.playerName]">
                  Игорь Филатов
                </div>
              </div>
            </div>
            <div :class="[$style.player]">
              <div :class="[$style.playerPhoto]">
                <img src="~@/assets/images/player.jpg" alt="No[o]ne">
              </div>
              <div :class="[$style.playerInfo]">
                <div :class="[$style.playerNickname]">
                  No[o]ne
                </div>
                <div class="flag-icon flag-icon-ru" />
                <div :class="[$style.playerName]">
                  Владимир Миненко
                </div>
              </div>
            </div>
            <div :class="[$style.player]">
              <div :class="[$style.playerPhoto]">
                <img src="~@/assets/images/player.jpg" alt="No[o]ne">
              </div>
              <div :class="[$style.playerInfo]">
                <div :class="[$style.playerNickname]">
                  Resolut1on
                </div>
                <div class="flag-icon flag-icon-ru" />
                <div :class="[$style.playerName]">
                  Роман Фоминок
                </div>
              </div>
            </div>
            <div :class="[$style.player]">
              <div :class="[$style.playerPhoto]">
                <img src="~@/assets/images/player.jpg" alt="iLTW">
              </div>
              <div :class="[$style.playerInfo]">
                <div :class="[$style.playerNickname]">
                  iLTW
                </div>
                <div class="flag-icon flag-icon-ru" />
                <div :class="[$style.playerName]">
                  Игорь Филатов
                </div>
              </div>
            </div>
            <div :class="[$style.player]">
              <div :class="[$style.playerPhoto]">
                <img src="~@/assets/images/player.jpg" alt="No[o]ne">
              </div>
              <div :class="[$style.playerInfo]">
                <div :class="[$style.playerNickname]">
                  No[o]ne
                </div>
                <div class="flag-icon flag-icon-ru" />
                <div :class="[$style.playerName]">
                  Владимир Миненко
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="[$style.container, $style.wrap]">
      <div :class="[$style.main]">
        <HistoryMeeting />
        <LastMatches />
      </div>
      <div :class="[$style.aside]">
        <WidgetNews title="Главные новости" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Button from '@/components/Button'
import HistoryMeeting from '@/components/HistoryMeeting'
import LastMatches from '@/components/LastMatches'
import WidgetNews from '@/components/WidgetNews'

@Component({
  components: {
    Button,
    HistoryMeeting,
    LastMatches,
    WidgetNews
  }
})
export default class matchPage extends Vue {
  get listLineup (): Object {
    return [
      {
        position: 1,
        country: 'ru',
        nickname: 'iLTW',
        name: 'Игорь Филатов'
      },
      {
        position: 2,
        country: 'ua',
        nickname: 'No[o]ne',
        name: 'Владимир Миненко'
      },
      {
        position: 3,
        country: 'ua',
        nickname: 'Resolut1on',
        name: 'Роман Фоминок'
      },
      {
        position: 4,
        country: 'ru',
        nickname: 'Solo',
        name: 'Алексей Березин'
      },
      {
        position: 5,
        country: 'ru',
        nickname: 'epileptick1d',
        name: 'Егор Григоренко'
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

.container.wrap {
  @include breakpoint('desktop') {
    flex-wrap: nowrap;
  }
}

.main {
  @include main();
}

.aside {
  margin-left: -10px;
  margin-right: -10px;

  @include breakpoint('tablet') {
    margin-left: 0;
    margin-right: 0;
  }

  @include breakpoint('desktop') {
    max-width: 310px;
  }
}

.tournament {
  background-color: var(--color-layer);
  border-radius: 0;
  display: flex;
  height: fit-content;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-left: -10px;
  margin-right: -10px;
  padding: 15px;
  width: calc(100% + 20px);

  @include breakpoint('tablet') {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
}

.tournamentLeft {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.block {
  display: flex;
}

.discipline {
  background-color: var(--color-layer);
  flex: 0 0 auto;
  height: 20px;
  margin-right: 16px;
  width: 20px;

  @include breakpoint('tablet') {
    height: 70px;
    width: 70px;
  }

  svg {
    height: 20px;
    width: 20px;

    @include breakpoint('tablet') {
      height: 70px;
      width: 70px;
    }
  }
}

.title {
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 0;
  margin-top: 0;
  text-decoration-line: underline;

  @include breakpoint('tablet') {
    font-size: 18px;
    margin-bottom: 18px;
    text-decoration-line: none;
  }
}

.data {
  display: none;

  @include breakpoint('tablet') {
    display: flex;
  }
}

.infoItem {
  display: flex;
  flex-direction: column;
  font-size: 14px;

  &:not(:last-child) {
    margin-right: 30px;
  }
}

.infoItemLabel {
  opacity: 0.4;
}

.infoItemText {
  font-weight: 500;
}

.navbar {
  display: none;

  @include breakpoint('tablet') {
    display: flex;
    margin-top: 14px;
  }

  a {
    margin-right: 10px;
  }
}

.lineupTablet {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.lineup {
  background-color: var(--color-layer);
  margin-bottom: 20px;
  margin-left: -10px;
  margin-right: -10px;
  padding: 20px 10px;
  width: calc(100% + 20px);

  @include breakpoint('tablet') {
    margin-left: 0;
    margin-right: 0;
    max-width: 300px;
    padding: 20px 40px 24px 50px;
  }

  @include breakpoint('desktop') {
    margin-bottom: 0;
    max-width: 310px;
    padding: 20px 40px 24px 50px;
  }
}

.lineupTeam {
  font-size: 16px;
  font-weight: 500;
  line-height: 25px;
  margin-bottom: 18px;
}

.player {
  align-items: center;
  display: flex;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
}

.playerPhoto {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  flex: 0 0 auto;
  height: 45px;
  overflow: hidden;
  width: 45px;
}

.playerInfo {
  margin-left: 12px;
  position: relative;
  width: 100%;
}

.playerData {
  display: flex;
}

.country {
  height: 14px;
  margin-right: 7px;
  width: 20px;
}

.playerNickname {
  font-size: 16px;
  font-weight: 500;
}

.playerName {
  line-height: 18px;
}

.match {
  display: flex;
  margin-bottom: 20px;
  margin-left: -10px;
  margin-right: -10px;
  width: calc(100% + 20px);

  @include breakpoint('tablet') {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
}

.matchStat {
  background-color: var(--color-layer);
  max-width: 640px;
  padding: 10px 0 44px;
  width: 100%;

  @include breakpoint('desktop') {
    margin-right: 20px;
  }

  @include breakpoint('desktop', 'wide') {
    margin-left: 20px;
    margin-right: 20px;
    max-width: 660px;
  }
}

.matchInfo {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.matchTitle {
  font-size: 20px;
  line-height: 28px;
  margin: 0 0 10px;
  text-align: center;

  @include breakpoint('tablet') {
    font-size: 36px;
    line-height: 42px;
  }
}

.matchTournament {
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  margin: 0 0 10px;

  @include breakpoint('tablet') {
    font-size: 24px;
    line-height: 32px;
  }
}

.matchResults {
  display: flex;
  margin-top: 20px;
}

.matchResultsTeam {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  max-width: 175px;
  width: 100%;

  @include breakpoint('tablet') {
    margin-top: 0;
  }
}

.matchResultsTeamLogo {
  height: 60px;
  margin-bottom: 16px;
  width: 60px;

  @include breakpoint('tablet') {
    height: 100px;
    margin-bottom: 24px;
    width: 100px;
  }

  img {
    width: 100%;
  }
}

.matchResultsTeamName {
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;

  @include breakpoint('tablet') {
    font-size: 24px;
    line-height: 28px;
  }
}

.matchResultsMiddle {
  text-align: center;
  width: 100%;
}

.matchResultsBo {
  color: var(--color-text-second);
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 10px;

  @include breakpoint('tablet') {
    margin-top: 20px;
  }
}

.matchResultsScore {
  font-size: 42px;
  font-weight: 500;
  line-height: 28px;

  @include breakpoint('tablet') {
    font-size: 62px;
    line-height: 54px;
  }
}

.matchResultsDate {
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  margin-top: 10px;

  @include breakpoint('tablet') {
    font-size: 24px;
    line-height: 32px;
  }
}

.matchResultsStatus {
  font-size: 14px;
  font-weight: 500;
  line-height: 32px;

  @include breakpoint('tablet') {
    font-size: 16px;
    line-height: 18px;
    margin-top: 10px;
  }
}

.head {
  border-bottom: 1px solid #c7d1e7;
  display: flex;
  flex: 1;
  font-size: 12px;
  letter-spacing: 0.3px;
  line-height: 16px;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.item {
  border-bottom: 3px solid transparent;
  cursor: pointer;
  margin-bottom: -1px;
  padding-bottom: 7px;

  transition: color 0.3s ease;
  will-change: color;

  @include hover() {
    color: var(--color-primary);
  }

  &:not(:last-child) {
    margin-right: 15px;
  }
}

.isActive {
  border-bottom: 3px solid var(--color-primary);
}
</style>
