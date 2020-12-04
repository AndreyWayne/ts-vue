<template>
  <div :class="[$style.widget]">
    <div :class="[$style.widgetHeader]">
      <div :class="[$style.widgetTitle]">
        Связанные теги
      </div>
    </div>
    <div :class="[$style.widgetContent]">
      <div :class="[$style.tags]">
        <div :class="[$style.tag]">
          <Tags is-gray />
        </div>
        <div :class="[$style.tag]">
          <Tags is-gray />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Tags from '@/components/Tags'
import Button from '@/components/Button'

@Component({
  components: {
    Tags,
    Button
  }
})
export default class WidgetTags extends Vue {}
</script>

<style lang="scss" module>
.widget {
  background-color: var(--color-layer);
  border: 1px solid var(--color-border-transparent);
  border-radius: 4px;
  margin-bottom: 20px;

  transition: background-color $transition-mode, border $transition-mode;
  will-change: background-color, border;
}

.widgetHeader {
  display: flex;
  justify-content: space-between;

  padding: 20px 15px 0;
}

.widgetTitle {
  font-size: 18px;
  font-weight: 500;

  letter-spacing: 0.5px;
  line-height: 26px;

  text-transform: uppercase;
}

.widgetContent {
  padding: 15px;
}

.tags {
  display: flex;
}

.tag {
  &:not(:last-child) {
    margin-right: 10px;
  }
}
</style>
