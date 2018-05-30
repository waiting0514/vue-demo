import Vue from 'vue'
import { shallow } from 'vue-test-utils'
import ToDoList from '@/components/ToDoList'

describe('ToDoList.vue', () => {
    let wrapper, vm
    beforeEach(() => {
        wrapper = shallow(ToDoList,{
            data:{
                list:[
                    {
                        checked: true,
                        isEdit: false,
                        content: 'aaa'
                    },
                    {
                        checked: false,
                        isEdit: false,
                        content: 'bbb'
                    },
                    {
                        checked: false,
                        isEdit: false,
                        content: 'ccc'
                    },
                ]
            }
        })
        vm = wrapper.vm
      })
  it('test source list', () => {
    expect(vm.list)
      .toEqual([
            {
                checked: true,
                isEdit: false,
                content: 'aaa'
            },
            {
                checked: false,
                isEdit: false,
                content: 'bbb'
            },
            {
                checked: false,
                isEdit: false,
                content: 'ccc'
            },
        ])
  })
  it('has the expected html structure', () => {
    expect(vm.$el).toMatchSnapshot()
  })
  describe('Event', () => {
    it('call del when click del btn', () => {
        const stub = jest.fn()
        wrapper.setMethods({ del: stub })
        // let el = wrapper.find('.view').element
        expect(wrapper.contains('.view')).toBe(true)
        // expect(wrapper.find('.view')).toBe(true)

        // wrapper.find('.view')[0].simulate('mouseEnter')
  
        // const el = wrapper.find('.destory')[0].trigger('click')
        // expect(stub).toBeCalled()
      })
  })
})
