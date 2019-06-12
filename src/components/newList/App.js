import React from 'react'
import { Provider, Subscribe } from 'unstated'
import { Link } from 'react-router'
import styled from 'styled-components'

import TodosContainer from '../../store'

import TodoList from './components/TodoList'
// import FilterTodo from './components/FilterTodo'

class App extends React.Component{
  constructor(){
    super();
    this.state={
      filterState:'',
      showDetailsId:0
    }
    this.setFilter = this.setFilter.bind(this);
    this.onToggle = this.onToggle.bind(this);
  }

  setFilter(state){
    console.log(state);
    this.setState({
      filterState:state
    })
  }

  onToggle(id){
      this.setState({
          showDetailsId:id
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
                    <Link to="/" >BACK</Link>
                  {/* <FilterTodo getData={this.setFilter} /> */}
                  <TodoList items={list} onToggle={this.onToggle} showDetailsId={this.state.showDetailsId} toggleComplete={todos.toggleComplete} />
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
  background-color: #3F51B5;
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
