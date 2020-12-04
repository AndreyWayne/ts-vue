<template>
  <div :class="[$style.tags]">
    <div :class="[$style.tag, { [$style.isOrange]: isOrange, [$style.isBlack]: isBlack, [$style.isGray]: isGray }]">
      Интервью
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Tags extends Vue {
  @Prop({ required: false, type: Boolean })
  isOrange!: Boolean

  @Prop({ required: false, type: Boolean })
  isBlack!: Boolean

  @Prop({ required: false, type: Boolean })
  isGray!: Boolean
}
</script>

<style lang="scss" module>
.tags {
  display: flex;
}

.tag {
  border: 1px solid var(--color-border);
  border-radius: 3px;
  color: var(--color-primary);
  cursor: pointer;
  font-size: 12px;
  line-height: 18px;
  padding: 3px 8px;

  transition: border $transition;
  will-change: border;

  @include hover() {
    border: 1px solid var(--color-primary);
  }
}

.isOrange {
  border: 1px solid var(--color-primary);

  transition: background-color $transition, color $transition;
  will-change: background-color, color;

  @include hover() {
    background-color: var(--color-primary);
    color: white;
  }
}

.isBlack {
  border: 1px solid var(--color-text);
  color: var(--color-text);

  transition: border $transition, color $transition;
  will-change: border, color;

  @include hover() {
    color: var(--color-primary);
  }
}

.isGray {
  border: 1px solid var(--color-gray);
  color: var(--color-primary);

  transition: border $transition;
  will-change: border;

  @include hover() {
    border: 1px solid var(--color-primary);
  }
}
</style>
