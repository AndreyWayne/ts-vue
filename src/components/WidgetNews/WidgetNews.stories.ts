import Vue from 'vue'
import WidgetNews from '.'

const components = {
  WidgetNews
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <WidgetNews />
    `
  })
}

export default {
  title: 'WidgetNews'
}
