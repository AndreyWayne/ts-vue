import { shallowMount, Wrapper } from '@vue/test-utils'
import Avatar, { Picture } from '.'

let wrapper: Wrapper<Avatar>
let vm: any

beforeEach(() => {
  wrapper = shallowMount(Avatar, {
    propsData: {
      picture: {} as Picture
    }
  })

  vm = wrapper.vm
})

describe('Avatar', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })

  describe('get currentStyle', () => {
    it('should return backgroundImage with correct url', () => {
      const url = 'https://foo.xyz'

      const picture: Picture = {
        url
      }

      wrapper.setProps({
        picture
      })

      expect(vm.currentStyle).toEqual({ backgroundImage: `url(${url})`, height: '64px', width: '64px' })
    })
  })
})
