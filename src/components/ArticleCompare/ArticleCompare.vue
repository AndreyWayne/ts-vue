<template>
  <div :class="[$style.attach]">
    <div :class="[$style.compare]">
      <div :class="[$style.col, $style.colLeft]">
        <div :class="[$style.header]">
          <div :class="[$style.icon]">
            <svg-icon name="plus" />
          </div>
          <div :class="[$style.title]">
            Достоинства
          </div>
        </div>
        <div :class="[$style.content]">
          <ul>
            <li>знакомая с детства история;</li>
            <li>модельки персонажей;</li>
            <li>детализированные здания;</li>
            <li>ностальгия.</li>
            <li>модельки персонажей;</li>
            <li>детализированные здания;</li>
            <li>ностальгия.</li>
          </ul>
        </div>
      </div>
      <div :class="[$style.col, $style.colRight]">
        <div :class="[$style.header]">
          <div :class="[$style.icon]">
            <svg-icon name="minus" />
          </div>
          <div :class="[$style.title]">
            Недостатки
          </div>
        </div>
        <div :class="[$style.content]">
          <ul>
            <li>неоправданные ожидания;</li>
            <li>устаревший интерфейс;</li>
            <li>туповатый ИИ;</li>
            <li>загубленный мультиплеер.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ArticleCompare extends Vue {}
</script>

<style lang="scss" module>
.attach {
  display: flex;
  flex-direction: column;
  font-family: Roboto, serif;
  margin-bottom: 20px;
  width: 100%;

  @include breakpoint('tablet') {
    margin-bottom: 30px;
  }
}

.compare {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;

  @include breakpoint('tablet') {
    border-radius: 4px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
    flex-direction: row;
    overflow: hidden;
  }
}

.col {
  border-radius: 4px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  overflow: hidden;
  width: 100%;

  @include breakpoint('tablet') {
    border-radius: 0;
    box-shadow: none;
    margin-bottom: 0;
    width: 50%;
  }
}

.colLeft {
  @include breakpoint('tablet') {
    border-right: 1px solid var(--color-border);
  }
}

.colRight {
  @include breakpoint('tablet') {
    border-left: 1px solid var(--color-border);
  }
}

.header {
  align-items: center;
  background-color: var(--color-pinned-another);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  height: 54px;
  margin-bottom: 2px;
  padding-left: 24px;
}

.icon {
  height: 25px;
  margin-right: 15px;
  width: 25px;
}

.title {
  color: var(--color-text);
  font-size: 21px;
  font-weight: bold;
  line-height: 36px;
}

.content {
  font-size: 16px;
  line-height: 26px;

  @include breakpoint('tablet') {
    padding-left: 20px;
  }
}
</style>
