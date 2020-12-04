import { shallowMount, Wrapper } from '@vue/test-utils'
import Tags from '.'

let wrapper: Wrapper<Tags>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(Tags)

  // eslint-disable-next-line
  vm = wrapper.vm
})

describe('Tags', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
