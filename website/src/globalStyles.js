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
    radius: "5px"
}

const Button = styled.span`
    padding:${props => props.padding};
    cursor: pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:${props => props.bgColor};
    border-radius:${theme.radius};
    color:${props => props.color?props.color:"white"};
    width:${props => props.width};
    height:${props => props.height};
    transition: all 0.2s ease-in-out;
    box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.2);
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
    color: ${props => props.color};
    font-size: 12px;
`

const Title = styled.div`
    font-size: 40px;
`

const Blocker = styled.div`
    position: absolute;
    width:100vw;
    height:100vh;
    z-index:1;
    background-color:#707070;
    opacity:0.69;
    overflow-y:hidden;
    display:flex;
    justify-content:center;
`
export { GlobalStyles, theme, H1, L1, L2, L3, Button, Title, Blocker };