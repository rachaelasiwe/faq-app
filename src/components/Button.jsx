import React from 'react'
import { styled } from 'styled-components'

const Btn = (props) => {
    const label = props.children || props.label || "Rachael"
  return (
      <button  {...props}>
          {label}
     </button>
  )
}

const Button = styled(Btn)`
    padding: 12px 30px;
    background-color: rgb(180,230,180);
    border:none;
    border-radius: 6px;
    cursor: pointer;
    color: ${props => props.color || "black"};
    background-color: ${props => props.bg || "rgb(180,230,180)"};

     &:hover{
        background-color: rgb(30,50,30);
        color: white;
     }
     &.active{
        background-color: rgb(30,50,30) !important;
        color:white !important;
     }
`
export default Button