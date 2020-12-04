import { shallowMount, Wrapper } from '@vue/test-utils'
import Organization from './organization.vue'

let wrapper: Wrapper<Organization>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(Organization)

  // eslint-disable-next-line
  vm = wrapper.vm
})

describe('Organization page', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
