import React from 'react';
import  {H1, PopUpContianer,FormInput,FormButton,Form } from '../globalStyles'
import useForm from '../hooks/useForm'
import {createSupplyChain} from '../ethereum/supplyChainFactory'


const CreateChain = ({setCreatedFlag}) => {
    const [pair, changeValue]=useForm({date:"",
      healthDepartmentAddress:"",
      internalQCQAAddress:"",
      externalQCQAAddress:"",
      pharmaceuticalCompanyAddress:""})
    const handleSubmit = async (e) => {
      e.preventDefault()
      let finalPair = JSON.parse(JSON.stringify(pair))
      finalPair["end"] = new Date(finalPair["date"]).getTime()
      finalPair["start"] = new Date().getTime()
      delete finalPair["date"]; 
      await createSupplyChain(finalPair)
      setCreatedFlag(new Date())
    }
    return (
          <PopUpContianer>
            <Form onSubmit={(e)=>handleSubmit(e)}>
               <H1>Create new Supply Chain</H1>
                <FormInput onChange={(e)=>changeValue("date",e.target.value)} value={pair.date} type="date" placeholder="End Time" required/>
                <FormInput onChange={(e)=>changeValue("healthDepartmentAddress",e.target.value)} value={pair.healthDepartmentAddress} placeholder="Health Department Address" required/>
                <FormInput onChange={(e)=>changeValue("internalQCQAAddress",e.target.value)} value={pair.internalQCQAAddress} placeholder="InternalQCQA Address" required/>
                <FormInput onChange={(e)=>changeValue("externalQCQAAddress",e.target.value)} value={pair.externalQCQAAddress} placeholder="ExternalQCQA Address" required/>
                <FormInput onChange={(e)=>changeValue("pharmaceuticalCompanyAddress",e.target.value)} value={pair.pharmaceuticalCompanyAddress} placeholder="Pharmaceutical Company Address" required/>
                <FormButton type="submit">Submit</FormButton>`
            </Form>
          </PopUpContianer>
    );
};

export default CreateChain;
