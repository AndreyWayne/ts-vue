<template>
  <div :class="[$style.article]">
    <nuxt-link to="" :class="[$style.image]">
      <img src="~/assets/images/blog.jpg" alt="Лидеры Counter-Strike: капитан BIG Фатих gob b Дейк">
    </nuxt-link>
    <div :class="[$style.info]">
      <div :class="[$style.title]">
        Как победить в The Sims 4? Соревнования в самой несоревновательной игре
      </div>
      <div :class="[$style.footer]">
        <div :class="[$style.left]">
          <div :class="[$style.publishedAt]">
            <svg-icon name="time" />
            <span>12 минуты назад</span>
          </div>
          <div :class="[$style.rating]">
            <svg-icon name="rating" />
            <div>20</div>
          </div>
        </div>
        <div>
          <Tags />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Tags from '@/components/Tags'

@Component({
  components: {
    Tags
  }
})
export default class PostSimilar extends Vue {}
</script>

<style lang="scss" module>
.article {
  background-color: var(--color-layer);
  border-radius: 4px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  height: 100%;
  padding: 10px;
  transition: background-color $transition-mode;
  width: 100%;
  will-change: background-color;
}

.image {
  display: flex;
  flex: 0 0 auto;
  margin-right: 16px;
  width: 200px;

  img {
    width: 100%;
  }
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title {
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
}

.footer {
  display: flex;
  justify-content: space-between;
}

.left {
  display: flex;
}

.publishedAt {
  align-items: center;
  color: var(--color-primary--color-text-gray);
  display: flex;
  margin-right: 16px;

  span {
    font-size: 12px;
    line-height: 18px;
    margin-left: 8px;
  }
}

.rating {
  align-items: center;
  color: var(--color-primary--color-text-gray);
  display: flex;
  font-size: 12px;

  transition: color $transition-mode;
  will-change: color;

  svg {
    fill: var(--color-text-gray);
    margin-right: 4px;

    transition: fill $transition;
    will-change: fill;
  }

  svg > path {
    stroke: var(--color-layer);
    stroke-width: 2;
  }
}

.ratingHigh {
  color: var(--color-green);

  svg {
    fill: var(--color-green);
  }
}

.ratingLow {
  color: var(--color-red);

  svg {
    fill: var(--color-red);
  }
}
</style>
