import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import Lineup from '.'

const components = {
  Lineup
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <Lineup />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'Lineup'
}
