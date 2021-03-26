import React,{useState} from 'react';
import  {H1 ,FormInput,FormButton,Form,PopUpContianer } from '../globalStyles'
import useForm from '../hooks/useForm'
import {approveMedicine} from '../ethereum/supplyChain'

const Approved = ({supplyChainAddress, setCreatedFlag}) => {
    const [pair, changeValue] =useForm({information:""})
    const [nextFlag, setNextFlag] = useState(false)
    const handleFail = async() => {
      await approveMedicine(supplyChainAddress, false, "")
      setCreatedFlag(new Date())
    }
    const handlePass = async () => {
      await approveMedicine(supplyChainAddress, true, pair.information)
      setCreatedFlag(new Date())
    }
      return (
        <PopUpContianer>
        {
          nextFlag?
          <Form onSubmit={(e)=>{e.preventDefault(); handlePass();}}>
               <H1>Approved</H1>
               <FormInput onChange={(e)=>changeValue("information",e.target.value)} value={pair.information} placeholder="Information" required/>
                <FormButton type="submit">Submit</FormButton>`
            </Form>:
          <Form onSubmit={(e)=>{e.preventDefault()}}>
               <H1>Approved</H1>
                <FormButton onClick={() => handleFail()} bgColor={"#FF003C"}>Fail</FormButton>
                <FormButton onClick={() => {setNextFlag(!nextFlag)}}>Pass</FormButton>
            </Form>
        }
          </PopUpContianer>
    );
};

export default Approved;
