import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import NearestMatch from '.'

const components = {
  NearestMatch
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <NearestMatch />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'NearestMatch'
}
