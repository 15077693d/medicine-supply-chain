import React, { useState, useEffect } from 'react';
import { PopUpContianer, H1, Form, FormButton } from '../globalStyles'
import { ProgressButton } from '../components/button'
import { getOrders,supply } from '../ethereum/supplyChain'
import styled from 'styled-components'

const BtnContainer = styled.div`
    height:300px;
    width:600px;
    & > button{
        width:100%;
        margin-top:20px; 
    }
    overflow:scroll;
`
const Supply = ({ supplyChainAddress }) => {
    let [orders, setOrders] = useState([])
    let [selectedId, setSelectedId] = useState("")
    let [refresh, setRefresh] = useState("")
    useEffect(async () => {
        setOrders(await getOrders(supplyChainAddress))
    }, [refresh])
    const handleFail = async () => {
        await supply(supplyChainAddress, selectedId,false)
        setRefresh(new Date())
     }
    const handleSuccess = async () => { 
        await supply(supplyChainAddress, selectedId,true)
        setRefresh(new Date())
    }
    return (
        <PopUpContianer>
            {
                selectedId === "" ? <div>
                    <H1>Medicine Supply</H1>
                    <BtnContainer>
                        {orders.map(order => <ProgressButton key={order.id} onClick={() => setSelectedId(Number(order.id))} status={order.supplyTime === "0" ? undefined : order.supplied}>{order.id}</ProgressButton>)}
                    </BtnContainer></div> : <Form onSubmit={(e) => { e.preventDefault() }}>
                        <H1>Medicine Supply #{selectedId}</H1>
                        <FormButton onClick={() => {handleFail()}} bgColor={"#FF003C"}>Fail</FormButton>
                        <FormButton onClick={() => {handleSuccess()}}>Done</FormButton>
                        <FormButton onClick={() => setSelectedId("")} bgColor={"#908E8E"}>Back</FormButton>
                    </Form>
            }
        </PopUpContianer>
    );
};

export default Supply;