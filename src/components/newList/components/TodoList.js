import React from 'react'

import styled from 'styled-components'

import TodoItem from './TodoItem'

const TodoList = ({ items, toggleComplete, filterOption, onToggle, showDetailsId }) => (
  <Wrapper>
    {
      items.map(item => {
      const onComplete = e => {
        toggleComplete(item.id)
      }
      if(filterOption === 'completed'){
        if(item.completed === true){
          return <TodoItem key={item.id} {...item}  onComplete={onComplete} toggledetails={showDetailsId === item.id ? true : false } onToggle={()=>onToggle(item.id)}/>
        }
      }
      else if(filterOption === 'active'){
        if(item.completed === false){
          return <TodoItem key={item.id} {...item} onComplete={onComplete} toggledetails={showDetailsId === item.id ? true : false } onToggle={()=>onToggle(item.id)}/>
        }
      }
      else{
        return <TodoItem key={item.id} {...item} onComplete={onComplete} toggledetails={showDetailsId === item.id ? true : false } onToggle={()=>onToggle(item.id)}/>
      }
    })}
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default TodoList
