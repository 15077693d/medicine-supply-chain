import React from 'react';
import styled from 'styled-components';
import logoSrc from '../images/logo.png'
import {H1} from '../globalStyles'
import CreateChain from './createChain'
import Nav from '../components/nav'
import Table from '../components/table'
import {SwitchButton} from '../components/button'
import {getSupplyChainAddress} from '../ethereum/supplyChain'
const MainContainer = styled.div`
    display:grid;
    margin:auto;
    padding-top:40px;
    height:500px;
    width:90vw;
    min-width:1090px;
    max-width:1141px;
    grid-template-areas:
    'logo empty1 nav nav'
    'title title title title'
    'empty empty empty switch'
    'table table table table';
    grid-template-rows: 20% 8% 8% 64%;
    grid-template-columns: 20% 55% 5% 20%;
`
const Title = styled(H1)`
    grid-area:title;
`

const Logo = styled.img`
    border-radius:10px;
    width:228px;
    height:77px;
    grid-area:logo;
`
const Main = () => {
    return (
        <>
        <CreateChain/>
        <MainContainer>
        <Logo src={logoSrc}></Logo>
        <Nav></Nav>
        <Title>Medicine Supply Management</Title>
        <SwitchButton/>
        <Table/>
        </MainContainer>
        </>
    );
}; 
export default Main;