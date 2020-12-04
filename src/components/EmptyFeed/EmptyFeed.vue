<template>
  <div :class="[$style.block]">
    <div :class="[$style.icon]" />
    <div :class="[$style.info]">
      <div :class="[$style.title]">
        Что такое «Моя лента?»
      </div>
      <div :class="[$style.text]">
        Настрой персональную ленту на Cybersport.ru по своему вкусу и получай только тот контент, который интересен
        именно тебе.
      </div>
      <Button is-orange :with-border="false">
        <span :class="[$style.buttonIcon]">
          <svg-icon name="filter" />
        </span>
        <span :class="[$style.buttonText]">НастроЙ свою ленту</span>
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Button from '@/components/Button'

@Component({
  components: {
    Button
  }
})
export default class EmptyFeed extends Vue {}
</script>

<style lang="scss" module>
.block {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  position: relative;

  @include breakpoint('desktop', 'wide') {
    flex-direction: row;
  }
}

.icon {
  background-image: url('~assets/images/empty-feed.png');
  flex: 0 0 auto;
  height: 154px;
  width: 154px;

  @include breakpoint('desktop', 'wide') {
    left: -6px;
    position: absolute;
    top: 0;
  }
}

.info {
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
}

.title {
  font-size: 18px;
  font-weight: 500;
  margin: 20px 0;
}

.text {
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 25px;
  max-width: 430px;
}

.buttonIcon {
  height: 17px;
  margin-right: 10px;

  svg {
    stroke: white;
  }
}

.buttonText {
  line-height: 17px;
}
</style>
