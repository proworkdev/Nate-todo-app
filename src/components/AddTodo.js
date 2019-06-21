/* eslint-disable */
import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import styled from 'styled-components'

const AddTodo = ({ onAddTodo, onShowInput, stateShowInput,progress,complete,onCompleteList, onProgressList, onChangeText, text }) => {
  const handleKeyPress = (e) => {
    e.preventDefault()
    if(text===''){
      alert('Please enter the text')
    }
    else{
      onAddTodo(text)
    }
  }

  const showInput = ()=>{
    onShowInput()
  }
  return (
    <AddWrapper>
    <ButtonToolbar >
      <Button variant="primary" size="lg" onClick={()=>showInput()}style={{width:300}}>All</Button>
      <Button variant="success" size="lg"  style={{marginLeft:61, width:300}} onClick={()=> onCompleteList()} >Complete</Button>
      <Button variant="danger" size="lg"  style={{marginLeft:61, width:300}} onClick={()=> onProgressList()}>In-Progress</Button>
    </ButtonToolbar>
    <InputWrapper>
    {(!progress && !complete) &&
    <form onSubmit={(e)=>handleKeyPress(e)} >
    <Input
      type='text'
      onChange={(e)=>onChangeText(e.target.value)}
      placeholder='Add new todo...'
      value={text}
    />
    <Button variant="secondary" type='submit' size="sm" style={{width:90, height:45, marginLeft:20}} >Add</Button>
    </form>
    }
    </InputWrapper>
     </AddWrapper>
  )
}

const Input = styled.input`
  background:purple;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px 18px;
  font-size: 24px;
  height: 45px;
  width: 400px;
 
  margin-bottom:24px
  &::placeholder {
    color: #8d96a8;
  }
`
const AddWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const InputWrapper = styled.div`
display: flex;
flex-direction: row;
margin-top:55px
`
export default AddTodo
