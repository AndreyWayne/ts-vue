<template>
  <div>
    <div :class="[$style.header]">
      <div :class="[$style.title]">
        Ближайший матч
      </div>
    </div>
    <div>
      <div :class="[$style.layer]">
        <div v-if="viewport.isTabletOrHigher" :class="[$style.table]">
          <div :class="[$style.tableHead]">
            <div>Дата</div>
            <div>Матч</div>
            <div>Турнир</div>
          </div>
          <div :class="[$style.tableBody]">
            <MatchHorizontal />
          </div>
        </div>
        <div v-if="viewport.isTabletOrBelow" :class="[$style.list]">
          <Match />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Match from '@/components/Match'
import MatchHorizontal from '@/components/MatchHorizontal'

@Component({
  components: {
    Match,
    MatchHorizontal
  }
})
export default class NearestMatch extends Vue {
  get viewport () {
    return this.$modules.viewport
  }
}
</script>

<style lang="scss" module>
.layer {
  background-color: var(--color-layer);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  margin: 0 -15px 14px;

  overflow: hidden;

  transition: background-color $transition-mode;
  will-change: background-color;

  @include breakpoint('tablet') {
    border-radius: 4px;
    margin: 0 0 20px;
  }
}

.header {
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 10px;

  @include breakpoint('tablet') {
    margin-bottom: 20px;
  }
}

.title {
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
}

.list {
  padding: 15px 15px 0;
}

.footer {
  padding: 10px 25px;
}

.tableHead {
  align-items: center;
  background-color: var(--color-pinned-another);
  border-bottom: 2px solid var(--color-layer);
  border-radius: 4px 4px 0 0;
  color: var(--color-text-light);
  display: flex;
  font-size: 12px;
  font-weight: 500;
  height: 35px;
  justify-content: space-between;
  line-height: 16px;
  margin-bottom: 2px;
  padding: 0 15px 0 20px;
}
</style>
