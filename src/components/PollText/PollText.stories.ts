import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import PollText from '.'

const components = {
  PollText
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <PollText />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'PollText'
}
