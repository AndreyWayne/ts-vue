import Vue from 'vue'
import TheHeader from '.'

const components = {
  TheHeader
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <TheHeader />
    `
  })
}

export default {
  title: 'TheHeader'
}
