import { shallowMount } from '@vue/test-utils'
import defaultLayout from './default.vue'

const wrapper = shallowMount(defaultLayout)

describe('Default layout', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
