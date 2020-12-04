<template>
  <div :class="[$style.attach]">
    <div :class="[$style.border]">
      <p>
        Team Secret стала первым финалистом чемпионата. 12 мая в 20:00 мск команда Клемента Puppey Иванова сыграет с
        лучшим из пары VP.P — Liquid в матче до трех побед.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ArticleIncut extends Vue {}
</script>

<style lang="scss" module>
.attach {
  background-color: var(--color-pinned-another);
  display: flex;
  font-family: Roboto, serif;
  margin-bottom: 30px;
  padding: 20px;

  @include breakpoint('tablet') {
    padding: 30px;
  }
}

.border {
  background: linear-gradient(to right, var(--color-primary) 2px, transparent 2px) 0 0,
    linear-gradient(to right, var(--color-primary) 2px, transparent 2px) 0 100%,
    linear-gradient(to left, var(--color-primary) 2px, transparent 2px) 100% 0,
    linear-gradient(to left, var(--color-primary) 2px, transparent 2px) 100% 100%,
    linear-gradient(to bottom, var(--color-primary) 2px, transparent 2px) 0 0,
    linear-gradient(to bottom, var(--color-primary) 2px, transparent 2px) 100% 0,
    linear-gradient(to top, var(--color-primary) 2px, transparent 2px) 0 100%,
    linear-gradient(to top, var(--color-primary) 2px, transparent 2px) 100% 100%;
  background-repeat: no-repeat;
  background-size: 12px 12px;
  padding: 0 20px;
  width: 100%;

  p {
    font-size: 18px;
    line-height: 25px;
  }
}
</style>
