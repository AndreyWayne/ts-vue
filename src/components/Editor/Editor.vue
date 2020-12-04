<template>
  <div :class="[$style.editor]" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import EditorJS, { EditorConfig, OutputData } from '@editorjs/editorjs/types'

import { interopDefault, MESSAGES as messages } from '.'

@Component
export default class Editor extends Vue {
  @Prop({ default: () => ({}), type: Object })
  readonly content!: OutputData

  /**
   * Editor.JS instance.
   */
  editor: EditorJS | null = null

  mounted () {
    setTimeout(this.useEditor)
  }

  /**
   * Initializes the editor.
   */
  async useEditor (config: EditorConfig) {
    const defaultConfig: EditorConfig = {
      data: this.content,

      holder: this.$el as HTMLElement,
      logLevel: 'ERROR' as any,

      i18n: {
        messages
      },

      onChange: (api) => {
        return this.$emit('onChange', api)
      },

      placeholder: 'Начните писать..',

      tools: {
        blockLink: await interopDefault(import('./plugins/BlockLink')),
        header: await interopDefault(import('@editorjs/header')),
        list: await interopDefault(import('@editorjs/list')),
        marker: await interopDefault(import('@editorjs/marker')),
        simpleImage: await interopDefault(import('@editorjs/simple-image'))
      }
    }

    const Editor = (await interopDefault(import('@editorjs/editorjs'))) as typeof EditorJS

    this.editor = new Editor({
      ...defaultConfig,
      ...config
    })
  }
}
</script>

<style lang="scss" module>
.editor {
  width: 100%;
}

.editor a {
  color: color('primary') !important;
}

:global(.ce-conversion-tool__icon),
:global(.ce-toolbar__settings-btn) {
  background-color: rgba(0, 0, 0, 0.2) !important;

  border-radius: 3px;
  color: var(--color-text) !important;
}

:global(.ce-block--selected .ce-block__content) {
  background-color: rgba(0, 0, 0, 0.2) !important;
  border-radius: 3px;
}

:global(.ce-paragraph[data-placeholder]:empty::before) {
  color: var(--color-text-light) !important;
}

:global(.ce-toolbar),
:global(.ce-conversion-toolbar),
:global(.ce-settings),
:global(.ce-inline-toolbar) {
  background-color: var(--color-layer) !important;
  border-color: transparent !important;

  box-shadow: 0 4px 12px 4px rgba(0, 0, 0, 0.2);
  color: var(--color-text) !important;
}

:global(.ce-toolbar) {
  box-shadow: none;
}

:global(.ce-inline-toolbar__dropdown),
:global(.ce-conversion-tool),
:global(.ce-settings__button),
:global(.cdx-settings-button),
:global(.ce-inline-tool) {
  color: var(--color-text) !important;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3) !important;
  }
}

:global(.cdx-marker) {
  background-color: transparentize(color('primary'), 0.8) !important;
  color: var(--color-text) !important;
}
</style>
