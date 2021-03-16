import React from 'react';
import  {Blocker,H1 ,Input,Button } from '../globalStyles'
import styled from 'styled-components'
import useForm from '../hooks/useForm'
import {createSupplyChain} from '../ethereum/supplyChainFactory'
const CreateChainContianer = styled.div`
  text-align:left!important;
  border-radius:${props=>props.theme.radius.large};
  background-color:white;
  height:80vh;
  width:800px;
  min-height:400px;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:${props=>props.theme.margin.large} 0;
`
const FormInput = styled(Input)`
  width: 600px;
  height: 50px;
`
const FormButton = styled(Button)`
 font-size:30px;
 width: 600px;
 height: 50px;
 background-color:${props=>props.theme.color.btn_blue};
`

const Form = styled.form`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  height:100%;
`
const CreateChain = ({handleClose}) => {
    const [pair, changeValue]=useForm({date:"",
      healthDepartmentAddress:"",
      internalQCQAAddress:"",
      externalQCQAAddress:"",
      pharmaceuticalCompanyAddress:""})
    const handleSubmit = (e) => {
      e.preventDefault()
      let finalPair = JSON.parse(JSON.stringify(pair))
      finalPair["end"] = new Date(finalPair["date"]).getTime()
      finalPair["start"] = new Date().getTime()
      delete finalPair["date"]; 
      console.log(finalPair)
      createSupplyChain(finalPair)
    }
    return (
        <Blocker id="blocker" onClick={handleClose}>
          <CreateChainContianer>
            <Form onSubmit={(e)=>handleSubmit(e)}>
               <H1>Create new Supply Chain</H1>
                <FormInput onChange={(e)=>changeValue("date",e.target.value)} value={pair.date} type="date" placeholder="End Time" required/>
                <FormInput onChange={(e)=>changeValue("healthDepartmentAddress",e.target.value)} value={pair.healthDepartmentAddress} placeholder="Health Department Address" required/>
                <FormInput onChange={(e)=>changeValue("internalQCQAAddress",e.target.value)} value={pair.internalQCQAAddress} placeholder="InternalQCQA Address" required/>
                <FormInput onChange={(e)=>changeValue("externalQCQAAddress",e.target.value)} value={pair.externalQCQAAddress} placeholder="ExternalQCQA Address" required/>
                <FormInput onChange={(e)=>changeValue("pharmaceuticalCompanyAddress",e.target.value)} value={pair.pharmaceuticalCompanyAddress} placeholder="Pharmaceutical Company Address" required/>
                <FormButton type="submit">Submit</FormButton>`
            </Form>
          </CreateChainContianer>
        </Blocker>
    );
};

export default CreateChain;