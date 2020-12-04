import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import MaterialFooter from '.'

const components = {
  MaterialFooter
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <MaterialFooter />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'MaterialFooter'
}
