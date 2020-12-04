<template>
  <div :class="[$style.layer]">
    <div :class="[$style.header]">
      <div :class="[$style.title]">
        Последние игры команд
      </div>
    </div>
    <div :style="[$style.table]">
      <div :class="[$style.head]">
        <div :class="[$style.item, $style.isActive]">
          Virtus.pro
        </div>
        <div :class="[$style.item]">
          Astralis
        </div>
      </div>
      <div v-if="viewport.isMobile">
        <Match />
        <Match />
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

<script>
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
export default class LastMatches extends Vue {
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
