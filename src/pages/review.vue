<template>
  <div :class="[$style.container]">
    <div :class="[$style.main]">
      <div :class="[$style.layer]">
        <div :class="[$style.cover]" style="background-image: url('~/assets/images/longread/cover.jpg');">
          <div :class="[$style.header]">
            <h1 :class="[$style.title]">
              Мэддисон взорвался зря — обзор Call of Duty: Warzone
            </h1>
            <div :class="[$style.tags]">
              <Tags is-orange />
            </div>
            <div :class="[$style.author]">
              <div :class="[$style.authorImage]">
                <img src="~/assets/images/player.jpg" alt="author">
              </div>
              <div :class="[$style.authorInfo]">
                <nuxt-link to="" :class="[$style.authorName]">
                  Владислав «Machinae» Животнёв
                </nuxt-link>
                <div :class="[$style.material]">
                  <time :class="[$style.materialPub]">27.02.2019, 00:52</time>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div :class="[$style.article]">
          <p>
            10 марта Activision выпустила Call of Duty: Warzone — бесплатную «королевскую битву» на движке прошлогодней
            Modern Warfare. За ночь я провёл в ней около пяти часов, из-за чего едва не проспал рабочую смену. Чем же
            меня так зацепила новая «королевская битва» и стоит ли она вашего внимания?
          </p>
          <p>
            В одном матче Warzone участвуют 150 человек — больше, чем у всех остальных представителей жанра. Карта
            отлично соответствует размеру игрового лобби — плотность событий такая, что на любом отрезке матча заскучать
            просто не получается. Играть можно только в отрядах до трех человек. Вы можете отключить в настройках
            автозаполнение команды и отправиться воевать в одиночку, но против вас по-прежнему будут сражаться дуэты и
            тройки соперников.
          </p>
          <p>
            Все матчи в Warzone начинаются с высадки, которая проходит довольно быстро. Покинув самолет, вы можете
            направить персонажа вертикально вниз, и тот сам откроет парашют буквально в двух метрах над землей.
          </p>
          <p>
            Система брони в Warzone похожа сразу на Fortnite и на Apex Legends. Все игроки стартуют со 100 ед. здоровья
            и тремя слотами под кевларовые пластины. Заполнив все, вы сможете увеличить эффективный запас HP до 250 ед.
            Если пластины сбили, на их место можно будет поставить новые — процесс займет три-четыре секунды. А здоровье
            восстанавливается автоматически, прямо как в обычном мультиплеере Call of Duty: Modern Warfare.
          </p>
          <p>
            Искать лут в Warzone очень просто. Оружие не валяется на земле, как в PUBG, а висит над ней, как в Fortnite,
            — и ярко подсвечивается, а местные сундуки издают гудящий звук, поэтому добраться до них не составляет труда
            . Впрочем, даже не сумев найти ничего в первые секунды после высадки, вы всё равно не окажетесь беззащитны —
            у каждого игрока со старта есть пистолет и две пластины, которые выручат в большинстве ситуаций.
          </p>
          <MaterialFooter />
        </div>
      </div>
    </div>
    <aside :class="[$style.aside]">
      <WidgetReview />
    </aside>
  </div>
</template>

<script lang="ts">
import { Component, mixins, Vue } from 'nuxt-property-decorator'

import Tags from '~/components/Tags/'
import MaterialFooter from '~/components/MaterialFooter'
import WidgetReview from '~/components/WidgetReview'

@Component({
  components: {
    WidgetReview,
    Tags,
    MaterialFooter
  }
})
export default class Review extends mixins(Vue) {}
</script>

<style lang="scss" module>
:root {
  --padding-left: 15px;
  --padding-right: 15px;

  @include breakpoint('tablet') {
    --padding-left: 20px;
    --padding-right: 20px;
    --margin-left: -20px;
    --margin-right: -20px;
  }

  @include breakpoint('desktop') {
    --padding-left: 110px;
    --padding-right: 110px;
    --margin-left: -110px;
    --margin-right: -110px;
  }

  @include breakpoint('desktop', 'wide') {
    --padding-left: 110px;
    --padding-right: 110px;
    --margin-left: -110px;
    --margin-right: -110px;
  }
}

.container {
  @include container();
  margin-top: 20px;
}

.main {
  width: 100%;

  @include breakpoint('desktop') {
    margin-right: 20px;
    max-width: 640px;
  }

  @include breakpoint('desktop', 'wide') {
    max-width: 970px;
  }
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

.aside {
  width: 310px;
}

.cover {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 344px;
  overflow: auto;
  position: relative;

  @include breakpoint('tablet') {
    height: 374px;
  }

  @include breakpoint('desktop') {
    height: 525px;
  }

  img {
    width: 100%;
  }

  &::before {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 29.74%, black 73.44%);
    content: '';
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 2;
  }
}

.header {
  bottom: 0;
  padding-left: var(--padding-left);
  padding-right: var(--padding-right);
  position: absolute;
  right: 0;
  z-index: 3;
}

.title {
  color: white;
  font-size: 24px;
  line-height: 26px;

  @include breakpoint('tablet') {
    font-size: 36px;
    line-height: 42px;
  }
}

.tags {
  margin-bottom: 20px;
}

.author {
  align-items: center;
  display: flex;
  margin-bottom: 10px;

  @include breakpoint('tablet') {
    margin-bottom: 30px;
  }
}

.authorImage {
  height: 40px;
  margin-right: 10px;

  img {
    border-radius: 50%;
    width: 40px;
  }
}

.authorInfo {
  display: flex;
  flex-direction: column;
}

.authorName {
  color: white;
  font-size: 15px;
  line-height: 20px;
  text-decoration: none;

  transition: color $transition;
  will-change: color;

  @include hover() {
    color: var(--color-primary);
  }
}

.material {
  align-items: center;
  display: flex;
}

.materialPub {
  color: var(--color-text-gray);
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  margin-right: 12px;

  transition: color $transition-mode;
  will-change: color;
}

.article {
  padding-left: var(--padding-left);
  padding-right: var(--padding-right);
  position: relative;

  p {
    font-size: 17px;
    line-height: 28px;
  }

  img {
    max-width: 100%;
  }
}
</style>
