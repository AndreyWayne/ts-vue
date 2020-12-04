import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import ArticleReview from '.'

const components = {
  ArticleReview
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <ArticleReview />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'ArticleReview'
}
