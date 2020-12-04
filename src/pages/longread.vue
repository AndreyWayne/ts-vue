<template>
  <div :class="[$style.container]">
    <div :class="[$style.layer]">
      <div :class="[$style.cover]" :style="{ 'background-image': 'url(' + image + ')' }">
        <div :class="[$style.header]">
          <h1 :class="[$style.title]">
            50 лучших игр для слабых ПК и ноутбуков — гонки, шутеры, экшены, RPG
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
        <div :class="[$style.content]">
          <p>
            Если вы не обновляли компьютер уже десять лет или у вас старенький ноутбук, но всё равно хочется поиграть в
            крутые игры — мы собрали 50 отличных тайтлов в разных жанрах. Все они запустятся на слабых системах. В
            подборке есть игры для одиночного прохождения, мультиплеерные тайтлы и нестареющая классика.
          </p>
          <h2>Одиночные игры</h2>
          <h3>Hitman: Absolution</h3>
          <figure :class="[$style.wide]">
            <div :class="[$style.image]">
              <img src="~/assets/images/longread/image.jpg" alt="Hitman: Absolution">
            </div>
            <figcaption>Hitman: Absolution | Источник: Steam Workshop</figcaption>
          </figure>
          <p>
            Линейный стелс-экшен от третьего лица про знаменитого убийцу. В отличие от предыдущих частей серии, здесь
            можно замедлять время и убивать врагов пачками за один раз — интересный эксперимент, который пришелся
            игрокам по нраву.
          </p>
          <p>Системные требования: Core 2 Duo 2 ГГц, 2 ГБ оперативной памяти и видеокарта с 512 МБ памяти.</p>
          <h3>Need for Speed: Hot Pursuit</h3>
          <p>
            Одна из лучших частей знаменитого гоночного симулятора. Играть можно как за нелегального любителя, так и за
            полицейского.
          </p>
          <p>Системные требования: Core 2 Duo 2 ГГц, 2 ГБ оперативной памяти и видеокарта с 256 МБ памяти.</p>
          <figure>
            <div :class="[$style.image]">
              <img src="~/assets/images/material.jpg" alt="Bloodseeker">
            </div>
            <figcaption>Bloodseeker | Источник: Steam Workshop</figcaption>
          </figure>
          <p>
            Вторая часть легендарной серии Assassin’s Creed, действие которой разворачивается в Италии в эпоху
            Возрождения. Экшен насыщен геймплейными механиками, а еще он очень большой по продолжительности. На полное
            прохождение можно потратить до 100 часов.
          </p>
          <p>Системные требования: Core 2 Duo 1,8 ГГц, 2 ГБ оперативной памяти и видеокарта с 256 МБ памяти.</p>
          <ArticleGame />
          <p>
            Лассе MATUMBAMAN Урпалайнен прокомментировал свой переход в состав Team Secret по Dota 2. Он отметил, что
            увидел в предложении Клемента Puppey Иванова второй шанс добиться успеха в киберспорте.
          </p>
          <h3>H3 Список буллиты</h3>
          <ul>
            <li>Virtus.pro;</li>
            <li>Natus Vincere;</li>
            <li>Fnatic;</li>
            <li>Team Vitality;</li>
            <li>Winstrike Team;</li>
            <li>UNITED;</li>
          </ul>
          <h3>H3 Список номерной</h3>
          <ol>
            <li>Расписание и результаты OGA Dota PIT 2020 Online</li>
            <li>Матч дня: Team Secret vs Virtus.pro — 18:00 мск</li>
            <li>Olsior про слухи о заменах в NAVI: «Ребилдинг в такой период — отличная идея»</li>
            <li>«Кайф, я просто ничего не делаю весь матч»</li>
          </ol>
          <p>
            ESL One Los Angeles 2020 — Online Championship для команд из Европы и СНГ проходит с 4 по 19 апреля.
            Ознакомиться с ходом турнира можно в
            <nuxt-link to="tournament" target="_blank">
              нашем репортаже.
            </nuxt-link>
          </p>
          <p>
            <span>
              <span class="flag"><svg-icon name="flags/fi" /></span>
              Лассе <nuxt-link to="player" target="_blank">MATUMBAMAN</nuxt-link> Урпалайнен
            </span>
            прокомментировал свой переход в состав
            <nuxt-link to="team">
              Team Secret
            </nuxt-link>
            по Dota 2. Он отметил, что увидел в предложении
            <span>
              <span class="flag"><svg-icon name="flags/ee" /></span>
              Клемента <nuxt-link to="player" target="_blank">Puppey</nuxt-link> Иванова
            </span>
            второй шанс добиться успеха в киберспорте.
          </p>
          <ArticleCollapse />
          <ArticleTable />
          <ArticleQuotes />
          <ArticleIncut />
          <ArticleCompare />
          <ArticleReview />
        </div>
        <MaterialFooter />
        <div :class="[$style.pinned]">
          <div :class="[$style.sticky]">
            <div>
              <div :class="[$style.item, $style.like]">
                <div>65</div>
                <svg-icon name="like" />
              </div>
              <div :class="[$style.item, $style.dislike]">
                <svg-icon name="dislike" />
                <div>65</div>
              </div>
            </div>
            <div :class="[$style.comments]">
              <div :class="[$style.notice]">
                12
              </div>
              <svg-icon name="comment" />
              <div>44</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, mixins, Vue } from 'nuxt-property-decorator'

import ArticleCollapse from '~/components/ArticleCollapse/'
import ArticleGame from '~/components/ArticleGame/'
import ArticleTable from '~/components/ArticleTable/'
import ArticleQuotes from '~/components/ArticleQuotes/'
import ArticleIncut from '~/components/ArticleIncut/'
import ArticleCompare from '~/components/ArticleCompare/'
import ArticleReview from '~/components/ArticleReview/'

import Tags from '~/components/Tags/'
import MaterialFooter from '~/components/MaterialFooter'

@Component({
  components: {
    ArticleCollapse,
    ArticleGame,
    ArticleTable,
    ArticleCompare,
    ArticleReview,
    ArticleQuotes,
    ArticleIncut,
    Tags,
    MaterialFooter
  }
})
export default class LongreadPage extends mixins(Vue) {
  get image () {
    return ''
    // return require('~/assets/images/longread/cover.jpg')
  }
}
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
    --padding-left: 220px;
    --padding-right: 330px;
    --margin-left: -220px;
    --margin-right: -330px;
  }
}

.container {
  @include container();
  margin-top: 20px;
}

.layer {
  background-color: var(--color-layer);
  border: 1px solid var(--color-border-transparent);
  margin: 0 0 14px;
  max-width: 1300px;

  transition: background-color $transition-mode, border $transition-mode;
  width: 100%;
  will-change: background-color, border;

  @include breakpoint('tablet') {
    border-radius: 4px;
    margin: 0 0 20px;
  }
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
}

.content {
  font-family: Lora, serif;

  p {
    font-size: 17px;
    line-height: 28px;
  }

  ul,
  ol {
    font-size: 17px;
    line-height: 28px;
  }

  img {
    max-width: 100%;
  }
}

figure {
  margin: 0;
}

.wide {
  .image {
    margin-left: var(--margin-left);
    margin-right: var(--margin-right);
  }
}

figcaption {
  color: color('gray', 'dark');
  font-size: 13px;
  line-height: 18px;
  margin-top: 10px;
}

.pinned {
  display: none;

  @include breakpoint('desktop') {
    display: flex;
    height: 100%;

    position: absolute;
    right: 24px;
    top: 0;
    z-index: 99;
  }

  @include breakpoint('desktop', 'wide') {
    right: 236px;
  }
}

.sticky {
  height: fit-content;
  position: sticky;
  top: 130px;
}

.item {
  align-items: center;
  background-color: var(--color-pinned);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  justify-content: center;
  line-height: 20px;
  min-height: 40px;
  padding: 12px 0 10px;

  transition: background-color $transition-mode, color $transition;
  width: 48px;
  will-change: background-color, color;

  @include hover() {
    color: white;

    svg {
      stroke: white;
    }
  }

  svg {
    transition: stroke $transition;
    will-change: stroke;
  }
}

.item.active {
  svg {
    stroke: white;
  }
}

.like {
  border-radius: 40px 40px 0 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  color: var(--color-green);
  margin-bottom: 2px;

  @include hover() {
    background-color: var(--color-green);
  }

  svg {
    margin-top: 5px;
    stroke: var(--color-green);
  }
}

.dislike {
  border-radius: 0 0 40px 40px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  color: var(--color-red);

  @include hover() {
    background-color: var(--color-red);
  }

  svg {
    margin-bottom: 5px;
    stroke: var(--color-red);
  }
}

.like.active {
  background-color: var(--color-green);
}

.dislike.active {
  background-color: var(--color-red);
}

.comments {
  align-items: center;
  background-color: var(--color-pinned);
  border-radius: 40px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  color: var(--color-text-gray);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  justify-content: center;
  line-height: 20px;
  margin-top: 10px;
  min-height: 48px;
  padding: 19px 0 12px;
  position: relative;

  transition: background-color $transition-mode, color $transition-mode;
  width: 48px;
  will-change: background-color, color;

  @include hover() {
    color: var(--color-primary);

    svg {
      fill: var(--color-primary);
    }
  }

  svg {
    fill: var(--color-text-gray);
    margin-bottom: 5px;

    transition: fill $transition;
    will-change: fill;
  }
}

.notice {
  background-color: var(--color-primary);
  border-radius: 40px;
  color: white;
  font-size: 12px;
  height: 16px;
  line-height: 13px;
  padding: 2px 7px;
  position: absolute;
  right: -4px;
  top: -6px;
}
</style>
