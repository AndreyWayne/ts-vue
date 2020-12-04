import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import PollQuiz from '.'

const components = {
  PollQuiz
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <PollQuiz />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'PollQuiz'
}
