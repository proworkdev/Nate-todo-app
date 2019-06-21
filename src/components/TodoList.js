import React from 'react'

import styled from 'styled-components'
import NoData from './NodataFound'
import TodoItem from './TodoItem'

const TodoList = ({ items, toggleComplete ,onProgress,progress,complete  }) => {


  return(
    items.length>0 ?(
  <Wrapper>
    {
      items.map(item => {
      const onComplete = e => {
        toggleComplete(item.id)
      }
      const inProgress = e =>{
        onProgress(item.id)
      }
      return <TodoItem key={item.id} {...item} onComplete={onComplete} inProgress={inProgress} progress={progress} complete={complete} />
    })}
  </Wrapper>
    ):
    (
  <NoData/>
    )
)
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top:25px;
  flex-wrap: wrap;
`

export default TodoList
