<template>
  <a
    href=""
    :class="[
      $style.button,
      {
        [$style.orange]: orange,
        [$style.border]: border,
      },
    ]"
  >
    {{ title }}
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class TheButton extends Vue {
  @Prop({ required: false, type: Boolean })
  orange!: Boolean

  @Prop({ required: false, type: Boolean })
  border!: Boolean

  @Prop({ required: true, type: String })
  title!: String
}
</script>

<style lang="scss" module>
.button {
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 12px;
  font-weight: 500;
  height: 30px;
  justify-content: center;
  padding: 0 16px;
  text-decoration: none;
  text-transform: uppercase;
}

.orange {
  background-color: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-radius: 4px;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;

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

.border {
  border: 1px solid var(--color-primary);
  border-radius: 4px;
  color: var(--color-primary);
  transition: all 0.3s ease;

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
