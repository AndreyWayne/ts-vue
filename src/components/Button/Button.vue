<template>
  <component
    :is="currentComponent"
    :to="to"
    :class="[
      $style.button,
      {
        [$style.isOrange]: isOrange,
        [$style.isBlack]: isBlack,
        [$style.withBorder]: withBorder,
      },
    ]"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Button extends Vue {
  @Prop({ type: Boolean })
  isOrange!: Boolean

  @Prop({ type: Boolean })
  isBlack!: Boolean

  @Prop({ type: [Object, String] })
  to!: any

  @Prop({ default: true, type: Boolean })
  withBorder!: Boolean

  get currentComponent () {
    return this.to ? 'nuxt-link' : 'div'
  }
}
</script>

<style lang="scss" module>
.button {
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  font-size: 12px;
  font-weight: 500;
  height: 30px;
  justify-content: center;
  line-height: 1;
  padding: 0 16px;
  text-decoration: none;
  text-transform: uppercase;

  transition: background-color $transition, border $transition, color $transition;
  will-change: background-color, border, color;
}

.isOrange {
  background-color: var(--color-primary);
  border: 1px solid var(--color-primary);
  color: white;
  font-weight: 500;

  @include hover {
    background-color: var(--color-primary-secondary);
    border: 1px solid var(--color-primary-secondary);
    color: white;
  }

  &_disabled,
  &[disabled='disabled'] {
    background-color: var(--color-gray);
    border: 1px solid var(--color-gray);
    color: white;
    cursor: default;
  }
}

.isBlack {
  border: 1px solid var(--color-text);
  color: var(--color-text);

  @include hover {
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    color: white;
  }
}

.withBorder {
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  letter-spacing: 0.5px;

  @include hover {
    background-color: var(--color-primary-secondary);
    border: 1px solid var(--color-primary-secondary);
    color: white;
  }

  &_disabled,
  &[disabled='disabled'] {
    border: 1px solid var(--color-gray);
    color: var(--color-gray);
    cursor: default;
  }
}
</style>
