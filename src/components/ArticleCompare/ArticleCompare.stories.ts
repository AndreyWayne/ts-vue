import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import ArticleCompare from '.'

const components = {
  ArticleCompare
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <ArticleCompare />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'ArticleCompare'
}
