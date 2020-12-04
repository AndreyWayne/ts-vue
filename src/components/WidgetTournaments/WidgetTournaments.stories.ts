import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import WidgetTournaments from '.'

const components = {
  WidgetTournaments
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <WidgetTournaments />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'WidgetTournaments'
}
