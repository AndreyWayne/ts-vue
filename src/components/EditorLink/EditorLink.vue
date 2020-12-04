<template>
  <div :class="[$style.component]">
    <div v-if="itemData" :class="[$style.content]">
      <template v-if="localItem">
        <strong>{{ localItem.attributes.title }}</strong>
        <p>{{ localItem.attributes.leadText }}</p>
      </template>

      <template v-else>
        <Spinner :class="[$style.spinner]" />
      </template>
    </div>

    <div v-else :class="[$style.search]">
      <input v-model="query" :class="[$style.query]" placeholder="Поиск..">

      <ul :class="[$style.results]">
        <li
          v-for="item in currentItems"
          :key="item.id"
          :class="[$style.result, $style[item.type]]"
          @click="onItemClick(item)"
        >
          <span :class="[$style.type]">{{ getTypeText(item.type) }}</span>
          <strong :class="[$style.title]">{{ item.attributes.title }}</strong>
        </li>

        <Spinner v-if="isLoading" :class="[$style.spinner]" />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator'

import { ItemData } from '@/components/Editor/plugins/BlockLink'
import Spinner from '@/components/Spinner'

import { ItemsState } from '.'

@Component({
  components: {
    Spinner
  }
})
export default class EditorLink extends Vue {
  /**
   * Item data.
   */
  @Prop({ default: null, type: Object })
  readonly itemData!: ItemData | null

  /**
   * Local item.
   */
  localItem: any = null

  /**
   * Items.
   */
  items: any[] = []

  /**
   * Items state.
   */
  itemsState: ItemsState = ItemsState.NOT_ASKED

  /**
   * Query.
   */
  query = ''

  /**
   * Array of filtered items.
   */
  get currentItems () {
    return this.items.filter((item) => {
      const title = item?.attributes?.title || ''
      return title.toLowerCase().includes(this.query.toLowerCase())
    })
  }

  /**
   * Has Failed.
   */
  get hasFailed () {
    return this.itemsState === ItemsState.FAILED
  }

  /**
   * Has Loaded.
   */
  get hasLoaded () {
    return this.itemsState === ItemsState.LOADED
  }

  /**
   * Is Loading.
   */
  get isLoading () {
    return this.itemsState === ItemsState.LOADING
  }

  /**
   * Fetch items.
   */
  async fetchItems (fn: Function) {
    if (!fn) {
      return
    }

    try {
      this.itemsState = ItemsState.LOADING

      const { data: newItems = [] } = await fn()
      await new Promise(resolve => setTimeout(resolve, 1500))
      this.$set(this, 'items', [...this.items, ...newItems])

      this.itemsState = ItemsState.LOADED
    } catch (error) {

    }
  }

  /**
   * Returns type text.
   */
  getTypeText (type: string) {
    if (type === 'material') {
      return 'Материал'
    }

    return ''
  }

  /**
   * Mounted.
   */
  mounted () {
    this.fetchItems(this.$api.materials.getMaterialsMainPage)
  }

  /**
   * Handles item "click" event.
   */
  onItemClick ({ attributes: { slug = '' } = {}, type = '' }: any = {}) {
    this.$emit('onItemUpdate', { slug, type })
  }

  @Watch('itemData', { immediate: true })
  async onItemDataUpdate (itemData: ItemData) {
    if (!itemData) {
      return
    }

    try {
      const { data } = await this.$api.materials.getMaterialBySlug(itemData.slug as string)
      this.localItem = data
    } catch (error) {

    }
  }
}
</script>

<style lang="scss" module>
.component {
  background-color: transparentize(black, 0.8);
  border-radius: 3px;

  color: var(--color-text);

  display: flex;
  flex-direction: column;

  margin: 20px 0;
  padding: 20px;
}

.search {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.query {
  background-color: transparentize(black, 0.8);

  border: 0;
  border-radius: 3px;

  color: inherit;

  font-size: 14px;
  outline: none;

  padding: 14px;
}

.results {
  height: 500px;
  list-style: none;

  margin: 0;

  overflow-y: auto;
  padding: 0;
}

.result {
  align-items: flex-start;
  display: flex;

  margin: 20px 0;
}

.result:last-child {
  margin-bottom: 0;
}

.type {
  font-size: 12px;
  font-weight: 500;

  letter-spacing: 1px;
  line-height: 24px;
  margin-right: 10px;

  text-transform: uppercase;
}

.title {
  cursor: pointer;

  font-size: 18px;
  line-height: 24px;

  opacity: 0.7;
  transition: opacity $transition;
}

.result.material .type {
  color: color('primary');
}

.result.team .type {
  color: color('green');
}

.result:hover .title {
  opacity: 1;
}

.spinner {
  display: flex;
  justify-content: center;

  margin: 20px auto;
}
</style>
