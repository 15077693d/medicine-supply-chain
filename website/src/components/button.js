import React from 'react';
import {theme, Button, L3, L2, L1} from '../globalStyles'
import styled from 'styled-components'

const InfoButton = ({handleClick,children}) => {
    return (
        <Button onClick={handleClick} max_width={"80%"} padding={"10px"} width={"fit-content"} height={"fit-content"} bgColor={theme.color.btn_grey} >
            <L3 width={"100%"}>{children}</L3>
        </Button>
    );
};

const ProgressButton = ({children, status}) => {
    // status: true false underfined
    let bgColor;
    switch (status) {
        case true:
            bgColor=theme.color.btn_blue
            break;
        case false:
            bgColor=theme.color.btn_red
            break;
        default:
            bgColor=theme.color.btn_grey
            break;
    }
    return (
        <Button bgColor={bgColor} width={"92px"} height={"47px"}>
            <L2>{children}</L2>
        </Button>
    );
};

const NavButton = ({onClick, children, width}) => {
    return (
        <Button onClick={onClick} bgColor={theme.color.btn_grey} width={width} height={"77px"}>
            <L1>{children}</L1>
        </Button>
    );
};

const SwitchButtonContainer = styled(Button)`
    position:relative;
    top:3px;
    right:2px;
    box-shadow:none;
    border-radius:0px;
    border-top-left-radius:30px;
    border-top-right-radius:10px;
    height:100%;
    width:100%;
    grid-area:switch;
    background-color:${theme.color.company_blue};
`
const SwitchButton = () => {
    return <SwitchButtonContainer>
        <L2>Your Cases</L2>
    </SwitchButtonContainer>   
}
export {ProgressButton,NavButton, SwitchButton, InfoButton};