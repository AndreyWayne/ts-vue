import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import WidgetTournament from '.'

const components = {
  WidgetTournament
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <WidgetTournament />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'WidgetTournament'
}
