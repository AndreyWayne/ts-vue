<template>
  <div>
    <div :class="[$style.header]">
      <div :class="[$style.title]">
        Участие в командах
      </div>
    </div>
    <div>
      <div :class="[$style.layer]">
        <table v-if="viewport.isDesktopOrHigher">
          <thead>
            <tr>
              <td>Команда</td>
              <td>Статус</td>
              <td>
                <div :class="[$style.stats]">
                  <div>Побед</div>
                  <div>Ничьих</div>
                  <div>Поражений</div>
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in team" :key="item.id">
              <td>
                <div :class="[$style.team]">
                  <div :class="[$style.logo]">
                    <img :src="item.team.logo" :alt="item.team.name">
                  </div>
                  <div>
                    <div :class="[$style.teamName]">
                      {{ item.team.name }}
                    </div>
                    <div :class="[$style.teamPeriod]">
                      {{ item.period }}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {{ item.position }}
              </td>
              <td>
                <Stats />
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="viewport.isMobile">
          <div v-for="item in team" :key="item.id" :class="[$style.item]">
            <div :class="[$style.team]">
              <div :class="[$style.logo]">
                <img :src="item.team.logo" :alt="item.team.name">
              </div>
              <div>
                <div>
                  <div :class="[$style.teamName]">
                    {{ item.team.name }}
                  </div>
                  <div :class="[$style.teamPeriod]">
                    {{ item.period }}
                  </div>
                </div>
                <div>
                  <p>{{ item.position }}</p>
                </div>
                <div>
                  <Stats />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div :class="[$style.footer]">
          <Button with-border>
            Показать еще
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, mixins, Prop, Vue } from 'nuxt-property-decorator'

import Stats from '~/components/Stats/'
import Button from '~/components/Button/'

@Component({
  components: {
    Stats,
    Button
  }
})
export default class PlayerTeams extends mixins(Vue) {
  @Prop({ type: Array })
  readonly team!: Object

  get viewport () {
    return this.$modules.viewport
  }
}
</script>

<style lang="scss" module>
.layer {
  background-color: var(--color-layer);
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
  margin-bottom: 20px;
}

.title {
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
}

.footer {
  padding: 10px 25px;
}

.stats {
  display: flex;
  justify-content: space-between;
}

.team {
  display: flex;
}

.logo {
  margin-right: 20px;

  img {
    height: 45px;
    width: 45px;
  }
}

.teamName {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  margin-bottom: 12px;
}

.teamPeriod {
  color: var(--color-text-gray);
  line-height: 1;
}

.item {
  padding: 20px;
}
</style>
