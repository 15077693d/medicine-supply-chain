import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logoSrc from '../images/logo.png'
import { H1, Blocker } from '../globalStyles'
import CreateChain from './CreateChain'
import DevelopedMedicine from './DevelopedMedicine'
import ShowInfo from './ShowInfo'
import Nav from '../components/nav'
import Table from '../components/table'
import { SwitchButton } from '../components/button'
import {getSupplyChains} from '../ethereum/supplyChainFactory'
import ExternalQCQA from './ExternalQCQA'
import InternalQCQA from './InternalQCQA'
import Approved from './Approved'
import Purchase from './Purchase'
import Supply from './Supply'

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
    const [supplyChains, setSupplyChains] =useState(null)
    const [createdFlag, setCreatedFlag] = useState(false)
    const [selectInfo, setSelectInfo] = useState(false)
    useEffect(
        ()=>{
            const _getSupplyChains = async () => {
                setSupplyChains(await getSupplyChains())
            }
            _getSupplyChains()
        },[createdFlag]
    )
    const backMain = (e) => { if(e.target.id==="blocker"){ setPage(false)}}
    let pageNode;
    switch (page) {
        case "createChain":
            pageNode = <CreateChain setCreatedFlag={setCreatedFlag}/>
            break;
        case "chainInfo":
            pageNode = <ShowInfo info={selectInfo}/>
            break;
        case "developed":
            pageNode = <DevelopedMedicine setCreatedFlag={setCreatedFlag} supplyChainAddress={selectInfo.address}/>
            break;
        case "internalQCQA":
            pageNode = <InternalQCQA  setCreatedFlag={setCreatedFlag} supplyChainAddress={selectInfo.address}/>
                        break;
        case "externalQCQA":
            pageNode = <ExternalQCQA setCreatedFlag={setCreatedFlag} supplyChainAddress={selectInfo.address}/>
                        break;
        case "approved":
            pageNode = <Approved setCreatedFlag={setCreatedFlag} supplyChainAddress={selectInfo.address}/>
                        break;
        case "purchase":
            pageNode = <Purchase setCreatedFlag={setCreatedFlag} supplyChainAddress={selectInfo.address}/>
                        break;
        case "supply":
            pageNode = <Supply setCreatedFlag={setCreatedFlag} supplyChainAddress={selectInfo.address}/>
                        break;
        default:
            pageNode = null
    }
    return (
        <>
            {pageNode?<Blocker id="blocker" onClick={backMain}>{pageNode}</Blocker>:null}
            <MainContainer>
                <Logo src={logoSrc}></Logo>
                <Nav openCreate = {() => setPage("createChain")}></Nav>
                <Title>Medicine Supply Management</Title>
                <SwitchButton />
                <Table setPage ={(page) =>setPage(page)} setSelectInfo ={(info) =>{setSelectInfo(info)}} supplyChains={supplyChains}/>
            </MainContainer>
        </>
    );
};
export default Main;
