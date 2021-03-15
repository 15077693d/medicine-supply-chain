import React from 'react';
import styled from 'styled-components';
import {NavButton} from './button'
const NavContainer = styled.div`
    grid-area:nav;
    display:flex;
    justify-content:space-between;
`
const Nav = () => {
    return (
        <NavContainer>
            <NavButton width={"180px"}>Login</NavButton>
            <NavButton width={"83px"}>+</NavButton>
        </NavContainer>
    );
};

export default Nav;