import React from 'react'
import { styled } from 'styled-components'
const faq_list = [
    {
        id: 1,
        question: "what is html",
        answer: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."
    },
    {
        id: 2,
        question: "what is css",
        answer: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML"
    },
    {
        id: 3,
        question: "what is javascript",
        answer: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
    }
]
const Faq = () => {
  return (
      <Wrapper>
         FAQ
    </Wrapper>
  )
}

export default Faq
const Wrapper = styled.section`
width: 60%;
margin: 30px auto;
border: 1px dotted purple;
padding: 20px;
`