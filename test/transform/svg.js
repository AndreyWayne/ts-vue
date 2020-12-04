const vueJest = require('vue-jest/lib/template-compiler')

module.exports = {
  process (content) {
    const { render } = vueJest({
      attrs: {
        functional: false
      },

      content
    })

    return `module.exports = { render: ${render} }`
  }
}
