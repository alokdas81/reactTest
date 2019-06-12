import React from 'react'
import { Provider, Subscribe } from 'unstated'
import { Link } from 'react-router'
import styled from 'styled-components'

import TodosContainer from './store'

import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import FilterTodo from './components/FilterTodo'

class App extends React.Component{
  constructor(){
    super();
    this.state={
      filterState:''
    }
    this.setFilter = this.setFilter.bind(this);
  }

  setFilter(state){
    console.log(state);
    this.setState({
      filterState:state
    })
  }
  render(){
    return (
      <Provider>
        <Wrapper>
          <Subscribe to={[TodosContainer]}>
            {todos => {
              const list = todos.getList()
              return (
                <TodosWrapper>
                  <Link to="newList" >GO TO NEW LIST</Link>
                  <AddTodo onAddTodo={todos.createTodo} />
                  <FilterTodo getData={this.setFilter} />
                  <TodoList items={list} filterOption={this.state.filterState} toggleComplete={todos.toggleComplete} />
                </TodosWrapper>
              )
            }}
          </Subscribe>
        </Wrapper>
      </Provider>
    )
  }
}

const Wrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
`

const TodosWrapper = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
`

export default App
