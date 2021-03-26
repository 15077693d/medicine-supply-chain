import React from 'react';
import  {H1 ,FormInput,FormButton,Form,PopUpContianer } from '../globalStyles'
import useForm from '../hooks/useForm'
import {QCQA} from '../ethereum/supplyChain'

const ExternalQCQA = ({setCreatedFlag,supplyChainAddress}) => {
    const handleFail = async (e) => {
        e.preventDefault()
        await QCQA(supplyChainAddress,false,false)
        setCreatedFlag(new Date())
      }
      const handlePass = async (e) => {
        console.log('123')
        e.preventDefault()
        await QCQA(supplyChainAddress,false,true)
        setCreatedFlag(new Date())
      }
    return (
        <PopUpContianer>
            <Form>
               <H1>External QCQA</H1>
                <FormButton  onClick={handleFail} bgColor={"#FF003C"}>Fail</FormButton>
                <FormButton onClick={handlePass} >Pass</FormButton>
            </Form>
          </PopUpContianer>
    );
};

export default ExternalQCQA;
