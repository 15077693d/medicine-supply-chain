import React from 'react';
import { PopUpContianer, H1, Field, L1, InfoContainer } from '../globalStyles'
import styled from 'styled-components'
import { ProgressButton } from '../components/button'
const InfoWrapper = styled.div`
  width: 600px;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  height:100%;
`

const FlowContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
`

const ShowInfo = ({ info }) => {
    const { infomation, address,
        price,
        name,
        externalQCACAddress,
        internalQCQAAddress,
        healthDepartmentAddress,
        pharmaceuticalCompanyAddress, developed, internalQCQA, externalQCQA, approved } = info
    console.log(info)
    return (
        <PopUpContianer>
            <div>
                <H1>Supply Chain Information</H1>
                <InfoWrapper>
                    <InfoContainer>
                        ID:<Field> {address}</Field>
                        Price(wei):<Field> {price}</Field>
                        Name:<Field> {name}</Field>
                        Information:<Field> {infomation}</Field>
                    </InfoContainer>
                    <InfoContainer>
                        ExternalQCQA Address:<Field>{externalQCACAddress}</Field>
                        InternalQCQA Address:<Field>{internalQCQAAddress}</Field>
                        Health Department Address:<Field> {healthDepartmentAddress}</Field>
                        Pharmaceutical Company Address:<Field> {pharmaceuticalCompanyAddress}</Field>
                    </InfoContainer>
                </InfoWrapper>
                <FlowContainer>
                    <ProgressButton status={developed}>Developed</ProgressButton>
                    <ProgressButton status={internalQCQA}>Internal<br />QCQA</ProgressButton>
                    <ProgressButton status={externalQCQA}>External<br />QCQA</ProgressButton>
                    <ProgressButton status={approved}>Approved</ProgressButton>
                    <ProgressButton status={approved}>Purchase</ProgressButton>
                    <ProgressButton status={approved}>Supply</ProgressButton>
                </FlowContainer>
            </div>
        </PopUpContianer>
    )
};

export default ShowInfo;