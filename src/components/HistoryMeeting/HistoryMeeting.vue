<template>
  <div :class="[$style.layer]">
    <div :class="[$style.header]">
      <div :class="[$style.title]">
        История встреч
      </div>
    </div>
    <div :class="[$style.body]">
      <div :class="[$style.info]">
        <div :class="[$style.team]">
          <div :class="[$style.logo]">
            <img src="~@/assets/images/team.png" alt="Virtus.pro">
          </div>
          <div>VP</div>
        </div>
        <div :class="[$style.stats]">
          <div :class="[$style.matches]">
            Матчей: 9
          </div>
          <div :class="[$style.progress]">
            <div :class="[$style.line, $style.green]" style="width: 58%;" />
            <div :class="[$style.line]" style="width: 12%;" />
            <div :class="[$style.line, $style.red]" style="width: 30%;" />
          </div>
          <div :class="[$style.counts]">
            <div :class="[$style.countsItem, $style.green]">
              337
            </div>
            <div :class="[$style.countsItem]">
              66
            </div>
            <div :class="[$style.countsItem, $style.red]">
              179
            </div>
          </div>
        </div>
        <div :class="[$style.team]">
          <div :class="[$style.logo]">
            <img src="~@/assets/images/team.png" alt="Virtus.pro">
          </div>
          <div>Astralis</div>
        </div>
      </div>
      <div v-if="viewport.isMobile" :class="[$style.list]">
        <Match />
        <Match />
        <Match />
      </div>
      <div v-if="viewport.isTabletOrHigher" :class="[$style.table]">
        <div :class="[$style.tableHead]">
          <div>Дата</div>
          <div>Матч</div>
          <div>Турнир</div>
        </div>
        <div :class="[$style.tableBody]">
          <MatchHorizontal />
          <MatchHorizontal />
          <MatchHorizontal />
        </div>
        <div :class="[$style.tableFooter]">
          <Button with-border>
            Показать ещё
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Match from '@/components/Match'
import MatchHorizontal from '@/components/MatchHorizontal'
import Button from '@/components/Button'

@Component({
  components: {
    Match,
    MatchHorizontal,
    Button
  }
})
export default class HistoryMeeting extends Vue {
  get viewport () {
    return this.$modules.viewport
  }
}
</script>

<style lang="scss" module>
.layer {
  background-color: var(--color-layer);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  margin-left: -10px;
  margin-right: -10px;
  padding: 15px 10px 20px;
  width: calc(100% + 20px);

  @include breakpoint('tablet') {
    margin-left: 0;
    margin-right: 0;
    padding: 15px 20px 20px;
    width: 100%;
  }

  @include breakpoint('desktop', 'wide') {
    padding: 15px 110px 20px;
  }
}

.table {
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
}

.header {
  margin-bottom: 10px;
}

.title {
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
}

.logo {
  height: 40px;
  width: 40px;
}

img {
  width: 100%;
}

.info {
  align-items: center;
  display: flex;
  margin-bottom: 20px;
}

.team {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  width: 45px;
}

.matches {
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 6px;
}

.stats {
  display: flex;
  flex-direction: column;
  margin: 0 14px;
  width: 100%;
}

.counts {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}

.countsItem {
  font-size: 14px;
  line-height: 20px;
}

.countsItem.green {
  color: var(--color-green);
}

.countsItem.red {
  color: var(--color-red);
}

.progress {
  border-radius: 10px;
  display: flex;
  margin-bottom: 4px;
  overflow: hidden;
}

.line {
  background-color: var(--color-gray);
  height: 10px;
}

.line.green {
  background-color: var(--color-green);
}

.line.red {
  background-color: var(--color-red);
}

.percent {
  display: flex;
  justify-content: space-between;
}

.tableHead {
  align-items: center;
  background-color: var(--color-pinned-another);
  border-radius: 4px 4px 0 0;
  color: var(--color-text);
  display: flex;
  font-size: 12px;
  font-weight: 500;
  height: 35px;
  justify-content: space-between;
  line-height: 16px;
  margin-bottom: 2px;
  padding: 0 15px 0 20px;
}

.tableBody {
  background-color: var(--color-pinned);
}

.tableFooter {
  background-color: var(--color-pinned);
  padding: 10px 12px;
}
</style>
