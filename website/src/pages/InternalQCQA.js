import React from 'react';
import  {H1 ,FormButton,Form,PopUpContianer } from '../globalStyles'
import {QCQA} from '../ethereum/supplyChain'

const InternalQCQA = ({setCreatedFlag,supplyChainAddress}) => {
    const handleFail = async (e) => {
      e.preventDefault()
      await QCQA(supplyChainAddress,true,false)
      setCreatedFlag(new Date())
    }
    const handlePass = async (e) => {
      console.log('123')
      e.preventDefault()
      await QCQA(supplyChainAddress,true,true)
      setCreatedFlag(new Date())
    }
      return (
        <PopUpContianer>
            <Form >
               <H1>Internal QCQA</H1>
                <FormButton onClick={handleFail} bgColor={"#FF003C"}>Fail</FormButton>
                <FormButton onClick={handlePass}>Pass</FormButton>
            </Form>
          </PopUpContianer>
    );
};

export default InternalQCQA;
