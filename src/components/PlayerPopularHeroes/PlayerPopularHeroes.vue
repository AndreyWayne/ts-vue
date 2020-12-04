<template>
  <div>
    <div :class="[$style.header]">
      <div :class="[$style.title]">
        Популярные герои
      </div>
    </div>
    <div>
      <div :class="[$style.layer]" style="overflow: hidden;">
        <table>
          <thead>
            <tr>
              <td>Герой</td>
              <td>Матчей</td>
              <td>Винрейт</td>
              <td>KDA</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div :class="[$style.hero]">
                  <div :class="[$style.heroImage]">
                    <img src="~/assets/images/heroes/brewmaster.png" alt="brewmaster">
                  </div>
                  <div>
                    <div :class="[$style.heroName]">
                      Brewmaster
                    </div>
                    <div :class="[$style.heroPeriod]">
                      6 дней назад
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div>217</div>
                <div :class="[$style.line, $style.green]" style="width: 58%;" />
              </td>
              <td>
                <div>71%</div>
                <div :class="[$style.line, $style.green]" style="width: 58%;" />
              </td>
              <td>
                <div>4.50</div>
                <div :class="[$style.line, $style.green]" style="width: 58%;" />
              </td>
            </tr>
          </tbody>
        </table>
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

import Button from '~/components/Button/'

@Component({
  components: {
    Button
  }
})
export default class PlayerPopularHeroes extends mixins(Vue) {}
</script>

<style lang="scss" module>
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

.hero {
  align-items: center;
  display: flex;
}

.heroName {
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  margin-bottom: 12px;
}

.heroPeriod {
  color: var(--color-text-gray);
  line-height: 1;
}

.heroImage {
  margin-right: 20px;

  img {
    border-radius: 4px;
    height: 45px;
    overflow: hidden;
    width: 45px;
  }
}

.line {
  background-color: var(--color-gray);
  border-radius: 10px;
  height: 10px;
}

.line.green {
  background-color: var(--color-green);
}

.footer {
  padding: 10px 25px;
}
</style>
