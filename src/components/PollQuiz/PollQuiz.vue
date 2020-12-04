<template>
  <div :class="[$style.poll]">
    <div v-if="false">
      <div :class="[$style.cover]">
        <div :class="[$style.title]">
          Много знаешь о киберспорте? Проверь себя!
        </div>
        <div :class="[$style.photoFooter]">
          <div :class="[$style.photoButton]">
            <Button is-orange :with-border="false">
              Голосовать
            </Button>
          </div>
          <div :class="[$style.vote]">
            3 вопроса
          </div>
        </div>
      </div>
    </div>
    <div v-if="true" :class="[$style.pollQuestions]">
      <div v-for="item in question.list" :key="item.position">
        <div :class="[$style.header]">
          <div :class="[$style.image]">
            <img src="~/assets/images/pic2.jpg" :alt="item.title">
          </div>
          <div :class="[$style.title]">
            {{ item.title }}
          </div>
        </div>
        <div :class="[$style.list]">
          <label v-for="question in item.list" :key="question.position" :class="[$style.item]" @click="onClick">
            <input type="radio" :name="`quiz-${item.position}`" :class="[$style.radio]">
            <div :class="[$style.itemQuestion]">
              <span :class="[{ [$style.isWrong]: false }]">
                {{ question.title }}
              </span>
              <div v-if="isActive" :class="[{ [$style.itemNotice]: question.notice }]">{{ question.notice }}</div>
            </div>
          </label>
        </div>
        <div :class="[$style.footer]">
          <div :class="[$style.photoButton]">
            <Button is-orange :with-border="false">
              Далее
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="false" :class="[$style.pollResult]">
      <div :class="[$style.image]">
        <img src="~/assets/images/pic2.jpg" alt="Вариант 1">
      </div>
      <div :class="[$style.resultContent]">
        <div :class="[$style.resultTitle]">
          Все с тобой ясно...
        </div>
        <div :class="[$style.resultLine]" />
        <div :class="[$style.resultCount]">
          2/3
        </div>
      </div>
      <div :class="[$style.resultDescription]">
        Нет времени на трансляции, просто смотрю результаты на Cybersport.ru
      </div>
      <div :class="[$style.resultShare]">
        <div>Поделись с друзьями:</div>
        <div :class="[$style.share]">
          <div :class="[$style.shareItem]">
            <svg-icon name="socials/tw" />
          </div>
          <div :class="[$style.shareItem]">
            <svg-icon name="socials/vk" />
          </div>
          <div :class="[$style.shareItem]">
            <svg-icon name="socials/fb" />
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
export default class PollQuiz extends Vue {
  @Prop({ type: Object })
  readonly question!: Object

  @Prop({ type: Boolean })
  isActive!: Boolean

  onClick (): void {
    this.isActive = true
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

.cover {
  align-items: center;
  border-radius: 10px;
  box-shadow: -6px -2px 16px rgba(29, 34, 44, 0.8);
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 30px 20px;
  text-align: center;
}

.poll {
  border-radius: 10px;
  box-shadow: -6px -2px 16px rgba(29, 34, 44, 0.8);
  margin: 0 -5px 20px;
  overflow: hidden;

  @include breakpoint('desktop', 'wide') {
    margin: 0 0 20px;
  }
}

.pollQuestions {
  padding: 10px;

  @include breakpoint('desktop', 'wide') {
    padding: 20px 20px 15px;
  }
}

.pollResult {
  padding: 20px;

  @include breakpoint('desktop', 'wide') {
    padding: 30px 25px;
  }

  .image {
    margin: -20px -20px 0;

    @include breakpoint('desktop', 'wide') {
      margin: -30px -25px 0;
    }
  }
}

.header {
  border-bottom: 1px solid color('licorice', 'light');
  margin-bottom: 10px;
  padding-bottom: 5px;

  @include breakpoint('desktop') {
    margin-bottom: 15px;
    padding-bottom: 10px;
  }
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

.image {
  margin: -10px -10px 0;

  @include breakpoint('desktop', 'wide') {
    margin: -20px -20px 10px;
  }
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

.isRight {
  color: var(--color-green);
}

.isWrong {
  color: var(--color-red);
}

.itemNotice {
  background-color: var(--color-bg-popular);
  border-radius: 4px;
  margin-top: 15px;
  padding: 10px 20px;
  transition: background-color $transition-mode;
  will-change: background-color;
}

.resultContent {
  margin: 16px 0 20px;
  text-align: center;
}

.resultTitle {
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  margin-bottom: 10px;
}

.resultLine {
  background-color: var(--color-primary);
  height: 3px;
  width: 100%;
}

.resultCount {
  font-size: 20px;
  font-weight: bold;
  line-height: 18px;
  margin-top: 20px;
}

.resultDescription {
  font-size: 18px;
  line-height: 25px;
  text-align: center;
}

.resultShare {
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: center;
  margin-top: 24px;
}

.share {
  display: flex;
  margin-left: 10px;
}

.shareItem {
  cursor: pointer;
  height: 24px;
  width: 24px;

  &:not(:last-child) {
    margin-right: 15px;
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
</style>
