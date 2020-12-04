<template>
  <div :class="[$style.block]">
    <div :class="[$style.header]">
      <div :class="[$style.headerTitle]">
        Набирает популярность
      </div>
      <div :class="[$style.headerRight]">
        <Button is-black>
          Написать пост
        </Button>
      </div>
    </div>
    <div :class="[$style.carousel]">
      <div :class="[$style.list]">
        <div :class="[$style.items]">
          <div :class="[$style.item]">
            <nuxt-link to="" :class="[$style.image]">
              <img src="~/assets/images/blog.jpg" alt="Турнир без миражей и становление broky">
            </nuxt-link>
            <div :class="[$style.category]">
              <Tags is-black />
            </div>
            <nuxt-link to="" :class="[$style.title]">
              <div>Турнир без миражей и становление broky: 8 итогов ESL One New York</div>
            </nuxt-link>
          </div>
          <div :class="[$style.item]">
            <nuxt-link to="" :class="[$style.image]">
              <img src="~/assets/images/blog.jpg" alt="Турнир без миражей и становление broky">
            </nuxt-link>
            <div :class="[$style.category]">
              <Tags is-black />
            </div>
            <nuxt-link to="" :class="[$style.title]">
              <div>Турнир без миражей и становление broky: 8 итогов ESL One New York</div>
            </nuxt-link>
          </div>
          <div :class="[$style.item]">
            <nuxt-link to="" :class="[$style.image]">
              <img src="~/assets/images/blog.jpg" alt="Турнир без миражей и становление broky">
            </nuxt-link>
            <div :class="[$style.category]">
              <Tags is-black />
            </div>
            <nuxt-link to="" :class="[$style.title]">
              <div>Турнир без миражей и становление broky: 8 итогов ESL One New York</div>
            </nuxt-link>
          </div>
          <div :class="[$style.item]">
            <nuxt-link to="" :class="[$style.image]">
              <img src="~/assets/images/blog.jpg" alt="Турнир без миражей и становление broky">
            </nuxt-link>
            <div :class="[$style.category]">
              <Tags is-black />
            </div>
            <nuxt-link to="" :class="[$style.title]">
              <div>Турнир без миражей и становление broky: 8 итогов ESL One New York</div>
            </nuxt-link>
          </div>
          <div :class="[$style.item]">
            <nuxt-link to="" :class="[$style.image]">
              <img src="~/assets/images/blog.jpg" alt="Турнир без миражей и становление broky">
            </nuxt-link>
            <div :class="[$style.category]">
              <Tags is-black />
            </div>
            <nuxt-link to="" :class="[$style.title]">
              <div>Турнир без миражей и становление broky: 8 итогов ESL One New York</div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div>
        <div :class="[$style.arrows]">
          <div :class="[$style.arrow, $style.arrowLeft]">
            <svg-icon name="arrow" />
          </div>
          <div :class="[$style.arrow, $style.arrowRight]">
            <svg-icon name="arrow" />
          </div>
        </div>
        <div :class="[$style.dots]">
          <div :class="[$style.dot, $style.dotActive]" />
          <div :class="[$style.dot]" />
          <div :class="[$style.dot]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Tags from '@/components/Tags'
import Button from '@/components/Button'

@Component({
  components: {
    Tags,
    Button
  }
})
export default class WidgetPlayer extends Vue {}
</script>

<style lang="scss" module>
.block {
  background-color: var(--color-bg-popular);
  border-radius: 4px;
  margin: 10px;
  overflow: hidden;
  padding: 16px 0 14px 15px;
  position: relative;

  transition: background-color $transition-mode;
  width: 100%;
  will-change: background-color;

  @include breakpoint('tablet') {
    padding: 9px 50px 30px 17px;
  }

  @include breakpoint('desktop', 'wide') {
    padding: 9px 110px 30px;
  }

  &::after {
    background: linear-gradient(270deg, var(--color-bg-popular) 15.45%, rgba(255, 209, 166, 0) 100%);
    content: '';
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    transition: background $transition;
    width: 24px;
    will-change: background;
    z-index: 3;

    @include breakpoint('tablet') {
      right: 50px;
    }

    @include breakpoint('desktop', 'wide') {
      right: 110px;
    }
  }
}

.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.headerTitle {
  color: var(--color-text);
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 26px;
  text-transform: uppercase;
}

.headerRight {
  display: none;

  @include breakpoint('tablet') {
    display: flex;
    position: relative;
    z-index: 4;
  }
}

.carousel {
  display: flex;
  flex-direction: column;
  position: relative;

  @include breakpoint('tablet') {
    padding-left: 46px;
  }

  @include breakpoint('desktop', 'wide') {
    padding-left: 0;
  }
}

.list {
  height: 205px;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.items {
  display: flex;
  position: absolute;
  z-index: 3;
}

.arrows {
  display: none;

  @include breakpoint('tablet') {
    display: flex;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 2;
  }
}

.arrow {
  align-items: center;
  background-color: var(--color-text);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 26px;
  justify-content: center;
  position: absolute;
  top: 52px;
  transition: background-color $transition;
  width: 26px;
  will-change: background-color;

  @include hover() {
    background-color: var(--color-primary);
  }

  svg {
    stroke: var(--color-bg-popular);
    transition: stroke $transition;
    will-change: stroke;
  }
}

.arrowLeft {
  @include breakpoint('tablet') {
    left: 0;
  }

  @include breakpoint('desktop', 'wide') {
    left: -46px;
  }
}

.arrowRight {
  @include breakpoint('tablet') {
    right: -40px;
  }

  @include breakpoint('desktop', 'wide') {
    right: -46px;
  }

  svg {
    transform: rotate(180deg);
  }
}

.dots {
  align-items: center;
  display: flex;
  justify-content: center;
  padding-right: 25px;
  padding-top: 30px;

  @include breakpoint('tablet') {
    display: none;
  }
}

.dot {
  border: 1px solid var(--color-text);
  border-radius: 50%;
  cursor: pointer;
  height: 8px;
  margin: 0 4px;
  transition: opacity 0.3s ease;
  width: 8px;
}

.dotActive {
  background-color: var(--color-text);
}

.item {
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 200px;

  &:last-child {
    z-index: 3;
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
}

.image {
  margin-bottom: 5px;

  img {
    width: 100%;
  }
}

.category {
  display: flex;
  margin-bottom: 5px;
}

.title {
  color: var(--color-text);
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
</style>
