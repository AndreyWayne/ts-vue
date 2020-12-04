<template>
  <div :class="[$style.widget]">
    <div :class="[$style.widgetHeader]">
      <div :class="[$style.widgetTitle]">
        {{ title }}
      </div>
    </div>
    <div :class="[$style.widgetContent]">
      <div>
        <nuxt-link to="" :class="[$style.news]">
          <div :class="[$style.discipline]">
            <svg-icon name="disciplines/cs" />
          </div>
          <div :class="[$style.content]">
            <div :class="[$style.date]">
              21:07
            </div>
            <div :class="[$style.info]">
              <div :class="[$style.title]">
                В Dota 2 вышел патч 7.24b — ослабили Slardar и Snapfire
              </div>
              <!--<div :class="[$style.comments]">
                <div :class="[$style.commentsInner]">
                  <div :class="[$style.commentsIcon]">
                    <svg-icon name="comment" />
                  </div>
                  <div :class="[$style.commentsCount]">
                    69
                  </div>
                </div>
              </div>-->
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class WidgetNews extends Vue {
  @Prop({ required: true, type: String })
  title!: Boolean
}
</script>

<style lang="scss" module>
.widget {
  background-color: var(--color-layer);
  border: 1px solid var(--color-border-transparent);
  border-radius: 4px;
  margin-bottom: 20px;

  transition: background-color $transition-mode, border $transition-mode;
  will-change: background-color, border;
}

.widgetHeader {
  display: flex;
  justify-content: space-between;

  padding: 20px 15px 0;
}

.widgetTitle {
  font-size: 18px;
  font-weight: 500;

  letter-spacing: 0.5px;
  line-height: 26px;

  text-transform: uppercase;
}

.widgetContent {
  padding: 15px;
}

.news {
  display: flex;
  text-decoration: none;

  @include hover() {
    .discipline {
      opacity: 1;
    }

    .title {
      color: var(--color-primary);
    }
  }

  &:not(:last-child) {
    margin-bottom: 12px;
  }
}

.discipline {
  border-radius: 2px;
  flex: 0 0 auto;
  height: 20px;
  margin-right: 12px;
  opacity: 0.5;

  transition: opacity $transition;
  width: 20px;
  will-change: opacity;

  svg {
    height: 20px;
    width: 20px;
  }
}

.content {
  display: flex;
  flex-direction: column;
}

.date {
  color: var(--color-text);
  font-size: 13px;
  line-height: 20px;
  margin-right: 10px;
  opacity: 0.4;

  transition: color $transition-mode;
  will-change: color;
}

.info {
  display: block;
  position: relative;
}

.title {
  color: var(--color-text);
  display: inline;
  font-size: 13px;
  line-height: 20px;
  margin-right: 10px;

  transition: color $transition;
  will-change: color;
}

.comments {
  display: inline-block;
}

.commentsInner {
  align-items: center;
  display: flex;
}

.commentsIcon {
  display: flex;
  height: 16px;
  margin-right: 2px;
  width: 16px;
}

.commentsCount {
  color: var(--color-text-second);
  margin-top: 2px;
}
</style>
