import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import ArticleTable from '.'

const components = {
  ArticleTable
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <ArticleTable />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'ArticleTable'
}
