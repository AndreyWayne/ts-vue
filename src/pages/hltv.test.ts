import { shallowMount, Wrapper } from '@vue/test-utils'
import HltvPage from './hltv.vue'

let wrapper: Wrapper<HltvPage>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(HltvPage)

  // eslint-disable-next-line
  vm = wrapper.vm
})

describe('Hltv page', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
