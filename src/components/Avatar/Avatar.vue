<template>
  <div :class="[$style.avatar]">
    <picture :class="[$style.picture]" :style="currentStyle" />

    <div v-if="isBadgeVisible" :class="[$style.badge]">
      <svg-icon :name="badgeIcon" :height="badgeSize" :width="badgeSize" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Picture } from '.'

@Component
export default class Avatar extends Vue {
  /**
   * Badge icon name.
   */
  @Prop({ default: 'verified', type: String })
  readonly badgeIcon!: string

  /**
   * Badge size in px.
   */
  @Prop({ default: 24, type: Number })
  readonly badgeSize!: number

  /**
   * Should the badge be visible.
   */
  @Prop({ type: Boolean })
  readonly isBadgeVisible!: boolean

  /**
   * Picture.
   */
  @Prop({ required: true, type: Object })
  readonly picture!: Picture

  /**
   * Picture size.
   */
  @Prop({ default: 64, type: Number })
  readonly pictureSize!: number

  /**
   * Picture style.
   */
  get currentStyle () {
    const picture = this.picture

    const width = `${this.pictureSize}px`
    const height = width

    const { url } = picture

    const baseStyle = {
      height,
      width
    }

    if (!url) {
      return baseStyle
    }

    return {
      ...baseStyle,
      backgroundImage: `url(${url})`
    }
  }
}
</script>

<style lang="scss" module>
.avatar {
  display: inline-flex;
  position: relative;
}

.picture {
  background-color: var(--color-text-lighter);
  background-position: center;
  background-size: cover;

  border-radius: 50%;

  height: 100%;
  transition: background $transition-mode;

  width: 100%;
  will-change: background;
}

.badge {
  bottom: 0;

  position: absolute;
  right: 0;

  transform: translate3d(0, 35%, 0);
}
</style>
