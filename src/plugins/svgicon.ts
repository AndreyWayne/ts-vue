import Vue from 'vue'

export const SvgIcon = Vue.extend({
  name: 'SvgIcon',
  functional: true,

  props: {
    height: {
      default: 0,
      type: Number
    },

    name: {
      required: true,
      type: String
    },

    width: {
      default: 0,
      type: Number
    }
  },

  render (h, data) {
    const { height, name, width } = data.props as any

    let icon: any
    const attrs = {} as any

    if (height > 0) {
      attrs.height = height
    }

    if (width > 0) {
      attrs.width = width
    }

    try {
      icon = require(`../assets/icons/${name}.svg`)
    } catch (error) {
      console.error(`Failed to load "${name}": ${error.message}`)
    }

    if (!icon) {
      return h()
    }

    return h(icon, {
      attrs
    })
  }
})

Vue.component('SvgIcon', SvgIcon)
