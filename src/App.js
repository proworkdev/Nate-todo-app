import React,{Component} from 'react'
import { Provider, Subscribe } from 'unstated'

import styled from 'styled-components'

import TodosContainer from './store'

import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'


class App extends Component {

render(){
  return (
    <Provider>
      <Wrapper>
        <Subscribe to={[TodosContainer]}>
          {todos => {
            const progress = JSON.parse(localStorage.getItem('showProgresslist'))
            const complete = JSON.parse(localStorage.getItem('showCompleteList'))
            const data =  
            progress ?JSON.parse(localStorage.getItem('items')).filter((data, index)=>{
              if(data.inprogress){
                return data
              }
            })
            :
            complete?
            JSON.parse(localStorage.getItem('items')).filter((data, index)=>{
              if(data.completed){
                return data
              }
            })
            :JSON.parse(localStorage.getItem('items'))
            return (
              <TodosWrapper>
                <AddTodo onProgressList={todos.onProgressList} onAddTodo={todos.createTodo} onShowInput={todos.showInput} stateShowInput={todos.state.showInput} onChangeText={todos.onChangeText}text={todos.state.text} onCompleteList={todos.onCompleteList} progress={progress} complete={complete}/>
                <TodoList items={data} toggleComplete={todos.toggleComplete} onProgress={todos.onProgress} progress={progress} complete={complete}/>
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
  background-color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  color: white;
  margin-top:40px
  margin-left:50px
`

const TodosWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default App
