<template>
  <div :class="[$style.page]">
    <div :class="[$style.main]">
      <textarea
        ref="title"
        v-model="currentAttributes.title"
        :class="[$style.title]"
        placeholder="Заголовок"
        rows="1"
        @input="onTextAreaInput"
      />

      <ClientOnly>
        <Editor
          :key="updateKey"
          :class="[$style.editor]"
          :content="currentAttributes.content"
          @onChange="onEditorChanged"
        />
      </ClientOnly>

      <transition name="fade">
        <div v-if="areButtonsVisible" :class="[$style.buttons]">
          <Button :class="[$style.button]" with-border @click.native="onSaveClick">
            Сохранить
          </Button>

          <Button :class="[$style.button]" with-border @click.native="onCancelClick">
            Отменить
          </Button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Material } from '@cybersport/specifications'
import { API, OutputData } from '@editorjs/editorjs/types'

import { debounce } from 'lodash'
import { Component, Prop, Vue } from 'nuxt-property-decorator'

import ResizeObserver from 'resize-observer-polyfill'

import Button from '@/components/Button'
import Editor from '@/components/Editor'

interface EditableMaterial extends Material {
  hasUpdated?: boolean
}

@Component({
  components: {
    Button,
    Editor
  }
})
export default class EditPage extends Vue {
  /**
   * Material prop.
   */
  @Prop({ required: true, type: Object })
  readonly material!: EditableMaterial

  /**
   * Original material title.
   */
  originalTitle = ''

  /**
   * Original material content blocks.
   */
  originalBlocks = ''

  /**
   * ResizeObserver.
   */
  resizeObserver: ResizeObserver | null = null

  /**
   * Update key.
   */
  updateKey = 0

  /**
   * Return button visiblity.
   */
  get areButtonsVisible () {
    return this.material?.hasUpdated
  }

  /**
   * Returns current material attributes.
   */
  get currentAttributes () {
    return this.material?.attributes || {}
  }

  /**
   * Updates textarea height dynamically.
   *
   * @param element - Textarea element.
   */
  autoResize (element: HTMLTextAreaElement) {
    if (!element) {
      return
    }

    element.style.height = 'auto'
    element.style.height = element.scrollHeight + 'px'
  }

  /**
   * Before Destroy.
   */
  beforeDestroy () {
    this.resizeObserver?.disconnect()
  }

  /**
   * On Created.
   */
  created () {
    this.storeDefaults()
  }

  /**
   * On Mounted.
   */
  mounted () {
    this.useObserver()
    this.watchTitleForUpdates()
  }

  /**
   * Handles save button "click" event.
   */
  onCancelClick () {
    this.triggerUpdate(false)

    this.$set(this.currentAttributes, 'title', this.originalTitle)
    this.$set(this.currentAttributes.content as OutputData, 'blocks', JSON.parse(this.originalBlocks))

    this.updateKey = Math.random()
  }

  /**
   * Handles save button "click" event.
   */
  onSaveClick () {
    delete this.material.hasUpdated

    this.$api.materials.patchMaterialBySlug(this.currentAttributes.slug, this.material)

    this.triggerUpdate(false)
    this.storeDefaults()
  }

  /**
   * Handles editor "onChanged" event.
   */
  async onEditorChanged (api: API) {
    try {
      const content = await api.saver.save()
      const contentBlocks = JSON.stringify(content.blocks)

      this.$set(this.currentAttributes, 'content', content)
      this.triggerUpdate(this.originalBlocks !== contentBlocks)
    } catch (error) {
    }
  }

  /**
   * Handles textarea "input" event.
   *
   * @param event - InputEvent.
   */
  onTextAreaInput (event: InputEvent) {
    const target = event.target as HTMLTextAreaElement
    this.autoResize(target)
  }

  /**
   * Stores original values that will be changed.
   */
  storeDefaults () {
    const attributes = this.currentAttributes
    const { blocks = [] } = (attributes.content || {}) as OutputData

    this.originalBlocks = JSON.stringify(blocks)
    this.originalTitle = attributes.title || ''
  }

  /**
   * Changes the material "hasUpdated" value.
   */
  triggerUpdate (newValue: boolean) {
    if (newValue === this.material.hasUpdated) {
      return
    }

    this.$set(this.material, 'hasUpdated', newValue)
  }

  /**
   * Initializes an observer.
   */
  useObserver () {
    const RESIZE_TIMER = 250
    const titleElement = this.$refs.title as HTMLTextAreaElement

    this.resizeObserver = new ResizeObserver(
      debounce(() => {
        this.autoResize(titleElement)
      }, RESIZE_TIMER)
    )

    this.resizeObserver.observe(document.body)
  }

  /**
   * Watches title attribute and calls "triggerUpdate".
   */
  watchTitleForUpdates () {
    const DEBOUNCE_TIMER = 450

    const debouncedCallback = debounce((newValue: string) => {
      this.triggerUpdate(this.originalTitle !== newValue)
    }, DEBOUNCE_TIMER)

    this.$watch('currentAttributes.title', debouncedCallback)
  }
}
</script>

<style lang="scss" module>
.page {
  @include container();

  background-color: var(--color-layer);
  border: 1px solid var(--color-border-transparent);
  border-radius: 3px;

  color: var(--color-text);
  margin: 20px auto;
}

.main {
  align-items: flex-end;
  display: flex;
  flex-direction: column;

  margin: 20px auto;
  max-width: 650px;

  width: 100%;
}

.title {
  background-color: transparent;
  border: 0;

  color: var(--color-text);

  font-size: 24px;
  font-weight: 500;
  height: auto;
  line-height: 32px;

  margin: 0;
  outline: none;

  resize: none;
  width: 100%;

  @include breakpoint('tablet') {
    font-size: 36px;
    line-height: 42px;
  }
}

.editor {
  margin: 20px 0;
}

.buttons {
  display: flex;
}

.button:not(:last-child) {
  margin-right: 20px;
}
</style>
