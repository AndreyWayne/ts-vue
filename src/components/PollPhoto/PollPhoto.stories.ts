import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import PollPhoto from '.'

const components = {
  PollPhoto
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <PollPhoto />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'PollPhoto'
}
