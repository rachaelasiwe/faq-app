import React, { useState } from 'react';
import styled from 'styled-components';
import {Button} from '.'
const btn_list = [
    'HOME',
    'ABOUT',
    'PRODUCT',
    'SERVICE',
    'CONTACT'
]
const ButtonDiv = () => {
    const [active_btn, set_active_btn] = useState(0)
  return (
      <Wrapper>
          {
              btn_list.map((btn, index) =>
                  <Button color="red" bg="#f2f2f2" key={index} className={active_btn == index ? "active" : ""} onClick={()=>set_active_btn(index)}>
                      {btn}
                  </Button>
              )}
    </Wrapper>
  )
}

export default ButtonDiv

const Wrapper = styled.section `
  width: 700px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  
`