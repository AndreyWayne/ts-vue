import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import PollSwipe from '.'

const components = {
  PollSwipe
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <PollSwipe />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'PollSwipe'
}
