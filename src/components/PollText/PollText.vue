<template>
  <div :class="[$style.poll]">
    <div :class="[$style.header]">
      <div :class="[$style.title]">
        {{ question.title }}
      </div>
      <div :class="[$style.notice]">
        Можно выбрать не более 2-х ответов
      </div>
    </div>

    <div v-if="!isVoted" :class="[$style.list]">
      <label v-for="item in question.list" :key="item.position" :class="[$style.item]">
        <input :type="question.input" name="poll" :class="[$style.radio, $style.isOrange]">
        <span>{{ item.title }}</span>
      </label>
    </div>

    <div v-if="isVoted" :class="[$style.list]">
      <div :class="[$style.answer, $style.isActive]">
        <div :class="[$style.itemHeader]">
          <div :class="[$style.itemHeaderLeft]">
            <div>Только первое</div>
            <div :class="[$style.itemHeaderVoted]">
              355
            </div>
          </div>
          <div>50%</div>
        </div>
        <div :class="[$style.progress]">
          <div :class="[$style.progressLine]" style="width: 50%;" />
        </div>
      </div>
      <div :class="[$style.answer]">
        <span>Не ниже ТОР–3</span>
        <div :class="[$style.progress]">
          <div :class="[$style.progressLine]" style="width: 50%;" />
        </div>
      </div>
      <div :class="[$style.answer]">
        <span>Согласен на ТОР–5-6</span>
        <div :class="[$style.progress]">
          <div :class="[$style.progressLine]" style="width: 50%;" />
        </div>
      </div>
      <div :class="[$style.answer]">
        <span>ТОР–12, как в прошлом году</span>
        <div :class="[$style.progress]">
          <div :class="[$style.progressLine]" style="width: 50%;" />
        </div>
      </div>
      <div :class="[$style.answer]">
        <span>Главное выграть у NaVi</span>
        <div :class="[$style.progress]" />
      </div>
      <div :class="[$style.answer]">
        <span>Главное — попасть на The International</span>
        <div :class="[$style.progress]" />
      </div>
    </div>

    <div :class="[$style.footer]">
      <div :class="[$style.button]" @click="onClick">
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
export default class PollText extends Vue {
  @Prop({ type: Object })
  readonly question!: Object

  @Prop({ type: Boolean })
  isVoted!: Boolean

  onClick (): void {
    this.isVoted = true
  }
}
</script>

<style lang="scss" module>
.radio {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'%3E%3Ccircle cx='9' cy='9' r='8' stroke='%23C7D1E7' stroke-width='2'/%3E%3C/svg%3E");
  background-size: cover;
  flex: 0 0 auto;
  height: 18px;
  margin-right: 10px;
  transition: background-image $transition;
  width: 18px;
  will-change: background-image;

  @include hover() {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='19' viewBox='0 0 18 19' fill='none'%3E%3Ccircle cx='9' cy='9.02979' r='8' stroke='%23C7D1E7' stroke-width='2'/%3E%3Ccircle cx='9' cy='9' r='4' fill='%23C7D1E7'/%3E%3C/svg%3E");
  }

  &:checked {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='19' viewBox='0 0 18 19' fill='none'%3E%3Ccircle cx='9' cy='9.02979' r='8' stroke='%23C7D1E7' stroke-width='2'/%3E%3Ccircle cx='9' cy='9' r='4' fill='%23C7D1E7'/%3E%3C/svg%3E");
  }
}

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
  padding: 10px 20px 30px;

  @include breakpoint('desktop', 'wide') {
    padding: 18px 110px 30px;
  }
}

.header {
  margin-bottom: 28px;
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

.list {
  display: flex;
  flex-direction: column;
}

.item {
  cursor: pointer;
  display: flex;

  &:not(:last-child) {
    margin-bottom: 25px;
  }
}

.footer {
  margin-top: 30px;
}

.button {
  margin-bottom: 25px;
  width: fit-content;
}

.vote {
  font-size: 12px;
  letter-spacing: 0.5px;
  line-height: 16px;
}

/// Result

.answer {
  &:not(:last-child) {
    margin-bottom: 18px;
  }
}

.isActive {
  font-weight: bold;
}

.itemHeader {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.itemHeaderLeft {
  align-items: center;
  display: flex;
}

.itemHeaderVoted {
  font-size: 12px;
  font-weight: 300;
  margin-left: 8px;
}

.progress {
  height: 3px;
  margin-top: 4px;
  position: relative;

  &::before {
    background-color: var(--color-primary);
    content: '';
    height: 1px;
    left: 0;
    opacity: 0.5;
    position: absolute;
    top: 1px;
    width: 100%;
  }
}

.progressLine {
  background-color: var(--color-primary);
  height: 3px;
}
</style>
