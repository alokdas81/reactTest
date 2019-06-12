// import React from 'react'
// import renderer from 'react-test-renderer'
// import TodoList from './TodoList'

// test('TodoList renders correctly', ()=>{
//     const component = renderer.create( <TodoList />)
//     const tree = component.toJSON()
//     expect(tree).toMatchSnapshot()
// })


import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
