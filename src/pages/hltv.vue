<template>
  <div :class="[$style.container]">
    <div :class="[$style.main]">
      <div :class="[$style.header]">
        <div :class="[$style.navigation]">
          <h1 :class="[$style.navigationTitle]">
            Рейтинг HLTV
          </h1>
        </div>
      </div>
      <div :class="[$style.rating]">
        <div :class="[$style.head]">
          <div :class="[$style.col, $style.title, $style.placeHead]">
            Место
          </div>
          <div :class="[$style.col, $style.title, $style.team]">
            Команда
          </div>
          <div :class="[$style.col, $style.title, $style.points]">
            Рейтинг
          </div>
          <div :class="[$style.col, $style.title, $style.stats]">
            Победы / Поражения за текущий сезон
          </div>
        </div>
        <div :class="[$style.list]">
          <div :class="[$style.item]">
            <div :class="[$style.col, $style.place]">
              <div :class="[$style.placeText]">
                1
              </div>
            </div>
            <div :class="[$style.col, $style.team]">
              <div :class="[$style.logo]">
                <img src="~@/assets/images/team.png" alt="Virtus.Pro">
              </div>
              <div>Virtus.Pro</div>
            </div>
            <div :class="[$style.col, $style.points]">
              6320
            </div>
            <div :class="[$style.col, $style.stats]">
              <Stats />
            </div>
          </div>
          <div :class="[$style.item]">
            <div :class="[$style.col, $style.place]">
              <div :class="[$style.placeText]">
                2
              </div>
              <div :class="[$style.placeChange, $style.isGreenColor]">
                +10
              </div>
            </div>
            <div :class="[$style.col, $style.team]">
              <div :class="[$style.logo]">
                <img src="~@/assets/images/team.png" alt="Virtus.Pro">
              </div>
              <div>Virtus.Pro</div>
            </div>
            <div :class="[$style.col, $style.points]">
              6320
            </div>
            <div :class="[$style.col, $style.stats]">
              <Stats />
            </div>
          </div>
          <div :class="[$style.item]">
            <div :class="[$style.col, $style.place]">
              <div :class="[$style.placeText]">
                3
              </div>
              <div :class="[$style.placeChange, $style.isRedColor]">
                -1
              </div>
            </div>
            <div :class="[$style.col, $style.team]">
              <div :class="[$style.logo]">
                <img src="~@/assets/images/team.png" alt="Virtus.Pro">
              </div>
              <div>Virtus.Pro</div>
            </div>
            <div :class="[$style.col, $style.points]">
              6320
            </div>
            <div :class="[$style.col, $style.stats]">
              <Stats />
            </div>
          </div>
        </div>
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
      <div :class="[$style.description]">
        <p>
          Dota Pro Circuit — рейтинговая система, которую ввели разработчики Dota 2. Положение команд в ней определяется
          их результатами на главных турнирах сезона: мейджорах и майнорах. По итогам года 12 клубов, набравшие больше
          всего баллов, получат приглашения на The International 2020.
        </p>
        <p>На мейджорах сезона DPC 2019/2020 разыграют по 15 тыс. очков, на майнорах — по 600 баллов.</p>
        <h4>Распределение очков DPC на мейджорах:</h4>
        <ul>
          <li>1 место — 4 850 баллов;</li>
          <li>2 место — 3 000 баллов;</li>
          <li>3 место — 2 100 баллов;</li>
          <li>4 место — 1 350 баллов;</li>
          <li>5-6 место — 900 баллов;</li>
          <li>7-8 место — 450 баллов;</li>
          <li>9-12 место — 150 баллов;</li>
          <li>13-16 место — 100 баллов.</li>
        </ul>
        <h4>Распределение очков DPC на майнорах:</h4>
        <ul>
          <li>1 место — 140 баллов;</li>
          <li>2 место — 120 баллов;</li>
          <li>3 место — 110 баллов;</li>
          <li>4 место — 90 баллов;</li>
          <li>5-6 место — 60 баллов;</li>
          <li>7-8 место — 40 баллов.</li>
        </ul>
        <p>
          Очки начисляют за любые результаты на рейтинговых турнирах, а также за участие в квалификациях. Они привязаны
          к командам — если игрок перейдет в другой клуб, то ему придется заново набирать баллы. Команда, играющая с
          заменой на LAN-этапе турнира, получит 60% от заработанных баллов.
        </p>
      </div>
    </div>
    <div v-if="viewport.isDesktopWide" :class="[$style.aside]">
      <WidgetDpc />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import WidgetDpc from '@/components/WidgetDpc'
import Stats from '@/components/Stats'

@Component({
  components: {
    WidgetDpc,
    Stats
  }
})
export default class HltvPage extends Vue {
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

.main {
  width: 100%;

  @include breakpoint('desktop', 'wide') {
    margin-right: 20px;
    max-width: 970px;
  }
}

.aside {
  @include aside();
}

.header {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.navigation {
  align-items: center;
  display: flex;
}

.navigationArrow {
  cursor: pointer;
  height: 18px;
  opacity: 1;
  transition: opacity $transition;
  width: 10px;
  will-change: opacity;

  @include hover() {
    opacity: 0.5;
  }

  svg {
    height: 18px;
    stroke: var(--color-primary);
    width: 10px;
  }
}

.navigationRight {
  transform: rotate(180deg);
}

.navigationTitle {
  font-size: 18px;
  line-height: 42px;
  margin: 0 20px;

  @include breakpoint('tablet') {
    font-size: 24px;
  }
}

.legend {
  display: flex;
  margin-bottom: 20px;
}

.legendItem {
  align-items: center;
  display: flex;
}

.labelColor {
  height: 10px;
  margin-right: 5px;
  width: 10px;
}

.labelTitle {
  font-size: 14px;
}

.isGreen {
  background-color: var(--color-green);
}

.rating {
  background-color: var(--color-layer);
  margin-left: -15px;
  margin-right: -15px;
  padding: 10px 12px;

  transition: background-color $transition-mode;
  will-change: background-color;

  @include breakpoint('tablet') {
    margin-left: 0;
    margin-right: 0;
  }
}

.head {
  display: flex;
  margin-bottom: 14px;
}

.list {
  display: flex;
  flex-direction: column;
  font-size: 13px;
  line-height: 18px;
}

.item {
  display: flex;
  padding-bottom: 10px;
  padding-top: 10px;
  position: relative;
  width: 100%;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-border);
  }
}

.col {
  align-items: center;
  display: flex;
  flex: 1 1 auto;
}

.title {
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  opacity: 0.5;
}

.placeHead {
  flex: 0;
  padding: 0 10px 0 14px;
  width: fit-content;
}

.teamHead {
  padding: 0 10px;
  width: fit-content;
}

.place {
  flex: 0;
  min-width: 60px;
  padding-right: 10px;
  width: fit-content;
}

.placeText {
  margin-left: 20px;
  position: relative;
  z-index: 1;
}

.placeChange {
  margin-left: 10px;
}

.isGreenColor {
  color: var(--color-green);
}

.isRedColor {
  color: var(--color-red);
}

.team {
  max-width: 285px;
  padding: 0 10px;
  position: relative;
  width: 100%;

  @include breakpoint('tablet') {
    max-width: 200px;
  }

  @include breakpoint('desktop') {
    max-width: 285px;
  }
}

.logo {
  height: 30px;
  margin-right: 5px;
  width: 30px;

  img {
    width: 100%;
  }
}

.points {
  flex: 0;
  max-width: 185px;
  padding: 0 10px;
  width: 100%;

  @include breakpoint('desktop') {
    flex: 1 1 auto;
  }
}

.stats {
  display: none;

  @include breakpoint('tablet') {
    display: flex;
    padding: 0 10px;
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

.description {
  background-color: var(--color-layer);
  line-height: 24px;
  margin-bottom: 20px;
  margin-left: -15px;
  margin-right: -15px;
  padding: 15px 20px;

  transition: background-color $transition-mode;
  will-change: background-color;

  @include breakpoint('tablet') {
    margin-left: 0;
    margin-right: 0;
    padding: 15px 30px;
  }
}
</style>
