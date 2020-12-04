import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import Tabs from '.'

const components = {
  Tabs
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <Tabs />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'Tabs'
}
