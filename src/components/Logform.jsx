import React from 'react'
import styled from 'styled-components'
import { File } from '.';

const Logform = () => {
    return (
    <Container>
        <section>
            <form>
                <label>Fullname: </label>
                <input color="#ddd" type="text" placeholder="Enter Full name" />
                <label>Password:</label>
                <input type="text" placeholder="Enter Password" />
                <label>Email</label>
                <input type="email" placeholder="rachaelisioma69@gmail.com"/>
                <label>gender</label>
                <select>
                <option>select gender</option>
                <option>Male</option>
                <option>Female</option>
                </select>
                <label>Submit</label>
                <input type="submit" />
            </form>
        </section>
    </Container>
  )
}
const Container = styled.section`
width: 800px;
display: flex;
margin: 30px auto;
align-items: center;
flex-direction: column;
border: none;
background-color: transparent;
section{
    width: 600px;
    height: 80vh;
    background-color: #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid blue;
    border-radius: 8px;
    margin: 20px auto;
    & > form{
        width: 400px;
        height: 70vh;
        display: flex;
        align-items: center;
        gap:20px;
        flex-direction: column;
        border: 1px dotted greenyellow;
        padding: 20px 10px;
        margin: 40px auto;
        background-color: blueviolet
    }
}
`

export default Logform