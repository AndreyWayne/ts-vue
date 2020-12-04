import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import Button from '.'

const components = {
  Button
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <Button />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'Button'
}
