import React from 'react';
import {ProgressButton} from '../components/button'
import styled from 'styled-components'
const ProgressBarContainer = styled.div`
    display:flex;
    width:100%;
    justify-content:space-around;
`
const ProgressBar = ({developed,internalQCQA,externalQCQA,approved}) => {
    return <ProgressBarContainer>
        <ProgressButton status={developed}>Developed</ProgressButton>
        <ProgressButton status={internalQCQA}>Internal<br/>QCQA</ProgressButton>
        <ProgressButton status={externalQCQA}>External<br/>QCQA</ProgressButton>
        <ProgressButton status={approved}>Approved</ProgressButton>
        <ProgressButton status={approved}>Purchase</ProgressButton>
        <ProgressButton status={approved}>Supply</ProgressButton>
    </ProgressBarContainer>
}

export default ProgressBar;