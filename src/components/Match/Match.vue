<template>
  <div :class="[$style.match]">
    <nuxt-link :to="match.url" :class="[$style.link]" />
    <div :class="[$style.header]">
      <div :class="[$style.headerLeft]">
        <div :class="[$style.category]">
          <svg-icon name="disciplines/cs" />
        </div>
        <nuxt-link :to="match.tournament.url" :class="[$style.tournament]">
          <div :class="[$style.tournamentName]">
            {{ match.tournament.name }}
          </div>
          <div v-if="match.tournament.group" :class="[$style.tournamentSection]">
            {{ match.tournament.group }}
          </div>
        </nuxt-link>
      </div>
      <div>
        <div :class="[$style.status]">
          <div :class="[$style.statusLive]">
            {{ match.date }}
          </div>
          <!--<div :class="[$style.statusDate]">14.30</div>-->
        </div>
      </div>
    </div>
    <div :class="[$style.info]">
      <div :class="[$style.teams]">
        <div :class="[$style.team]">
          <nuxt-link :to="match.teamFirst.url" :class="[$style.teamLink]">
            <div class="b-match__team-logo" />
            <div :class="[$style.teamName, { [$style.inactive]: teamFirstStatus }]">
              {{ match.teamFirst.name }}
            </div>
          </nuxt-link>
          <div :class="[$style.teamRight]">
            <div :class="[$style.teamScore]">
              {{ match.teamFirst.score }}
            </div>
            <nuxt-link v-if="match.bookmaker && match.bookmaker.teamSecond" to="" target="_blank" :class="[$style.bet]">
              {{ match.bookmaker.teamSecond }}
            </nuxt-link>
          </div>
        </div>
        <div :class="[$style.team]">
          <nuxt-link :to="match.teamSecond.url" :class="[$style.teamLink]">
            <div class="b-match__team-logo" />
            <div :class="[$style.teamName, { [$style.inactive]: teamSecondStatus }]">
              {{ match.teamSecond.name }}
            </div>
          </nuxt-link>
          <div :class="[$style.teamRight]">
            <div :class="[$style.teamScore]">
              {{ match.teamSecond.score }}
            </div>
            <nuxt-link v-if="match.bookmaker && match.bookmaker.teamFirst" to="" target="_blank" :class="[$style.bet]">
              {{ match.bookmaker.teamFirst }}
            </nuxt-link>
          </div>
        </div>
      </div>
      <div :class="[$style.footer]">
        <nuxt-link :to="match.url" :class="[$style.footerLink]">
          Перейти на матч
        </nuxt-link>
        <nuxt-link v-if="match.bookmaker" to="" target="_blank" :class="[$style.bookmaker]" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Match extends Vue {
  @Prop({ type: Object })
  readonly match!: object

  get teamFirstStatus () {
    return false
  }

  get teamSecondStatus () {
    return false
  }
}
</script>

<style lang="scss" module>
.match {
  margin-bottom: 10px;
  padding: 2px 0 8px;

  position: relative;

  width: 100%;
}

.link {
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 2;
}

.header {
  align-items: center;
  display: flex;
  justify-content: space-between;

  margin-bottom: 8px;
}

.headerLeft {
  display: flex;
}

.category {
  border-radius: 2px;

  flex: 0 0 auto;

  margin-right: 10px;

  svg {
    height: 20px;
    width: 20px;

    @include breakpoint('desktop') {
      height: 16px;
      width: 16px;
    }
  }
}

.tournament {
  color: var(--color-text);

  display: flex;
  flex-direction: column;

  position: relative;
  text-decoration: none;

  transition: color $transition;
  will-change: color;
  z-index: 4;

  @include hover() {
    color: var(--color-primary);
  }
}

.tournamentName {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  max-height: 40px;
  overflow: hidden;
}

.tournamentSection {
  font-size: 13px;
  line-height: 18px;
  opacity: 0.4;
}

.status {
  font-size: 12px;
}

.statusLive {
  color: var(--color-primary);
  text-transform: uppercase;
}

.statusDate {
  color: var(--color-gray);
}

.info {
  font-size: 14px;
  padding-left: 30px;

  @include breakpoint('desktop') {
    padding-left: 26px;
  }
}

.team {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;
}

.teamLink {
  color: var(--color-text);
  text-decoration: none;

  transition: color $transition-mode;
  will-change: color;
}

.teamName {
  line-height: 20px;
  text-decoration: none;
}

.inactive {
  color: var(--color-gray-dark);
}

.teamRight {
  display: flex;
}

.teamScore {
  line-height: 20px;
}

.bet {
  @include bets();

  color: var(--color-text);

  font-weight: 500;
  line-height: 20px;

  margin-left: 10px;
  padding: 0 4px;
  position: relative;
  z-index: 4;
}

.footer {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
}

.footerLink {
  color: var(--color-primary);
  font-size: 12px;
  line-height: 16px;
  text-decoration: none;

  transition: color $transition;
  will-change: color;

  @include hover() {
    color: var(--color-primary-secondary);
    text-decoration: underline;
  }
}

.bookmaker {
  height: 10px;
  position: relative;
  width: 50px;
  z-index: 4;
}
</style>
