import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import EditorLink from '.'

const components = {
  EditorLink
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <EditorLink />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'EditorLink'
}
