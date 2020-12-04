<template>
  <div>
    <div :class="[$style.container]">
      <div :class="[$style.about]">
        <div v-if="viewport.isDesktopOrHigher" :class="[$style.logo]">
          <img src="@/assets/images/team.png" alt="Virtus.Pro">
        </div>
        <div :class="[$style.info]">
          <div :class="[$style.header]">
            <div v-if="viewport.isDesktopOrBellow" :class="[$style.logo]">
              <img src="~/assets/images/team.png" alt="Virtus.Pro">
            </div>
            <h1 :class="[$style.name]">
              Virtus.pro
            </h1>
          </div>
          <div :class="[$style.parameters]">
            <div :class="[$style.group]">
              <div :class="[$style.label]">
                Сайт
              </div>
              <div :class="[$style.value]">
                virtus.pro
              </div>
            </div>
            <div :class="[$style.group]">
              <div :class="[$style.label]">
                Страна
              </div>
              <div :class="[$style.value]">
                Россия
                <div :class="[$style.country]">
                  <svg-icon name="flags/ru" />
                </div>
              </div>
            </div>
            <div :class="[$style.group]">
              <div :class="[$style.label]">
                Основана
              </div>
              <div :class="[$style.value]">
                в 2003 году
              </div>
            </div>
            <div :class="[$style.group]">
              <div :class="[$style.social]">
                <a href="" target="_blank" :class="[$style.socialItem]">
                  <svg-icon name="socials/tw" />
                </a>
                <a href="" target="_blank" :class="[$style.socialItem]">
                  <svg-icon name="socials/vk" />
                </a>
                <a href="" target="_blank" :class="[$style.socialItem]">
                  <svg-icon name="socials/fb" />
                </a>
                <a href="" target="_blank" :class="[$style.socialItem]">
                  <svg-icon name="socials/ig" />
                </a>
              </div>
            </div>
          </div>
          <div :class="[$style.description]">
            <p>Профессиональная киберспортивная организация базирующаяся в России.</p>
          </div>
          <div :class="[$style.disciplines]">
            <div :class="[$style.disciplinesTitle]">
              Команды по дисциплинам:
            </div>
            <div :class="[$style.disciplinesList]">
              <div :class="[$style.disciplinesItem]">
                <div>
                  <svg-icon name="disciplines/dota" />
                </div>
                <div :class="[$style.disciplinesItemTitle]">
                  Virtus.pro
                </div>
              </div>
              <div :class="[$style.disciplinesItem]">
                <div>
                  <svg-icon name="disciplines/dota" />
                </div>
                <div :class="[$style.disciplinesItemTitle]">
                  VP.Prodigy
                </div>
              </div>
              <div :class="[$style.disciplinesItem]">
                <svg-icon name="disciplines/cs" />
              </div>
              <div :class="[$style.disciplinesItem]">
                <svg-icon name="disciplines/pubg" />
              </div>
              <div :class="[$style.disciplinesItem]">
                <svg-icon name="disciplines/lol" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="[$style.container, $style.wrap]">
      <div :class="[$style.main]">
        <Awards :awards="awards" />
      </div>
      <div :class="[$style.aside]">
        <WidgetNews title="Новости организации" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Awards from '~/components/Awards/'
import WidgetNews from '~/components/WidgetNews/'

@Component({
  components: {
    Awards,
    WidgetNews
  }
})
export default class OrganizationPage extends Vue {
  get awards (): Object {
    return [
      {
        id: 1,
        tournament: {
          discipline: 'dota',
          name: 'DreamHack Rotterdam 2019',
          url: '',
          place: 'Роттердам. Нидерланды',
          date: '20.10.2019'
        },
        position: 1,
        prizeAmount: '$25 000',
        prizePool: '$100 000'
      },
      {
        id: 2,
        tournament: {
          discipline: 'dota',
          name: 'DreamHack Rotterdam 2019',
          url: '',
          place: 'Роттердам. Нидерланды',
          date: '20.10.2019'
        },
        position: 2,
        prizeAmount: '$25 000',
        prizePool: '$100 000'
      },
      {
        id: 3,
        tournament: {
          discipline: 'dota',
          name: 'DreamHack Rotterdam 2019',
          url: '',
          place: 'Роттердам. Нидерланды',
          date: '20.10.2019'
        },
        position: 3,
        prizeAmount: '$25 000',
        prizePool: '$100 000'
      },
      {
        id: 4,
        tournament: {
          discipline: 'dota',
          name: 'DreamHack Rotterdam 2019',
          url: '',
          place: 'Роттердам. Нидерланды',
          date: '20.10.2019'
        },
        position: 4,
        prizeAmount: '$25 000',
        prizePool: '$100 000'
      }
    ]
  }

  get viewport () {
    return this.$modules.viewport
  }
}
</script>

<style lang="scss" module>
.container {
  @include container();
  margin-top: 20px;
}

.wrap {
  @include breakpoint('desktop') {
    flex-wrap: nowrap;
  }
}

.about {
  align-items: flex-start;
  background-color: var(--color-layer);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin: 0 -15px 20px;
  padding: 10px;
  transition: background-color $transition-mode;
  width: calc(100% + 30px);
  will-change: background-color;

  @include breakpoint('tablet') {
    margin: 0 0 20px;
    padding: 20px;
    width: 100%;
  }

  @include breakpoint('desktop') {
    flex-direction: row;
    margin: 0 10px 20px;
    padding: 20px;
    width: 100%;
  }
}

.left {
  display: flex;
  margin-bottom: 15px;

  @include breakpoint('tablet') {
    flex-direction: column;
    margin-bottom: 0;
  }
}

.logo {
  height: 80px;
  margin-right: 20px;
  width: 80px;

  @include breakpoint('tablet') {
    height: 70px;
    width: 70px;
  }

  @include breakpoint('desktop') {
    flex: 0 0 auto;
    margin-right: 0;
  }

  img {
    width: 100%;
  }
}

.info {
  width: 100%;

  @include breakpoint('desktop') {
    margin-left: 30px;
    max-width: 528px;
  }

  @include breakpoint('desktop', 'wide') {
    max-width: 640px;
  }
}

.name {
  font-size: 24px;
  line-height: 32px;
  margin: 8px 0 15px;

  @include breakpoint('tablet') {
    font-size: 36px;
    line-height: 42px;
    margin: 0;
  }

  @include breakpoint('desktop') {
    margin: 0 0 15px;
  }
}

.header {
  align-items: center;
  display: flex;

  @include breakpoint('tablet') {
    margin: 0 0 15px;
  }
}

.parameters {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @include breakpoint('tablet') {
    grid-template-columns: repeat(4, 1fr);
  }
}

.group {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-right: 40px;
}

.label {
  color: var(--color-text-gray);
  margin-bottom: 2px;
  opacity: 0.4;
  transition: color $transition-mode;
  will-change: color;
}

.value {
  align-items: center;
  display: flex;
  font-weight: 500;
}

.country {
  height: 14px;
  margin-left: 10px;
  width: 20px;
}

.social {
  display: flex;
  margin-left: -5px;

  @include breakpoint('tablet') {
    margin-top: 5px;
  }
}

.socialItem {
  height: 24px;
  margin: 0 5px;
}

.description {
  border-top: 1px solid var(--color-border);
  margin-top: 14px;
  padding-top: 14px;

  p {
    margin-top: 0;
  }
}

.disciplines {
  border-top: 1px solid var(--color-border);
  margin-top: 14px;
  padding-top: 14px;
}

.disciplinesTitle {
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 15px;
}

.disciplinesList {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -20px;
}

.disciplinesItem {
  align-items: center;
  display: flex;
  font-weight: 500;
  margin-bottom: 20px;

  &:not(:last-child) {
    margin-right: 20px;

    @include breakpoint('tablet') {
      margin-right: 10px;
    }
  }

  svg {
    height: 40px;
    width: 40px;
  }
}

.disciplinesItemTitle {
  margin-left: 10px;
}

.main {
  @include main();
}

.aside {
  @include aside();

  flex: 0 0 auto;
}
</style>
