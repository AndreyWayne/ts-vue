import { shallowMount, Wrapper } from '@vue/test-utils'
import WidgetBookmaker from '.'

let wrapper: Wrapper<WidgetBookmaker>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(WidgetBookmaker)

  // eslint-disable-next-line
  vm = wrapper.vm
})

describe('WidgetBookmaker', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
