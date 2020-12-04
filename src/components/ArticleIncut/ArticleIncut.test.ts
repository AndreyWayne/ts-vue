import { shallowMount, Wrapper } from '@vue/test-utils'
import ArticleIncut from '.'

let wrapper: Wrapper<ArticleIncut>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(ArticleIncut)
  vm = wrapper.vm
})

describe('ArticleIncut', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
    expect(vm).toBeTruthy()
  })
})
