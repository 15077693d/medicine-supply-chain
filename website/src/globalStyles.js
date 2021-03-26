// globalStyles.js
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body{
        position:relative;
        margin:0px;
        padding:0px;
    }
    *{
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
        font-family: 'Lato', sans-serif;
        -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
    }
`
const theme = {
    color: {
        company_blue: "#1F689E",
        btn_blue: "#0087FF",
        btn_red: "#FF003C",
        btn_grey: "#908E8E",
        bar_grey: "#F2F2F2",
    },
    radius:{
        small: "5px",
        medium:"10px",
        large:"20px",
    },
    margin:{
        small: "10px",
        medium:"20px",
        large:"40px",
    },
    box_shadow:"2px 2px 4px 1px rgba(0, 0, 0, 0.2)",
    max_width:"1141px",
    min_width:"1090px"
}

const Button = styled.button`
    min-height:50px;
    word-wrap: break-word;
    max-width:${props => props.max_width};
    outline:none;
    border:none;
    padding:${props => props.padding};
    cursor: pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:${props => props.bgColor};
    border-radius:${theme.radius.small};
    color:${props => props.color?props.color:"white"};
    width:${props => props.width};
    height:${props => props.height};
    transition: all 0.2s ease-in-out;
    box-shadow: ${theme.box_shadow};
    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 1;
    }
    text-align:center;
`
const H1 = styled.div`
    color: ${props => props.color};
    font-size: 40px;
`
const L1 = styled.div`
    color: ${props => props.color?props.color:"white"};
    font-size: 30px;
`
const L2 = styled.div`
    color: ${props => props.color};
    font-size: 16px;
`
const L3 = styled.div`
    width:${props=>props.width};
    color: ${props => props.color};
    font-size: 12px;
`

const Title = styled.div`
    font-size: 40px;
`

const Input = styled.input`
    background-color:${theme.color.bar_grey};
    border:none;
    border-bottom: 2px solid ${theme.color.btn_blue};
    color:${theme.color.btn_blue};
    outline:none;
    font-size:30px;
    padding-left:${theme.margin.small};
    padding-right:${theme.margin.small};
    ::placeholder{
        color:${theme.color.btn_blue};
    }
`
const Field = styled.div`
word-wrap:none;
width:${props => props.width};
overflow:scroll;
background-color:${theme.color.bar_grey};
border:none;
border-bottom: 2px solid ${theme.color.btn_blue};
color:${theme.color.btn_blue}!important;
outline:none;
font-size:30px;
padding-left:${theme.margin.small};
padding-right:${theme.margin.small};
`
const Blocker = styled.div`
    position: absolute;
    width:100vw;
    height:100vh;
    z-index:1;
    background-color:rgb(112,112,112,0.65);
    overflow-y:hidden;
    display:flex;
    justify-content:center;
    align-items:center;
    min-width:${props => props.theme.min_width};
`
const PopUpContianer = styled.div`
  text-align:left!important;
  border-radius:${props=>props.theme.radius.large};
  background-color:white;
  height:50%;
  width:800px;
  min-height:400px;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:${props=>props.theme.margin.large} 0;
  overflow:scroll;
`

const FormInput = styled(Input)`
  width: 600px;
  height: 50px;
`
const FormButton = styled(Button)`
 font-size:30px;
 width: 600px;
 height: 50px;
 background-color:${props=>props.bgColor?props.bgColor:props.theme.color.btn_blue};
`

const Form = styled.form`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  height:100%;
`

const InfoContainer = styled.div`
    overflow:scroll;
    height:300px;
    width:45%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`

export { InfoContainer,FormInput,FormButton,Form,GlobalStyles,PopUpContianer,Field, theme, H1, L1, L2, L3, Button, Title, Blocker ,Input};