<template>
  <div :class="[$style.swipe]">
    <div
      v-if="!Step1"
      :class="[$style.cover]"
      :style="{ 'background-image': `url(' ${require('~/assets/images/pic3.jpg')} ')` }"
    >
      <div>
        <div :class="[$style.title]">
          Каким героем играть сегодня?
        </div>
        <div>Вот такой вот контент</div>
      </div>
      <div @click="onStep1">
        <Button is-orange :with-border="false">
          Начать
        </Button>
      </div>
    </div>
    <div v-if="!Step2" :class="[$style.swipeList]">
      <div
        :class="[$style.swipePhoto]"
        :style="{ 'background-image': `url(' ${require('@/assets/images/pic3.jpg')} ')` }"
      >
        <div :class="[$style.swipeTools]">
          <div :class="[$style.swipeButton, $style.like]" @click="onStep2">
            <svg-icon name="like" />
          </div>
          <div :class="[$style.swipeButton, $style.dislike]" @click="onStep2">
            <svg-icon name="dislike" />
          </div>
        </div>
      </div>
    </div>
    <div :class="[$style.swipeResult]">
      <div :class="[$style.swipeHeader]">
        <div :class="[$style.title]">
          Результаты
        </div>
      </div>
      <div>
        <div :class="[$style.swipeItem]">
          <div :class="[$style.swipeItemPhoto]">
            <div :class="[$style.swipeItemPosition]">
              1
            </div>
            <img src="~/assets/images/pic3.jpg" alt="Вариант 1">
          </div>
          <div :class="[$style.swipeItemRight]">
            <div>Мясник из Квойджа</div>
            <div :class="[$style.swipeItemResult]">
              <div :class="[$style.swipeItemInfo, $style.swipeItemInfoLike]">
                <svg-icon name="like" />
                <div>135</div>
              </div>
              <div :class="[$style.swipeItemInfo, $style.swipeItemInfoDislike]">
                <svg-icon name="dislike" />
                <div>777</div>
              </div>
            </div>
          </div>
        </div>
        <div :class="[$style.swipeItem]">
          <div :class="[$style.swipeItemPhoto]">
            <div :class="[$style.swipeItemPosition]">
              2
            </div>
            <img src="~/assets/images/pic3.jpg" alt="Вариант 1">
          </div>
          <div :class="[$style.swipeItemRight]">
            <div>Мясник из Квойджа</div>
            <div :class="[$style.swipeItemResult]">
              <div :class="[$style.swipeItemInfo, $style.swipeItemInfoLike]">
                <svg-icon name="like" />
                <div>135</div>
              </div>
              <div :class="[$style.swipeItemInfo, $style.swipeItemInfoDislike]">
                <svg-icon name="dislike" />
                <div>777</div>
              </div>
            </div>
          </div>
        </div>
        <div :class="[$style.swipeItem]">
          <div :class="[$style.swipeItemPhoto]">
            <div :class="[$style.swipeItemPosition]">
              3
            </div>
            <img src="~/assets/images/pic3.jpg" alt="Вариант 1">
          </div>
          <div :class="[$style.swipeItemRight]">
            <div>Мясник из Квойджа</div>
            <div :class="[$style.swipeItemResult]">
              <div :class="[$style.swipeItemInfo, $style.swipeItemInfoLike]">
                <svg-icon name="like" />
                <div>135</div>
              </div>
              <div :class="[$style.swipeItemInfo, $style.swipeItemInfoDislike]">
                <svg-icon name="dislike" />
                <div>777</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

import Button from '@/components/Button'

@Component({
  components: {
    Button
  }
})
export default class PollSwipe extends Vue {
  @Prop({ type: Object })
  readonly question!: Object

  @Prop({ type: Boolean })
  Step1!: Object

  @Prop({ type: Boolean })
  Step2!: Object

  onStep1 () {
    this.Step1 = true
  }

  onStep2 () {
    this.Step2 = true
  }
}
</script>

<style lang="scss" module>
.swipe {
  border-radius: 10px;
  box-shadow: -6px -2px 16px rgba(29, 34, 44, 0.8), 6px 5px 20px rgba(29, 34, 44, 0.6);
  height: 500px;
  margin: 0 auto 20px;
  overflow: hidden;
  width: 300px;
}

.title {
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;

  @include breakpoint('desktop', 'wide') {
    font-size: 24px;
    line-height: 36px;
  }
}

.cover {
  align-items: center;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 130px 20px 90px;
  position: relative;
  text-align: center;
  width: 100%;

  &::before {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));
    content: '';
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }

  div {
    position: relative;
  }
}

.swipeList {
  height: 100%;
  width: 100%;
}

.swipePhoto {
  align-items: flex-end;
  background-size: cover;
  display: flex;
  height: 100%;
  position: relative;
  width: 100%;
}

.swipeTools {
  display: flex;
  width: 100%;
}

.swipeButton {
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 45px;
  justify-content: center;
  margin: 5px;
  transition: opacity $transition;
  width: 50%;
  will-change: opacity;

  @include hover() {
    opacity: 0.7;
  }

  svg {
    height: 24px;
    stroke: white;
    width: 22px;
  }
}

.like {
  background-color: var(--color-green);
}

.dislike {
  background-color: var(--color-red);
}

.swipeResult {
  height: 100%;
  padding: 20px;
}

.swipeHeader {
  border-bottom: 3px solid var(--color-primary);
  margin-bottom: 15px;
}

.swipeItem {
  border-bottom: 1px solid color('licorice', 'light');
  display: flex;
  padding-bottom: 10px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
}

.swipeItemPhoto {
  margin-right: 17px;
  position: relative;
  width: 72px;
}

.swipeItemPosition {
  background-color: var(--color-primary);
  color: white;
  font-size: 18px;
  font-weight: bold;
  left: 0;
  line-height: 18px;
  padding: 5px;
  position: absolute;
  top: 0;
}

.swipeItemRight {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

.swipeItemResult {
  display: flex;
  justify-content: flex-end;
}

.swipeItemInfo {
  align-items: center;
  display: flex;

  &:not(:last-child) {
    margin-right: 20px;
  }
}

.swipeItemInfoLike {
  color: var(--color-green);

  svg {
    margin-right: 3px;
    stroke: var(--color-green);
  }
}

.swipeItemInfoDislike {
  color: var(--color-red);

  svg {
    margin-right: 3px;
    stroke: var(--color-red);
  }
}
</style>
