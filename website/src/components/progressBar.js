import React from 'react';
import {ProgressButton} from '../components/button'
import styled from 'styled-components'
const ProgressBarContainer = styled.div`
    display:flex;
    width:100%;
    justify-content:space-around;
`
const ProgressBar = ({setPage,developed,internalQCQA,externalQCQA,approved}) => {
    return <ProgressBarContainer>
        <ProgressButton onClick={() =>setPage("developed")}  status={developed}>Developed</ProgressButton>
        <ProgressButton onClick={() =>setPage("internalQCQA")} status={internalQCQA}>Internal<br/>QCQA</ProgressButton>
        <ProgressButton onClick={() =>setPage("externalQCQA")} status={externalQCQA}>External<br/>QCQA</ProgressButton>
        <ProgressButton onClick={() =>setPage("approved")} status={approved}>Approved</ProgressButton>
        <ProgressButton onClick={() =>setPage("purchase")} status={approved}>Purchase</ProgressButton>
        <ProgressButton onClick={() =>setPage("supply")} status={approved}>Supply</ProgressButton>
    </ProgressBarContainer>
}

export default ProgressBar;