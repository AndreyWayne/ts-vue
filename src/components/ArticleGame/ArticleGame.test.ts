import { shallowMount, Wrapper } from '@vue/test-utils'
import ArticleGame from '.'

let wrapper: Wrapper<ArticleGame>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(ArticleGame)
  vm = wrapper.vm
})

describe('ArticleGame', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
    expect(vm).toBeTruthy()
  })
})
