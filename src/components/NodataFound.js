import React from 'react'
import Card from 'react-bootstrap/Card';
import styled from 'styled-components'

const NoData = () => (
  <Wrapper>
    <Card style={{ width: '20rem' }}>
   <Card.Body>
    <Card.Title style={{color:'black'}}>{'No Data Found in List'}</Card.Title>
  </Card.Body>
</Card>
  </Wrapper>
)

const Wrapper = styled.div`
  font-size: 24px;
  cursor: pointer;
  margin-right:16px
`


export default NoData
