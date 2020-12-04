import { shallowMount, Wrapper } from '@vue/test-utils'
import SettingsFilter from '.'

let wrapper: Wrapper<SettingsFilter>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(SettingsFilter)
  vm = wrapper.vm
})

describe('SettingsFilter', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
    expect(vm).toBeTruthy()
  })
})
