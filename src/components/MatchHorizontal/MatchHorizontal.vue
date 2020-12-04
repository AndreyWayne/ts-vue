<template>
  <div :class="[$style.match]">
    <div :class="[$style.left]">
      <div :class="[$style.date]">
        28.12.2019
      </div>
    </div>
    <div :class="[$style.middle]">
      <div :class="[$style.team, $style.teamFirst]">
        <div>Virtus.Pro</div>
        <div :class="[$style.logo]">
          <img src="~@/assets/images/team.png" alt="Virtus.Pro">
        </div>
      </div>
      <div :class="[$style.result]">
        <div :class="[$style.count]">
          16:18
        </div>
      </div>
      <div :class="[$style.team, $style.teamSecond, $style.inactive]">
        <div>VP.Prodigy</div>
        <div :class="[$style.logo]">
          <img src="~@/assets/images/team.png" alt="VP.Prodigy">
        </div>
      </div>
    </div>
    <div :class="[$style.right]">
      <div :class="[$style.tournament]">
        StarSeries & i-League DOTA Season 8
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class MatchHorizontal extends Vue {}
</script>

<style lang="scss" module>
.match {
  align-items: center;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  height: 50px;
  justify-content: center;
  padding: 0 20px;
  position: relative;
  transition: box-shadow $transition, border-bottom $transition-mode;
  will-change: box-shadow, border-bottom;

  @include hover() {
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
}

.left {
  left: 0;
  position: absolute;

  @include breakpoint('tablet') {
    left: 30px;
  }
}

.middle {
  display: flex;
  justify-content: center;
  width: 400px;
}

.right {
  display: flex;
  position: absolute;
  right: 0;
  text-align: right;

  @include breakpoint('tablet') {
    right: 20px;
    width: 134px;
  }
}

.team {
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  width: 50%;
}

.inactive {
  color: var(--color-gray-dark);
}

.teamFirst {
  justify-content: flex-end;
  margin-right: 30px;

  .logo {
    margin-left: 7px;
  }
}

.teamSecond {
  flex-direction: row-reverse;
  justify-content: flex-end;
  margin-left: 30px;

  .logo {
    margin-right: 7px;
  }
}

.logo {
  height: 24px;
  width: 24px;

  img {
    width: 100%;
  }
}

.result {
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  width: 40px;
}

.count {
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
}

.date {
  font-size: 13px;
  line-height: 20px;
}

.tournament {
  font-size: 13px;
  line-height: 16px;
}
</style>
