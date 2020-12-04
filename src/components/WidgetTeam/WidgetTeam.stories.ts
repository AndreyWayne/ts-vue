import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import WidgetTeam from '.'

const components = {
  WidgetTeam
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <WidgetTeam />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'WidgetTeam'
}
