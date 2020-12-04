import { shallowMount, Wrapper } from '@vue/test-utils'
import LongreadPage from './longread.vue'

let wrapper: Wrapper<LongreadPage>
// eslint-disable-next-line
let vm: any

beforeEach(() => {
  wrapper = shallowMount(LongreadPage)

  // eslint-disable-next-line
  vm = wrapper.vm
})

describe('Longread Page', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
