<template>
  <main :class="[$style.layout]">
    <TheHeader />
    <nuxt :class="[$style.view]" />
    <TheFooter />
  </main>
</template>

<script lang="ts">
import { Component, mixins, Vue } from 'nuxt-property-decorator'
import { ViewportMixin } from '@/mixins'

import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

@Component({
  components: {
    TheHeader,
    TheFooter
  }
})

export default class DefaultLayout extends mixins(Vue, ViewportMixin) {}
</script>

<style lang="scss" module>
.layout {
  display: flex;
  flex-direction: column;

  position: relative;
}

.view {
  min-height: inherit;
}
</style>
