import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import WidgetPlayer from '.'

const components = {
  WidgetPlayer
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <WidgetPlayer />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'WidgetPlayer'
}
