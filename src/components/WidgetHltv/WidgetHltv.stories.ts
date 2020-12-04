import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import WidgetHltv from '.'

const components = {
  WidgetHltv
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <WidgetHltv />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'WidgetHltv'
}
