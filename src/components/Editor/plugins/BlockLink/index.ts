import { EditorPlugin } from '@editorjs/editorjs'
import Vue from 'vue/dist/vue.common'

import { plugin as PluginAPI } from '@/plugins/api'
import EditorLink from '@/components/EditorLink'

export const LinkIcon = `
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" style="fill: none">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
`

export interface Data {
  itemData: ItemData
}

export interface ItemData {
  slug?: string
  type?: string
}

export default class LinkPlugin {
  /**
   * Vue instance.
   */
  instance!: Vue

  /**
   * Item data.
   */
  data!: Data

  /**
   * Constructor.
   */
  constructor ({ data }: EditorPlugin<Data>) {
    this.data = data

    this.instance = new Vue({
      components: {
        EditorLink
      },

      data: () => ({
        itemData: null
      }),

      methods: {
        onItemUpdate (itemData: any) {
          this.$emit('onItemUpdate', itemData)
        }
      },

      template: '<EditorLink :item-data="itemData" @onItemUpdate="onItemUpdate" />'
    })

    Object.defineProperty(this.instance.$options, '$api', {
      value: PluginAPI
    })
  }

  static get toolbox () {
    return {
      icon: LinkIcon,
      title: 'Блок-ссылка'
    }
  }

  /**
   * Returns the element of the instance.
   */
  render () {
    this.instance.$mount(document.createElement('div'))

    this.instance.$on('onItemUpdate', (itemData: any) => {
      this.data.itemData = itemData
      this.sync()
    })

    this.sync()
    return this.instance.$el
  }

  sync () {
    this.instance.$set(this.instance, 'itemData', this.data.itemData)
  }

  /**
   * Returns data to be saved.
   */
  save () {
    return this.data
  }
}
