declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'vue/dist/vue.common' {
  import Vue from 'vue/types'
  export default Vue
}
