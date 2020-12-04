<template>
  <div :class="[$style.attach]">
    <div :class="[$style.review]">
      <div :class="[$style.rating]">
        <div :class="[$style.ratingCount]">
          8,5
        </div>
        <div :class="[$style.ratingIcon]" class="icon-rating">
          <svg-icon name="rating" />
        </div>
      </div>
      <div>
        <h3 :class="[$style.reviewTitle]">
          Отлично
        </h3>
        <p :class="[$style.reviewText]">
          Неплохой ремастер, который подойдёт, чтобы познакомить с легендарной игрой тех, кому больно видеть графику
          2002 года. Не более. Старым фанатам тут ловить, увы, почти нечего.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ArticleReview extends Vue {}
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

.review {
  border-radius: 4px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 28px 15px;

  @include breakpoint('tablet') {
    align-items: center;
    flex-direction: row;
    margin-bottom: 30px;
    padding: 28px 25px 28px 15px;
  }
}

.rating {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  height: 136px;
  justify-content: center;
  line-height: 30px;
  position: relative;
  width: 136px;

  @include breakpoint('tablet') {
    margin-right: 42px;
  }
}

.ratingCount {
  color: var(--color-primary);
  font-size: 50px;
  font-weight: 900;
  letter-spacing: -1px;
  position: relative;
  z-index: 2;
}

.ratingIcon {
  position: absolute;
  right: 0;
  top: 0;
}

.reviewTitle {
  font-size: 21px;
  line-height: 20px;
  margin: 20px 0 0;

  @include breakpoint('tablet') {
    margin: 0;
  }
}

.reviewText {
  font-size: 16px;
  line-height: 26px;
  margin: 10px 0 0;
}
</style>
