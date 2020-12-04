<template>
  <div :class="[$style.layer]">
    <table v-if="viewport.isTabletOrHigher">
      <thead>
        <tr>
          <td>Имя</td>
          <td>Статус</td>
          <td>
            <div :class="[$style.tdStats]">
              <div>Побед</div>
              <div>Ничьих</div>
              <div>Поражений</div>
            </div>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in players" :key="player.id">
          <td>
            <div :class="[$style.player]">
              <div :class="[$style.photo]">
                <img src="~@/assets/images/player.png" :alt="player.nickname">
              </div>
              <div>
                <div :class="[$style.nickname]">
                  {{ player.nickname }}
                </div>
                <div :class="[$style.name]">
                  {{ player.name }}
                </div>
              </div>
            </div>
          </td>
          <td>
            <div>
              <div :class="[$style.position]">
                {{ player.position }}
              </div>
              <div :class="[$style.date]">
                {{ player.date }}
              </div>
            </div>
          </td>
          <td>
            <Stats />
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="viewport.isTabletOrBelow">
      <div v-for="player in players" :key="player.id" :class="[$style.item]">
        <div :class="[$style.team]">
          <div :class="[$style.photo]">
            <img src="~@/assets/images/player.png" :alt="player.nickname">
          </div>
          <div :class="[$style.itemInfo]">
            <div>
              <div :class="[$style.nickname]">
                {{ player.nickname }}
              </div>
              <div :class="[$style.name]">
                {{ player.name }}
              </div>
            </div>
            <div>
              <p>{{ player.position }} {{ player.date }}</p>
            </div>
            <div>
              <Stats />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Stats from '~/components/Stats/'

@Component({
  components: {
    Stats
  }
})
export default class Lineup extends Vue {
  get players (): Object {
    return [
      {
        id: 1,
        name: 'Джами Али',
        nickname: 'Jame',
        photo: '',
        position: 'Игрок',
        date: 'с 16.12.2019'
      },
      {
        id: 2,
        name: 'Тимур Тулепов',
        nickname: 'Buster',
        photo: '',
        position: 'Игрок',
        date: 'с 16.12.2019'
      },
      {
        id: 3,
        name: 'Алексей Голубев',
        nickname: 'Qikert',
        photo: '',
        position: 'Игрок',
        date: 'с 16.12.2019'
      },
      {
        id: 4,
        name: 'Санжар Кулиев',
        nickname: 'SANJI',
        photo: '',
        position: 'Игрок',
        date: 'с 16.12.2019'
      },
      {
        id: 5,
        name: 'Даурен Кыстаубаев',
        nickname: 'AdreN',
        photo: '',
        position: 'Игрок',
        date: 'с 16.12.2019'
      }
    ]
  }

  get viewport () {
    return this.$modules.viewport
  }
}
</script>

<style lang="scss" module>
.layer {
  background-color: var(--color-layer);
  margin: 0 -15px 14px;

  transition: background-color $transition-mode;
  will-change: background-color;

  @include breakpoint('tablet') {
    border-radius: 4px;
    margin: 0 0 20px;
    overflow: hidden;
  }
}

td {
  padding: 12px 15px !important;
}

.player {
  align-items: center;
  display: flex;
}

.photo {
  border-radius: 4px;
  height: 45px;
  margin-right: 20px;
  overflow: hidden;
  width: 45px;

  img {
    width: 100%;
  }
}

.nickname {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  margin-bottom: 6px;
}

.name {
  color: var(--color-text-gray);
}

.tdStats {
  display: flex;
  justify-content: space-between;
}

.position {
  margin-bottom: 6px;
}

.date {
  color: var(--color-text-gray);
}

/* Mobile */

.team {
  display: flex;
}

.item {
  padding: 20px;
}

.itemInfo {
  flex: 1 0 auto;
}
</style>
