import React from 'react';
import {ProgressButton} from '../components/button'
import styled from 'styled-components'
const ProgressBarContainer = styled.div`
    display:flex;
    width:100%;
    justify-content:space-around;
`
const ProgressBar = ({developedFlag,internalFlag,externalFlag,approvedFlag,purchaseFlag,supplyFlag}) => {
    return <ProgressBarContainer>
        <ProgressButton status={developedFlag}>Developed</ProgressButton>
        <ProgressButton status={internalFlag}>Internal<br/>QCQA</ProgressButton>
        <ProgressButton status={externalFlag}>External<br/>QCQA</ProgressButton>
        <ProgressButton status={approvedFlag}>Approved</ProgressButton>
        <ProgressButton status={purchaseFlag}>Purchase</ProgressButton>
        <ProgressButton status={supplyFlag}>Supply</ProgressButton>
    </ProgressBarContainer>
}

export default ProgressBar;