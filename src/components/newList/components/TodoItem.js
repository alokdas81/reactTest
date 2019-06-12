import React from 'react'

import styled from 'styled-components'

const TodoItem = ({ text, completed, details, onComplete, onToggle, toggledetails }) => (
  
  <Wrapper >
    <code>
      <Text onClick={onComplete} completed={completed}>{text}</Text><TextStat completed={completed}> - {completed ? 'COMPLETED' : 'ACTIVE'}</TextStat>
      <button style={btn} onClick={onToggle}>Show details</button>
      
      
    </code>
    <Text style={!toggledetails ? hideDiv : {display:'block', marginTop:'10px'}}>
        {details}
    </Text>
  </Wrapper>
)

const hideDiv = {
  display:'none'
};

const btn = {
  fontSize: '13px',
    textAlign: 'center',
    backgroundColor:'#ffffff',
    color:'#6f6f6f',
    height:'25px',
    width:'100px',
    border:"none",
    marginLeft:'10px'
};

const Wrapper = styled.p`
  font-size: 24px;
  cursor: pointer;
`

const Text = styled.span`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`

const TextStat = styled.span`
  color: ${props => (props.completed ? '#14a022' : '#FBD73F')};
`

export default TodoItem
