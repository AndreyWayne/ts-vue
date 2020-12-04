import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import ArticleIncut from '.'

const components = {
  ArticleIncut
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <ArticleIncut />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'ArticleIncut'
}
