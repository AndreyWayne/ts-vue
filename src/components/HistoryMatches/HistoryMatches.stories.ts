import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import HistoryMatches from '.'

const components = {
  HistoryMatches
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <HistoryMatches />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'HistoryMatches'
}
