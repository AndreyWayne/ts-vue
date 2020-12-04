import { shallowMount, Wrapper } from '@vue/test-utils'
import EditorLink from '.'

let wrapper: Wrapper<EditorLink>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(EditorLink)
  vm = wrapper.vm
})

describe('EditorLink', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
    expect(vm).toBeTruthy()
  })
})
