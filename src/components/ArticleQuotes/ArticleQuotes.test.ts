import { shallowMount, Wrapper } from '@vue/test-utils'
import ArticleQuotes from '.'

let wrapper: Wrapper<ArticleQuotes>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(ArticleQuotes)
  vm = wrapper.vm
})

describe('ArticleQuotes', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
    expect(vm).toBeTruthy()
  })
})
