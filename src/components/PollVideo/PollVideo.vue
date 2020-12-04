<template>
  <div :class="[$style.poll, $style.videoActive]">
    <div :class="[$style.header]">
      <div :class="[$style.title]">
        Xайлайт 2019 года — это
      </div>
      <div :class="[$style.notice]">
        Можно выбрать не более 2-х ответов
      </div>
    </div>
    <div :class="[$style.list, { [$style.isDouble]: isDouble }]">
      <div v-for="item in question.list" :key="item.position" :class="[$style.item]">
        <div :class="[$style.videoFrame]">
          <div :class="[$style.preview]">
            <div :class="[$style.play]">
              <svg-icon name="play" />
            </div>
            <img src="~/assets/images/pic2.jpg" alt="Вариант 1">
            <div :class="[$style.percent]">
              50%
            </div>
          </div>
        </div>
        <label :class="[$style.field]">
          <input type="checkbox" name="pollCheckbox" :class="[$style.checkbox]">
          <span>{{ item.title }}</span>
        </label>
      </div>
    </div>
    <div :class="[$style.footer]">
      <div :class="[$style.button]">
        <Button is-orange :with-border="false">
          Голосовать
        </Button>
      </div>
      <div :class="[$style.vote]">
        Голосов: 710
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
export default class PollVideo extends Vue {
  @Prop({ type: Object })
  readonly question!: Object

  get Type (): any {
    return this.question
  }

  get isDouble (): boolean {
    return this.Type.type === 'double'
  }
}
</script>

<style lang="scss" module>
.checkbox {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Crect x='0.5' y='0.5' width='19' height='19' rx='3.5' stroke='%23FF6F22'/%3E%3C/svg%3E");
  background-size: cover;
  flex: 0 0 auto;
  height: 20px;
  margin-right: 10px;
  transition: background-image $transition;
  width: 20px;
  will-change: background-image;

  @include hover() {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Crect x='0.5' y='0.5' width='19' height='19' rx='3.5' stroke='%23FF6F22'/%3E%3Cpath d='M15.1728 5.29361C15.4709 4.94294 15.9968 4.9003 16.3475 5.19837C16.6981 5.49644 16.7408 6.02235 16.4427 6.37303L9.35938 14.7064C9.05663 15.0625 8.52018 15.1001 8.17079 14.7895L4.42079 11.4562C4.07681 11.1504 4.04582 10.6237 4.35159 10.2797C4.65735 9.9357 5.18408 9.90471 5.52807 10.2105L8.64128 12.9778L15.1728 5.29361Z' fill='%23FF6F23'/%3E%3C/svg%3E");
  }

  &:checked {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Crect x='0.5' y='0.5' width='19' height='19' rx='3.5' stroke='%23FF6F22'/%3E%3Cpath d='M15.1728 5.29361C15.4709 4.94294 15.9968 4.9003 16.3475 5.19837C16.6981 5.49644 16.7408 6.02235 16.4427 6.37303L9.35938 14.7064C9.05663 15.0625 8.52018 15.1001 8.17079 14.7895L4.42079 11.4562C4.07681 11.1504 4.04582 10.6237 4.35159 10.2797C4.65735 9.9357 5.18408 9.90471 5.52807 10.2105L8.64128 12.9778L15.1728 5.29361Z' fill='%23FF6F23'/%3E%3C/svg%3E");
  }
}

.poll {
  border-radius: 10px;
  box-shadow: -6px -2px 16px rgba(29, 34, 44, 0.8);
  margin-bottom: 20px;
  padding: 20px 10px;

  @include breakpoint('desktop', 'wide') {
    padding: 10px 110px 30px;
  }
}

.videoActive {
  .item {
    @include hover() {
      .preview {
        &::before {
          // opacity: 0.7;
        }
      }
    }
  }

  .preview {
    cursor: pointer;
  }
}

.header {
  margin-bottom: 20px;
  text-align: center;
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

.notice {
  font-size: 12px;
  margin-top: 10px;
}

.isDouble {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(1, 1fr);

  @include breakpoint('desktop') {
    grid-template-columns: repeat(2, 1fr);
  }
}

.item {
  &:not(:last-child) {
    margin-bottom: 30px;
  }
}

.videoItemActive {
  .percent {
    background-color: var(--color-primary);
  }
}

.videoPreviewActive {
  &::before {
    opacity: 0.7 !important;
  }
}

.preview {
  align-items: center;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  overflow: hidden;
  position: relative;

  &::before {
    background-color: var(--color-primary);
    content: '';
    display: flex;
    height: 100%;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity $transition;
    width: 100%;
    will-change: opacity;
  }
}

.play {
  height: 72px;
  position: absolute;
  width: 72px;

  @include hover() {
    .circle {
      opacity: 1;
    }
  }

  .circle {
    opacity: 0.6;
  }
}

.percent {
  background-color: var(--color-poll);
  border-radius: 4px 4px 0 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  padding: 2px 10px;
  position: absolute;
  right: 0;
  transition: background-color $transition-mode;
  width: fit-content;
  will-change: background-color;
}

.field {
  cursor: pointer;
  display: flex;

  &:not(:last-child) {
    margin-bottom: 25px;
  }
}

.footer {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.button {
  margin-bottom: 3px;
}

.vote {
  font-size: 12px;
  letter-spacing: 0.5px;
  line-height: 16px;
}
</style>
