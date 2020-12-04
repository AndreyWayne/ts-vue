<template>
  <div :class="[$style.head, { [$style.isBold]: isBold }]">
    <div v-for="tab in tabs" :key="tab.position" :class="[$style.item, { [$style.isActive]: tab.position === 1 }]">
      {{ tab.title }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Tabs extends Vue {
  @Prop({ type: Array })
  readonly tabs!: Object

  @Prop({ type: Boolean })
  readonly isBold!: Boolean
}
</script>

<style lang="scss" module>
.head {
  border-bottom: 1px solid #c7d1e7;
  display: flex;
  flex: 1;
  font-size: 12px;
  letter-spacing: 0.3px;
  line-height: 16px;
  text-transform: uppercase;
}

.isBold {
  font-size: 14px;
  font-weight: 500;
}

.item {
  border-bottom: 3px solid transparent;
  cursor: pointer;
  margin-bottom: -1px;
  padding-bottom: 7px;

  @include hover() {
    color: var(--color-primary);
  }

  &:not(:last-child) {
    margin-right: 15px;
  }
}

.isActive {
  border-bottom: 3px solid var(--color-primary);
}
</style>
