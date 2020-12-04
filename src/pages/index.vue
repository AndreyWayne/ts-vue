<template>
  <div>
    <div :class="[$style.container]">
      <div :class="[$style.main]">
        <div :class="[$style.layer]">
          <EmptyFeed />
        </div>

        <Post v-for="post in materials" :key="post.id" :class="[$style.post]" :post="post" />
      </div>

      <div :class="[$style.aside]">
        <WidgetMatch />
        <WidgetBookmaker />
        <WidgetTransfer />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import EmptyFeed from '@/components/EmptyFeed'

import Post from '@/components/Post'

import WidgetMatch from '@/components/WidgetMatch'
import WidgetBookmaker from '@/components/WidgetBookmaker'
import WidgetTransfer from '@/components/WidgetTransfer'

@Component({
  components: {
    EmptyFeed,

    Post,

    WidgetMatch,
    WidgetBookmaker,
    WidgetTransfer
  }
})
export default class IndexPage extends Vue {
  /**
   * Array of materials.
   */
  materials: any[] = []

  async fetch () {
    await this.fetchMaterials()
  }

  /**
   * Gets new materials.
   */
  async fetchMaterials () {
    const offset = this.materials.length
    const limit = 10

    const { data = [] } = await this.$api.materials.getMaterialsMainPage({
      'page[offset]': offset,
      'page[limit]': limit
    })

    if (data.length) {
      this.materials = [...this.materials, ...data]
    }
  }
}
</script>

<style lang="scss" module>
.container {
  @include container();
  justify-content: center;
  margin-top: 20px;

  @include breakpoint('desktop') {
    flex-wrap: nowrap;
  }
}

.main {
  @include main();
}

.aside {
  @include aside();
}

.layer {
  background-color: var(--color-layer);
  border: 1px solid var(--color-border-transparent);
  margin: 0 0 10px;
  padding: 14px;

  transition: background-color $transition-mode, border $transition-mode;
  will-change: background-color, border;

  @include breakpoint('desktop') {
    padding: 14px 112px 36px;
  }
}

.post {
  margin-bottom: 10px;
}
</style>
