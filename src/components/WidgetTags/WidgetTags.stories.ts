import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import WidgetTags from '.'

const components = {
  WidgetTags
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <WidgetTags />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'WidgetTags'
}
