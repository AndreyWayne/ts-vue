import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import WidgetBookmaker from '.'

const components = {
  WidgetBookmaker
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <WidgetBookmaker />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'WidgetBookmaker'
}
