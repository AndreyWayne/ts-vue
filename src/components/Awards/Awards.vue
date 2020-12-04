<template>
  <div>
    <div :class="[$style.header]">
      <div :class="[$style.title]">
        Награды
      </div>
    </div>
    <div>
      <div :class="[$style.layer]">
        <table v-if="viewport.isTabletOrHigher">
          <thead>
            <tr>
              <td>Турнир</td>
              <td>Место</td>
              <td>Сумма призовых</td>
              <td>Призовой фонд</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="award in awards" :key="award.id">
              <td>
                <div :class="[$style.tournament]">
                  <div :class="[$style.discipline]">
                    <svg-icon name="disciplines/dota" />
                  </div>
                  <div>
                    <div :class="[$style.tournamentName]">
                      {{ award.tournament.name }}
                    </div>
                    <div :class="[$style.tournamentPeriod]">
                      {{ award.tournament.place }} | {{ award.tournament.date }}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div
                  :class="[
                    $style.place,
                    { [$style.isGold]: award.position === 1 },
                    { [$style.isSilver]: award.position === 2 },
                    { [$style.isBronze]: award.position === 3 },
                  ]"
                >
                  {{ award.position }}
                </div>
              </td>
              <td>
                {{ award.prizeAmount }}
              </td>
              <td>
                {{ award.prizePool }}
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="viewport.isTabletOrBelow">
          <div v-for="award in awards" :key="award.id" :class="[$style.item]">
            <div :class="[$style.tournament]">
              <div :class="[$style.discipline]">
                <div
                  :class="[
                    $style.place,
                    {
                      [$style.isGold]: award.position === 1,
                      [$style.isSilver]: award.position === 2,
                      [$style.isBronze]: award.position === 3,
                    },
                  ]"
                >
                  {{ award.position }}
                </div>
              </div>
              <div>
                <div :class="[$style.tournamentName]">
                  {{ award.tournament.name }}
                </div>
                <div :class="[$style.tournamentPeriod]">
                  {{ award.tournament.place }}
                  |
                  {{ award.tournament.date }}
                </div>
              </div>
            </div>
            <div :class="[$style.foundList]">
              <div :class="[$style.left]">
                <div :class="[$style.label]">
                  Сумма призовых
                </div>
                <div>{{ award.prizeAmount }}</div>
              </div>
              <div :class="[$style.right]">
                <div :class="[$style.label]">
                  Призовой фонд
                </div>
                <div>{{ award.prizePool }}</div>
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

import Button from '~/components/Button/'

@Component({
  components: {
    Button
  }
})
export default class Awards extends mixins(Vue) {
  @Prop({ type: Array })
  readonly awards!: Object

  get viewport () {
    return this.$modules.viewport
  }
}
</script>

<style lang="scss" module>
.header {
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 20px;
}

.title {
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
}

.layer {
  background-color: var(--color-layer);
  border: 1px solid var(--color-border-transparent);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  margin: 0 -15px 14px;

  transition: background-color $transition-mode, border $transition-mode;
  will-change: background-color, border;

  @include breakpoint('tablet') {
    border-radius: 4px;
    margin: 0 0 20px;
  }

  td {
    padding: 10px 22px;
  }
}

.discipline {
  margin-right: 20px;
}

.tournament {
  align-items: center;
  display: flex;
}

.tournamentName {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  margin-bottom: 12px;
}

.tournamentPeriod {
  color: var(--color-text-gray);
  line-height: 22px;
}

.place {
  align-items: center;
  border-radius: 50%;
  color: var(--color-text);
  display: flex;
  font-size: 18px;
  font-weight: 500;
  height: 35px;
  justify-content: center;
  width: 35px;
}

.isGold {
  background-color: #ffb629;
  color: black;
}

.isSilver {
  background-color: #bdbdbd;
  color: black;
}

.isBronze {
  background-color: #ec9239;
  color: black;
}

.item {
  border-bottom: 2px solid var(--color-layer);
  padding: 25px 10px;
}

.foundList {
  border-top: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
  padding-top: 8px;
}

.right {
  text-align: right;
}

.label {
  line-height: 25px;
  margin-bottom: 5px;
}

.footer {
  padding: 10px 25px;
}
</style>
