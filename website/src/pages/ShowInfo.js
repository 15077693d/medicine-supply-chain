import React from 'react';
import {PopUpContianer,H1,Field,L1} from '../globalStyles'
import styled from 'styled-components'
const InfoWrapper = styled.div`
`
const ShowInfo = ({info}) => {
    return (
    <PopUpContianer>
    <InfoWrapper>  <H1>Supply Chain Information</H1>
        <Field>ID: {info.address}</Field>
        <Field>Price: {info.price}</Field>
        <Field>Name: {info.name}</Field>
        <Field>Information: {info.information}</Field></InfoWrapper>
      
    </PopUpContianer>
    )
};

export default ShowInfo;