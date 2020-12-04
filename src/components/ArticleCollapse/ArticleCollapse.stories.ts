import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import ArticleCollapse from '.'

const components = {
  ArticleCollapse
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <ArticleCollapse />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'ArticleCollapse'
}
