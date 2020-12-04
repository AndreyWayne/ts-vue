import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import Awards from '.'

const components = {
  Awards
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <Awards />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'Awards'
}
