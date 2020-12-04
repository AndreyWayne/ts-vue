<template>
  <div :class="[$style.container]">
    <div :class="[$style.main]">
      <div :class="[$style.layer]">
        <div :class="[$style.header]">
          <div :class="[$style.breadcrumbs]">
            <a href="" :class="[$style.breadcrumbsItem]">Главная</a>
            <span :class="[$style.breadcrumbsLine]">/</span>
            <a href="" :class="[$style.breadcrumbsItem]">Блоги</a>
          </div>
          <h1 :class="[$style.title]">
            Мобильность выходит на первый план. Как играют капитаны лучших команд
          </h1>
          <div :class="[$style.tags]">
            <Tags />
          </div>
        </div>
        <div :class="[$style.author]">
          <div :class="[$style.authorImage]">
            <img src="~/assets/images/player.jpg" alt="author">
          </div>
          <div :class="[$style.authorInfo]">
            <nuxt-link to="" :class="[$style.authorName]">
              Neo
            </nuxt-link>
            <div :class="[$style.material]">
              <time :class="[$style.materialPub]">27.02.2019, 00:52</time>
              <div :class="[$style.materialComments]">
                <svg-icon name="comment" />
                <div>44</div>
              </div>
            </div>
          </div>
        </div>
        <div :class="[$style.article]">
          <p>
            Лассе MATUMBAMAN Урпалайнен прокомментировал свой переход в состав Team Secret по Dota 2. Он отметил, что
            увидел в предложении Клемента Puppey Иванова второй шанс добиться успеха в киберспорте.
          </p>
          <figure>
            <div :class="[$style.image]">
              <img src="~/assets/images/material.jpg" alt="Bloodseeker">
            </div>
            <figcaption>Bloodseeker | Источник: Steam Workshop</figcaption>
          </figure>
          <p>
            4 ноября 2019 года MATUMBAMAN присоединился к Team Secret. В составе он заменил Чжэн MidOne Йек Ная. Финский
            игрок занял позицию керри, а Михал Nisha Янковски перешел на среднюю линию.
          </p>
          <p>
            С 18 января Secret участвует в DreamLeague Leipzig Major. Коллектив вышел в плей-офф с первого места в
            группе, в первом раунде верхней сетки победил Fnatic и 23 февраля сыграет против Alliance. Встреча
            запланирована на 21:30 мск.
          </p>
          <p>
            «После того как меня кикнули из Liquid, я не знал, что мне делать дальше, но через пару дней понял, что хочу
            сыграть на TI. Было несколько команд, с которыми я мог сыграть в квалификации, и я выбрал Chaos. Это был
            хороший опыт, были взлеты и падения. TI стал для нас первым турниром, поэтому мы не ожидали многого. В итоге
            мы не очень хорошо выступили на TI.
          </p>
          <p>
            Когда Puppey позвал меня в Secret, я был в восторге — я понял, что это мой второй шанс. Эта команда
            отличается динамикой игры, стратегиями. У Puppey всегда в запасе много разных стратегий, он постоянно
            придумывает что-то новое, так же делал и KuroKy в Liquid».
          </p>
        </div>
        <MaterialFooter />
        <div v-if="viewport.isTabletOrHigher" :class="[$style.also]">
          <div :class="[$style.alsoTitle]">
            Другие посты автора
          </div>
          <div>
            <PostSimilar />
          </div>
        </div>
      </div>
      <div v-if="viewport.isMobile" :class="[$style.carousel]">
        <CarouselAuthor />
      </div>
    </div>
    <div v-if="viewport.isDesktopOrHigher" :class="[$style.aside]">
      <WidgetNews title="Главные новости" />
      <WidgetNotice />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, mixins, Vue } from 'nuxt-property-decorator'
import { ViewportMixin } from '@/mixins'

import MaterialFooter from '@/components/MaterialFooter'
import Tags from '@/components/Tags'
import WidgetNews from '@/components/WidgetNews'
import WidgetNotice from '@/components/WidgetNotice'
import PostSimilar from '@/components/PostSimilar'
import CarouselAuthor from '@/components/CarouselAuthor'

@Component({
  components: {
    Tags,
    MaterialFooter,
    WidgetNews,
    WidgetNotice,
    PostSimilar,
    CarouselAuthor
  }
})
export default class Material extends mixins(Vue, ViewportMixin) {
  get viewport () {
    return this.$modules.viewport
  }
}
</script>

<style lang="scss" module>
.container {
  @include container();
  margin-top: 20px;

  @include breakpoint('desktop') {
    flex-wrap: nowrap;
  }
}

.main {
  @include main();
}

.layer {
  background-color: var(--color-layer);
  border: 1px solid var(--color-border-transparent);
  margin: 0 -15px 14px;
  padding: 12px 14px 0;

  transition: background-color $transition-mode, border $transition-mode;
  will-change: background-color, border;

  @include breakpoint('tablet') {
    border-radius: 4px;
    margin: 0 0 20px;
    padding: 35px 20px;
  }

  @include breakpoint('desktop', 'wide') {
    padding: 35px 110px;
  }
}

.aside {
  @include aside();
}

.header > .tags {
  display: none;

  @include breakpoint('tablet') {
    display: flex;
    margin-bottom: 20px;
  }
}

.breadcrumbs {
  color: color('gray', 'dark');
  display: flex;
  font-size: 13px;
  line-height: 18px;
  margin-bottom: 8px;
}

.breadcrumbsItem {
  color: color('gray', 'dark');
  text-decoration: none;

  transition: color $transition;
  will-change: color;

  @include hover() {
    color: var(--color-primary-secondary);
  }
}

.breadcrumbsLine {
  padding: 0 6px;
}

.title {
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 10px;
  margin-top: 0;

  @include breakpoint('tablet') {
    font-size: 36px;
    line-height: 42px;
    margin-bottom: 20px;
  }
}

.tags {
  display: flex;
}

.tag {
  border: 1px solid var(--color-border);
  border-radius: 3px;
  color: var(--color-primary);
  cursor: pointer;
  font-size: 12px;
  line-height: 18px;
  padding: 3px 8px;

  transition: border $transition;
  will-change: border;

  @include hover() {
    border: 1px solid var(--color-primary);
  }
}

.author {
  border-bottom: 1px solid var(--color-border-transparent);
  border-top: 1px solid var(--color-border-transparent);
  display: flex;
  margin-bottom: 10px;
  padding: 10px 0;

  @include breakpoint('tablet') {
    margin-bottom: 25px;
    padding: 14px 0;
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
  color: var(--color-text);
  font-size: 15px;
  line-height: 20px;
  text-decoration: none;

  transition: color $transition-mode;
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

.materialComments {
  align-items: center;
  color: var(--color-text-gray);
  display: flex;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;

  svg {
    fill: var(--color-text-gray);
    margin-right: 2px;
  }
}

.article {
  p {
    line-height: 26px;
  }

  img {
    width: 100%;
  }

  figure {
    margin: 0;
  }

  figcaption {
    color: color('gray', 'dark');
    font-size: 13px;
    line-height: 18px;
    margin-top: 10px;
  }
}

.banner {
  background-color: #2d3641;
  height: 90px;
  width: 100%;
}

.also {
  margin-top: 20px;
}

.alsoTitle {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 26px;
  margin-bottom: 22px;
  text-transform: uppercase;
}

.carousel {
  margin-left: -25px;
  margin-right: -25px;
}
</style>
