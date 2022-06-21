import styled from "styled-components";

export const Container = styled.header`
background-color: #FFE600;
height: 60px;
display: flex;
`
export const Wrapper = styled.nav`
margin: 0 auto;
display: inline-flex;
align-items: center;
img{
    width: 70px;
    height: 40px;
}
div{
    display: flex;
}
`

export const Input = styled.input`
  padding: 10px;
  margin: 0 0 0 10px;
  border: none;
  width: 800px;
  border-radius: 2px;
  ::placeholder {
    color: #999;
  }

`

export const IconButton = styled.button`
border: 0;
padding: 0;
width: 45px;
border-radius: 2px;
cursor: pointer;
img{
    width: 20px;
    height: 20px;
}
`
