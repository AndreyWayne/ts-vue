import { shallowMount } from '@vue/test-utils'
import TheHeader, { MenuList } from '.'

const wrapper = shallowMount(TheHeader, {
  propsData: {
    menu: []
  }
})

const vm = wrapper.vm as any

describe('TheHeader', () => {
  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })

  describe('get currentLists', () => {
    it('should map and sort a single menu', () => {
      const menu: MenuList = [
        {
          position: 1,

          title: 'foo',
          url: '/foo'
        },
        {
          position: 2,

          title: 'bar',
          url: '/bar'
        },
        {
          position: 3,

          items: [
            {
              position: 1,

              title: 'foo',
              url: '/foo'
            },
            {
              position: 2,

              title: 'bar',
              url: '/bar'
            },
            {
              position: 3,

              title: 'xyz',
              url: '/xyz'
            }
          ],

          title: 'xyz'
        }
      ]

      wrapper.setProps({ menu })
      expect(vm.currentLists).toEqual([menu])
    })

    it('should map and sort multiple menus', () => {
      const menu: MenuList = [
        [
          {
            position: 1,

            title: 'foo',
            url: '/foo'
          },
          {
            position: 2,

            title: 'bar',
            url: '/bar'
          },
          {
            position: 3,

            items: [
              {
                position: 1,

                title: 'foo',
                url: '/foo'
              },
              {
                position: 2,

                title: 'bar',
                url: '/bar'
              },
              {
                position: 3,

                title: 'xyz',
                url: '/xyz'
              }
            ],

            title: 'xyz'
          }
        ],
        [
          {
            position: 1,

            title: 'foo',
            url: '/foo'
          },
          {
            position: 2,

            title: 'bar',
            url: '/bar'
          },
          {
            position: 3,

            items: [
              {
                position: 1,

                title: 'foo',
                url: '/foo'
              },
              {
                position: 2,

                title: 'bar',
                url: '/bar'
              },
              {
                position: 3,

                title: 'xyz',
                url: '/xyz'
              }
            ],

            title: 'xyz'
          }
        ]
      ]

      wrapper.setProps({ menu })
      expect(vm.currentLists).toEqual(menu)
    })
  })

  describe('beforeDestroy', () => {
    it('should remove onWindowClick event', () => {
      window.removeEventListener = jest.fn()

      wrapper.destroy()
      expect(window.removeEventListener).toHaveBeenCalledWith('click', vm.onWindowClick)
    })
  })

  describe('mounted', () => {
    it('should add onWindowClick event', () => {
      window.addEventListener = jest.fn()

      const header = shallowMount(TheHeader, {
        propsData: {
          menu: []
        }
      }) as any

      expect(window.addEventListener).toBeCalledWith('click', header.vm.onWindowClick)
    })
  })

  describe('onWindowClick', () => {
    it('should set activeDropdown to -1', () => {
      vm.activeDropdown = Math.random()

      vm.$el.querySelector = jest.fn(() => {
        return {
          contains: () => false,

          parentElement: {
            contains: () => false
          }
        }
      })

      vm.onWindowClick({ target: null })
      expect(vm.activeDropdown).toBe(-1)
    })

    it('should skip if elementHasTarget or parentHasTarget', () => {
      vm.$el.querySelector = jest.fn(() => {
        return {
          contains: () => true,

          parentElement: {
            contains: () => true
          }
        }
      })

      const activeDropdown = Math.random()
      vm.activeDropdown = activeDropdown

      vm.onWindowClick({ target: null })
      expect(vm.activeDropdown).toBe(activeDropdown)
    })

    it('should skip if no dropdownElement', () => {
      vm.$el.querySelector = jest.fn(() => false)

      const activeDropdown = Math.random()
      vm.activeDropdown = activeDropdown

      vm.onWindowClick({ target: null })
      expect(vm.activeDropdown).toBe(activeDropdown)
    })
  })

  describe('setActiveDropdown', () => {
    it('should change the activeDropdown', () => {
      const newDropdown = Math.random()

      vm.setActiveDropdown(newDropdown)
      expect(vm.activeDropdown).toBe(newDropdown)
    })

    it('should set activeDropdown to -1', () => {
      const newDropdown = Math.random()

      vm.setActiveDropdown(newDropdown)
      vm.setActiveDropdown(newDropdown)

      expect(vm.activeDropdown).toBe(-1)
    })
  })
})
