<template>
  <div
    :class="[
      $style.hamburger,
      {
        [$style.isToggled]: isToggled,
      },
    ]"
    @click="onClick"
  >
    <div v-for="key in 3" :key="key" :class="[$style.line]" :style="{ backgroundColor: color }" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Hamburger extends Vue {
  /**
   * Lines color.
   */
  @Prop({ type: String })
  readonly color!: string

  /**
   * Toggle state.
   */
  @Prop({ type: Boolean })
  readonly isToggled!: boolean

  /**
   * Handles "click" event.
   */
  onClick (): void {
    this.toggle()
  }

  /**
   * Emit's "onToggles" event.
   */
  toggle (): void {
    this.$emit('onToggle', !this.isToggled)
  }
}
</script>

<style lang="scss" module>
.hamburger {
  cursor: pointer;

  display: inline-flex;
  flex-direction: column;

  -webkit-tap-highlight-color: transparent;
}

.line {
  background: white;

  height: 2px;
  left: 0;

  transform-origin: left center;
  transition: opacity 0.3s, transform 0.3s, width 0.3s;

  width: 20px;
  will-change: opacity, transform, width;

  &:nth-child(2) {
    margin: 6px 0;
  }
}

.isToggled {
  .line:nth-child(1) {
    transform: translate3d(3px, 1px, 0) rotate(45deg);
  }

  .line:nth-child(2) {
    opacity: 0;
    width: 0;
  }

  .line:nth-child(3) {
    transform: translate3d(3px, -1px, 0) rotate(-45deg);
  }
}
</style>
