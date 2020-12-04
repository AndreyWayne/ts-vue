<template>
  <div :class="[$style.spinner]">
    <svg viewBox="25 25 50 50" :height="size" :width="size">
      <circle cx="50" cy="50" r="20" :stroke="color" :stroke-width="thickness" />
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Spinner extends Vue {
  /**
   * Color.
   */
  @Prop({ default: '#ff6f22', type: String })
  readonly color!: string

  /**
   * Size.
   */
  @Prop({ default: 42, type: Number })
  readonly size!: number

  /**
   * Thickness.
   */
  @Prop({ default: 2, type: Number })
  readonly thickness!: number
}
</script>

<style lang="scss" module>
.spinner {
  display: inline-flex;
}

.spinner svg {
  animation: rotate 2s linear infinite;
}

.spinner circle {
  animation: spin 1.5s ease-in-out infinite;
  fill: none;

  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-linecap: round;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }

  to {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}
</style>
