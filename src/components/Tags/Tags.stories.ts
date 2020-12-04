import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import Tags from '.'

const components = {
  Tags
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <Tags />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'Tags'
}
