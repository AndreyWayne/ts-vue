import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import ArticleQuotes from '.'

const components = {
  ArticleQuotes
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <ArticleQuotes />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'ArticleQuotes'
}
