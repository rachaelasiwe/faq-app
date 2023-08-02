import React,{useState} from 'react'
import styled from 'styled-components';
import { Button } from '.';
const highlight = [
  'BTN1',
  'BTN2',
  'BTN3',
  'BTN4',
  'BTN5',
]

const LinkButton = () => {

  return (
    <Container> 
      {
        highlight.map((item, index) =>
          <Button color="#aaa" bg="purple" key={index}>
            {item}
          </Button>
      
        )}
    </Container>   
  )
}

export default LinkButton;
const Container = styled.section`
  width: 600px;
  margin: 20px auto;
  display: flex;
  justify-content: space-evenly
 
`