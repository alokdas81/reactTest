import React from 'react'
import renderer from 'react-test-renderer'
import TodoList from './TodoList'

test('TodoList renders correctly', ()=>{
    const component = renderer.create( <TodoList />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
