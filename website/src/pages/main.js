import React, { useState } from 'react';
import styled from 'styled-components';
import logoSrc from '../images/logo.png'
import { H1 } from '../globalStyles'
import CreateChain from './createChain'
import Nav from '../components/nav'
import Table from '../components/table'
import { SwitchButton } from '../components/button'

const MainContainer = styled.div`
    display:grid;
    margin:auto;
    padding-top:40px;
    height:600px;
    width:90vw;
    min-width:${props => props.theme.min_width};
    max-width:${props => props.theme.max_width};
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
    border-radius:${props => props.theme.radius.medium};
    width:228px;
    height:77px;
    grid-area:logo;
`
const Main = () => {
    const [page, setPage] = useState(false)
    const backMain = (e) => { if(e.target.id==="blocker"){ setPage(false)}}
    let pageNode;
    switch (page) {
        case "createChain":
            pageNode = <CreateChain handleClose={backMain}/>
            break;
        default:
            pageNode = null
    }
    return (
        <>
            {pageNode}
            <MainContainer>
                <Logo src={logoSrc}></Logo>
                <Nav openCreateChain = {() => setPage("createChain")}></Nav>
                <Title>Medicine Supply Management</Title>
                <SwitchButton />
                <Table />
            </MainContainer>
        </>
    );
};
export default Main;