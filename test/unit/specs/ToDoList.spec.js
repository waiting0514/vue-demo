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
    it('新增資料', () => {
        const stub = jest.fn()
        wrapper.setData({newContent:'ddd'})
        wrapper.vm.add()

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
                {
                    checked: false,
                    isEdit: false,
                    content: 'ddd'
                },
            ])
        })

    it('雙擊第一筆', () => {
        const stub = jest.fn()
        wrapper.vm.edit(0)

        expect(vm.list)
        .toEqual([
                {
                    checked: true,
                    isEdit: true,
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

    it('關閉編輯第一筆', () => {
        const stub = jest.fn()
        wrapper.vm.endEdit(0)

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

    it('刪除第一筆', () => {
        const stub = jest.fn()
        wrapper.vm.del(0)

        expect(vm.list)
        .toEqual([
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

      it('點擊顯示所有', () => {
        const stub = jest.fn()
        wrapper.vm.filterAll()

        expect(vm.filter)
        .toEqual(0)
      })
      it('點擊顯示未完成', () => {
        const stub = jest.fn()
        wrapper.vm.filterActive()

        expect(vm.filter)
        .toEqual(1)
      })  
      it('點擊顯示已完成', () => {
        const stub = jest.fn()
        wrapper.vm.filterCompleted()

        expect(vm.filter)
        .toEqual(2)
      })  
  })
})
