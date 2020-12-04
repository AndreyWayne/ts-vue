import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import ArticleGame from '.'

const components = {
  ArticleGame
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <ArticleGame />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'ArticleGame'
}
