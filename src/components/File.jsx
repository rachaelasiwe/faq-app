import React from 'react'
import {styled} from 'styled-components'

const input = (props) => {

  return (
      <input {...props}/>
          
  )
}
const File = styled(input)`
width: 700px;
height: 80vh;
display: flex;
align-items: center;
flex-direction: column;
border: 1px solid green;
background-color:#333;
input{
    padding: 20px;
    outline: none;
    border-radius: 5px;
    box-shadow: 0 5px 5px;
    color: ${props => props.color || "white"};
    background-color: ${props => props.bg || "rgb(180,230,180)"};
    
}

    
`

export default File