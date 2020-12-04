import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import PollVideo from '.'

const components = {
  PollVideo
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <PollVideo />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'PollVideo'
}
