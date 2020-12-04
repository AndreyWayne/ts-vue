import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import SettingsFilter from '.'

const components = {
  SettingsFilter
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <SettingsFilter />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'SettingsFilter'
}
