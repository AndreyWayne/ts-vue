import { shallowMount, Wrapper } from '@vue/test-utils'
import DpcPage from './dpc.vue'

let wrapper: Wrapper<DpcPage>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(DpcPage)

  // eslint-disable-next-line
  vm = wrapper.vm
})

describe('Dpc page', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
