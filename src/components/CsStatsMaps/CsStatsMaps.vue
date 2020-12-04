<template>
  <div>
    <div :class="[$style.header]">
      <div :class="[$style.title]">
        Винрейт по картам
      </div>
    </div>
    <div>
      <div :class="[$style.layer]">
        <table v-if="viewport.isTabletOrHigher">
          <thead>
            <tr>
              <td>Карта</td>
              <td>Винрейт</td>
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
            <tr>
              <td>
                <div :class="[$style.map]">
                  <div :class="[$style.logo]">
                    <img src="~@/assets/images/player.jpg" alt="Overpass">
                  </div>
                  <div :class="[$style.name]">
                    Overpass
                  </div>
                </div>
              </td>
              <td>100 %</td>
              <td>
                <Stats />
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="viewport.isTabletOrBelow">
          <div :class="[$style.item]">
            <div :class="[$style.logo]">
              <img src="~@/assets/images/player.jpg" alt="Overpass">
            </div>
            <div :class="[$style.itemInfo]">
              <div :class="[$style.name]">
                Overpass
              </div>
              <div>100 %</div>
              <div>
                <Stats />
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
import { Component, mixins, Vue } from 'nuxt-property-decorator'

import Stats from '~/components/Stats/'
import Button from '~/components/Button/'

@Component({
  components: {
    Stats,
    Button
  }
})
export default class CsStatsMaps extends mixins(Vue) {
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
  margin: 0 -15px 14px;

  transition: background-color $transition-mode, border $transition-mode;
  will-change: background-color, border;

  @include breakpoint('tablet') {
    border-radius: 4px;
    margin: 0 0 20px;
  }
}

.tdStats {
  display: flex;
  justify-content: space-between;
}

.map {
  align-items: center;
  display: flex;
}

.logo {
  margin-right: 20px;

  img {
    height: 45px;
    width: 45px;
  }
}

.name {
  font-weight: 500;
}

.item {
  border-bottom: 2px solid var(--color-layer);
  display: flex;
  padding: 25px 10px;
}

.itemInfo {
  flex: 1 0 auto;
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
