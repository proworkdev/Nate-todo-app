import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components'

const TodoItem = ({ text, completed, onComplete, inProgress , progress, complete }) => (
  <Wrapper>
    <Card style={{ width: '20rem' }}>
   <Card.Body>
    <Card.Title style={{color:'black'}}>{text}</Card.Title>
    {
      !completed ?
      <div>
    {!progress&&<Button variant="primary" size="sm" style={{width:90}} onClick={onComplete}>Done</Button>}
    <Button variant="warning" size="sm" style={{width:160, marginLeft:20}} onClick={inProgress}>Work in Progress</Button>
    </div>
    :
    <div>
    <Button variant="success" size="sm" style={{width:90}} >Completed</Button>
    {!complete && <Button variant="info" size="sm" style={{width:90, marginLeft:20}} onClick={onComplete}>Reopen</Button>}
    </div>
    }
  </Card.Body>
</Card>
  </Wrapper>
)

const Wrapper = styled.div`
  font-size: 24px;
  cursor: pointer;
  margin-right:16px
  margin-bottom:12px
`



export default TodoItem
