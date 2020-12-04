import { shallowMount } from '@vue/test-utils'
import IndexPage from './index.vue'

function build () {
  const wrapper = shallowMount(IndexPage)
  const vm = wrapper.vm

  return {
    wrapper,
    vm
  }
}

describe('Material page', () => {
  it('should render', () => {
    const { wrapper } = build()
    expect(wrapper).toBeTruthy()
  })
})
