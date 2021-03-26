import React, { useState } from 'react';
import { H1, FormInput, FormButton, Form, PopUpContianer, Field } from '../globalStyles'
import useForm from '../hooks/useForm'
import { purchase, getOrders } from '../ethereum/supplyChain'
const Purchase = ({ supplyChainAddress, setCreatedFlag }) => {
  getOrders(supplyChainAddress)
  const [pair, changeValue] = useForm({ location: "", amount: "" })
  const [id, setId] = useState("")
  const handleSubmit = async () => {
    const id = await purchase(supplyChainAddress, pair.location, pair.amount)
    setCreatedFlag(new Date())
    console.log(id)
    setId(id)
  }
  const handleBack = async () => {
    setId("")
  }
  return (
    <PopUpContianer>
      {id ?
        <Form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          <H1>Purchase Medicine</H1>
          <Field>{`Your order id is ${id}, please mark it down...`}</Field>
          <FormButton onClick={handleBack}>Back</FormButton>`
            </Form> :
        <Form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          <H1>Purchase Medicine</H1>
          <FormInput onChange={(e) => changeValue("location", e.target.value)} value={pair.location} placeholder="Location" required />
          <FormInput onChange={(e) => changeValue("amount", e.target.value)} value={pair.amount} placeholder="Amount" required />
          <FormButton type="submit">Submit</FormButton>`
            </Form>
      }
    </PopUpContianer>
  );
};

export default Purchase;