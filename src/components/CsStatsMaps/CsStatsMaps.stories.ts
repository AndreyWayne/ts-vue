import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import CsStatsMaps from '.'

const components = {
  CsStatsMaps
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <CsStatsMaps />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'CsStatsMaps'
}
