<template>
  <article :class="[$style.wrapper]">
    <div :class="[$style.article]">
      <nuxt-link to="blogs/material" :class="[$style.image]">
        <img src="~/assets/images/blog.jpg" alt="Лидеры Counter-Strike: капитан BIG Фатих gob b Дейк">
      </nuxt-link>
      <div :class="[$style.content]">
        <div>
          <div :class="[$style.header]">
            <div>
              <nuxt-link to="" :class="[$style.author]">
                <img src="~/assets/images/player.jpg" alt="CreatoR-" :class="[$style.authorAvatar]">
                <div :class="[$style.authorNickname]">
                  CreatoR-
                </div>
              </nuxt-link>
            </div>
            <div>
              <Tags orange />
            </div>
          </div>
          <h1 :class="[$style.title]">
            <nuxt-link to="blogs/material" :class="[$style.link]">
              Лидеры Counter-Strike: капитан BIG Фатих gob b Дейк
            </nuxt-link>
          </h1>
        </div>
        <div :class="[$style.footer]">
          <div :class="[$style.date]">
            23 Июня 2018, 15:34
          </div>
          <div :class="[$style.footerRight]">
            <div :class="[$style.comments]">
              <svg-icon name="comment" />
              <div>50</div>
            </div>
            <div :class="[$style.rating]">
              <svg-icon name="rating" />
              <div>20</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Tags from '@/components/Tags'

@Component({
  components: {
    Tags
  }
})
export default class Blog extends Vue {}
</script>

<style lang="scss" module>
.wrapper {
  padding: 10px;
  width: 100%;

  @include breakpoint('mobile', 'wide') {
    width: 50%;
  }

  @include breakpoint('desktop', 'wide') {
    width: 33.33%;
  }
}

.article {
  background-color: var(--color-layer);
  border-radius: 4px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  height: 100%;
  overflow: hidden;
  transition: background-color $transition-mode, box-shadow $transition;
  width: 100%;
  will-change: background-color, box-shadow;

  @include hover() {
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.5);
  }
}

.content {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  margin-top: -56.25%;
  padding: calc(56.25% + 15px) 20px 25px;
}

.header {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.image {
  display: flex;
  padding-bottom: 56.25%;
  position: relative;

  img {
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}

.author {
  align-items: center;

  color: var(--color-text);

  display: flex;

  font-size: 13px;
  font-weight: 500;
  line-height: 18px;

  text-decoration: none;

  transition: color $transition;
  will-change: color;

  @include hover() {
    color: var(--color-primary);
  }
}

.authorAvatar {
  border-radius: 50%;
  height: 24px;
  margin-right: 8px;
  width: 24px;
}

.title {
  font-size: 21px;
  line-height: 26px;
  margin: 6px 0 16px;
}

.link {
  color: var(--color-text);

  text-decoration: none;
  transition: color $transition;
  will-change: color;

  @include hover() {
    color: var(--color-text);
  }
}

.footer {
  align-items: center;
  display: flex;
  font-size: 12px;
  justify-content: space-between;
}

.footerRight {
  display: flex;
}

.date {
  color: #8a8a8a;

  font-weight: 500;
  line-height: 13px;
}

.comments {
  align-items: center;
  color: var(--color-text-gray);
  display: flex;

  margin-right: 6px;

  transition: color $transition-mode;
  will-change: color;

  svg {
    fill: var(--color-text-gray);
    margin-right: 4px;

    transition: fill $transition-mode;
    will-change: fill;
  }
}

.rating {
  align-items: center;
  color: var(--color-text-gray);
  display: flex;

  transition: color $transition-mode;
  will-change: color;

  svg {
    fill: var(--color-text-gray);
    margin-right: 4px;

    transition: fill $transition;
    will-change: fill;
  }

  svg > path {
    stroke: var(--color-layer);
    stroke-width: 2;
  }
}

.ratingHigh {
  color: var(--color-green);

  svg {
    fill: var(--color-green);
  }
}

.ratingLow {
  color: var(--color-red);

  svg {
    fill: var(--color-red);
  }
}
</style>
