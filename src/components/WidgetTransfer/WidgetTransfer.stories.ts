import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import WidgetTransfer from '.'

const components = {
  WidgetTransfer
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <WidgetTransfer />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'WidgetTransfer'
}
