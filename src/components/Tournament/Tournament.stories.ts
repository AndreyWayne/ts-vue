import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import Tournament from '.'

const components = {
  Tournament
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <Tournament />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'Tournament'
}
