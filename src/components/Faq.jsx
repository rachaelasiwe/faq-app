import React, { useState } from 'react'
import { styled } from 'styled-components'
const faq_list = [
    {
        id: 1,
        question: "what is html?",
        answer: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."
    },
    {
        id: 2,
        question: "what is css?",
        answer: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML"
    },
    {
        id: 3,
        question: "what is javascript?",
        answer: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
    },
    {
        id: 4,
        question: "what is react js?",
        answer: "React is a free and open-source front-end JavaScript library for building user interfaces based on components."
    }
]

const Faq = () => {
    const [show_index, set_show_index] = useState(null);
    const handleClick = (id) => {
        if (show_index == id) {
            set_show_index(null)
            return;
        }
        set_show_index(id);
    }
  return (
      <Wrapper>
          {faq_list.map((each_Faq) =>
          <div key={each_Faq.id}>
                  <div onClick={()=>handleClick(each_Faq.id)}>{each_Faq.question}
                      <span> + </span>
                  </div>
                  {show_index == each_Faq.id ?
                      <div>
                      {each_Faq.answer}
                  </div>
                 : <></> }
              </div>
          )}
    </Wrapper>
  )
}

export default Faq
const Wrapper = styled.section`
width: 60%;
margin: 30px auto;
/* border: 1px dotted orangered; */
padding: 20px;
& > div > div:first-child{
    background-color: rgb(45,20,55);
    display:flex;
    justify-content: space-between;
    padding: 8px;
    gap: 20px;
    align-items: center;
    color: white;
    font-size: 20px;
    & > span{
        cursor:pointer;
    }
}
& > div > div:nth-child(2){
    background-color: #f2f2f2;
    font-size: 18px;
    padding: 20px;
    line-height: 1.5;
}
& > div{
    margin-top: 5px;
}
`