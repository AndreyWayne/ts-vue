<template>
  <div>
    <div :class="[$style.container]">
      <div :class="[$style.main]">
        <div :class="[$style.header]">
          <div :class="[$style.name]">
            <div :class="[$style.discipline]">
              <svg-icon name="disciplines/hash" />
            </div>
            <h1 :class="[$style.title]">
              NSпротивForZe
            </h1>
          </div>
          <div :class="[$style.tab]">
            <Tabs :tabs="currentTabs" />
          </div>
        </div>
        <Post v-for="post in materials" :key="post.id" :class="[$style.post]" :post="post" />
      </div>
      <div v-if="viewport.isDesktopOrHigher" :class="[$style.aside]">
        <WidgetNews title="Главные новости" />
        <WidgetMatch />
        <WidgetTags />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Tabs from '@/components/Tabs'
import Post from '@/components/Post'

import WidgetNews from '@/components/WidgetNews'
import WidgetMatch from '@/components/WidgetMatch'
import WidgetTags from '@/components/WidgetTags'

@Component({
  components: {
    Tabs,
    Post,

    WidgetNews,
    WidgetMatch,
    WidgetTags
  }
})
export default class TagPage extends Vue {
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

  get currentTabs (): Object {
    return [
      {
        position: 1,
        title: 'Свежие'
      },
      {
        position: 2,
        title: 'Обсуждаемые'
      }
    ]
  }

  get viewport () {
    return this.$modules.viewport
  }
}
</script>

<style lang="scss" module>
.container {
  @include container();
  margin-top: 20px;
}

.main {
  width: 100%;

  @include breakpoint('desktop') {
    margin-right: 20px;
    max-width: 640px;
  }

  @include breakpoint('desktop', 'wide') {
    max-width: 970px;
  }
}

.aside {
  width: 310px;
}

.header {
  @include breakpoint('desktop', 'wide') {
    padding: 0 110px;
  }
}

.name {
  align-items: center;
  display: flex;
  margin-bottom: 34px;
}

.discipline {
  height: 32px;
  margin-right: 14px;

  svg {
    height: 32px;
    width: 32px;
  }
}

.title {
  font-size: 36px;
  line-height: 42px;
  margin: 0;
}

.tab {
  margin-bottom: 10px;
}

.post {
  margin-bottom: 20px;
}
</style>
