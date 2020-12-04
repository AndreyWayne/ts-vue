import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import WidgetMatch from '.'

const components = {
  WidgetMatch
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <WidgetMatch />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'WidgetMatch'
}
