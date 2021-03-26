import React from 'react';
import  {H1 ,FormInput,FormButton,Form,PopUpContianer } from '../globalStyles'
import useForm from '../hooks/useForm'
import {developMedicine} from '../ethereum/supplyChain'


const DevelopedMedicine = ({supplyChainAddress,setCreatedFlag}) => {
    const [pair, changeValue]=useForm({
      name:"",
      price:""})
    const handleSubmit = async (e) => {
      e.preventDefault()
      await developMedicine(supplyChainAddress,pair.name,pair.price)
      setCreatedFlag(new Date())
    }
    return (
        <PopUpContianer>
            <Form onSubmit={(e)=>handleSubmit(e)}>
               <H1>Developed Medicine</H1>
                <FormInput onChange={(e)=>changeValue("name",e.target.value)} value={pair.name}  placeholder="name" required/>
                <FormInput type="number" onChange={(e)=>changeValue("price",e.target.value)} value={pair.price} placeholder="price(wei)" required/>
                <FormButton type="submit">Submit</FormButton>`
            </Form>
          </PopUpContianer>
    );
};

export default DevelopedMedicine;
