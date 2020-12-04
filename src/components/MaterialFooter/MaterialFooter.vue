<template>
  <div>
    <div :class="[$style.tools]">
      <div :class="[$style.toolsLeft]">
        <Tags />
      </div>
      <div :class="[$style.toolsRight]">
        <div :class="[$style.share]">
          <div :class="[$style.shareIcon]">
            <svg-icon name="share" />
          </div>
          <div :class="[$style.sharePopup]">
            <div :class="[$style.shareItem]">
              <svg-icon name="socials/tw" />
            </div>
            <div :class="[$style.shareItem]">
              <svg-icon name="socials/vk" />
            </div>
            <div :class="[$style.shareItem]">
              <svg-icon name="socials/fb" />
            </div>
            <div :class="[$style.shareItem]">
              <svg-icon name="socials/ig" />
            </div>
            <div :class="[$style.shareItem]">
              <svg-icon name="socials/tg" />
            </div>
            <div :class="[$style.shareItem]">
              <svg-icon name="socials/wa" />
            </div>
          </div>
        </div>
        <div :class="[$style.rating]">
          <div :class="[$style.ratingItem, $style.like]">
            <svg-icon name="like" />
          </div>
          <div :class="[$style.ratingCount, $style.isHigh]">
            137
          </div>
          <div :class="[$style.ratingItem, $style.dislike]">
            <svg-icon name="dislike" />
          </div>
        </div>
      </div>
    </div>
    <div :class="[$style.footer]">
      <div :class="[$style.footerLeft]">
        <div :class="[$style.source]">
          Источник
          <a href="" :class="[$style.sourceLink]" target="_blank">vk.com/igromir</a>
        </div>
      </div>
      <div :class="[$style.footerRight]">
        <div :class="[$style.footerTitle]">
          Понравилась статья?
        </div>

        <Button is-orange :with-border="false">
          Задонатить
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Tags from '~/components/Tags'
import Button from '~/components/Button'

@Component({
  components: {
    Tags,
    Button
  }
})
export default class MaterialFooter extends Vue {}
</script>

<style lang="scss" module>
.tools {
  border-bottom: 1px solid var(--color-border-transparent);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 24px;

  @include breakpoint('tablet') {
    align-items: center;
    flex-direction: row;
  }
}

.toolsLeft {
  margin-bottom: 30px;

  @include breakpoint('tablet') {
    margin-bottom: 0;
  }
}

.toolsRight {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.share {
  cursor: pointer;
  display: flex;
  position: relative;

  @include breakpoint('tablet') {
    margin-right: 20px;
  }

  @include hover() {
    .sharePopup {
      opacity: 1;
      visibility: visible;
    }
  }
}

.shareIcon {
  @include hover() {
    rect {
      fill: var(--color-primary);
    }

    path {
      fill: white;
    }
  }

  rect {
    fill: transparent;
    stroke: var(--color-primary);

    transition: fill $transition;
    will-change: fill;
  }

  path {
    fill: var(--color-primary);

    transition: fill $transition;
    will-change: fill;
  }
}

.sharePopup {
  background-color: var(--color-layer);
  border-radius: 4px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  left: 0;
  opacity: 0;
  padding: 5px 6px;
  position: absolute;
  top: 25px;
  transition: opacity $transition;
  visibility: hidden;
  will-change: opacity;
  z-index: 2;
}

.shareItem {
  display: flex;

  &:not(:last-child) {
    margin-right: 10px;
  }
}

.rating {
  align-items: center;
  display: flex;
}

.ratingItem {
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 30px;
  justify-content: center;
  transition: background-color $transition;
  width: 30px;
  will-change: background-color;

  @include hover() {
    svg {
      stroke: white;
    }
  }

  svg {
    transition: stroke $transition;
    will-change: stroke;
  }
}

.ratingItem.active {
  svg {
    stroke: white;
  }
}

.like {
  padding-bottom: 1px;

  @include hover() {
    background-color: var(--color-green);
  }

  svg {
    stroke: var(--color-green);
  }
}

.dislike {
  padding-right: 1px;
  padding-top: 2px;

  @include hover() {
    background-color: var(--color-red);
  }

  svg {
    stroke: var(--color-red);
  }
}

.like.active {
  background-color: var(--color-green);
}

.dislike.active {
  background-color: var(--color-red);
}

.ratingCount {
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;

  padding: 0 12px;

  text-align: center;
}

.isHigh {
  color: var(--color-green);
}

.isLow {
  color: var(--color-green);
}

.source {
  font-size: 15px;
  line-height: 20px;
  opacity: 0.5;
}

.sourceLink {
  color: var(--color-text);
  text-decoration: none;
  transition: color $transition;
  will-change: color;

  @include hover() {
    color: var(--color-primary-secondary);
  }
}

.footer {
  border-bottom: 1px solid var(--color-border-transparent);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px 0;

  @include breakpoint('tablet') {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
}

.footerLeft {
  margin-bottom: 14px;

  @include breakpoint('tablet') {
    margin-bottom: 0;
  }
}

.footerRight {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.footerTitle {
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  margin-right: 10px;
}
</style>
