import { ChangeEvent, useEffect, useState } from 'react'
import { FormBill } from './FormBill'
import { SelectTipArea } from './SelectTipArea'
import { SummaryTip } from './Summary'
import './style.css'
import { Button } from '../Button'

export const MainApplication=()=>{
    const [valueBill, setValueBill] = useState<number>()
    const [valueTip, setValueTip] = useState<number>(0)
    const [valueTipInput, setValueTipInput] = useState<number>()
    const [totalPerson, setTotalPerson] = useState<number>(1)
    const [tipAmount, setTipAmount] = useState<number>(0)
    const [totalBill, setTotalBill] = useState<number>(0)
    const [isDisabled, setIsDisabled] = useState<boolean>(false)
    const [hasError, setHasError] = useState<boolean>(false)
    
    
    const handleChangeBillInput = (e:ChangeEvent<HTMLInputElement>)=>{
        const{value}= e.target
        if(!value){
            return
        }
        const limit = 16
        if(value.length>limit){
            return
        }      
        setValueBill(Number(value))      
        
    }

    const handleKeyUpBillInput=( valueBillInput:number)=>{    
        if(!valueBillInput){
            return
        }
        setValueBill(valueBillInput)
        
    }

    const handleChangeTipValue=(e:ChangeEvent<HTMLInputElement>)=>{
        const {value}= e.target
        const limit = 2
        if(value.length>limit){
            return
        }   
        setValueTipInput(Number(value))  
    }
    
    const handleClickTipValue =(valueButton:number)=>{
        if(!valueButton){
            return
        }
        setValueTip(valueButton)   
        setValueTipInput(0)               
    }

    const handleKeyUPTipInput =(valueTipInput:number)=>{
        if(!valueTipInput){
            return
        }
        setValueTipInput(valueTipInput)     
    }
   
    const handleChangeNumberPerson = (e:ChangeEvent<HTMLInputElement>)=>{
        const {value}= e.target
        const limit = 2
        if(value.length>limit){
            return
        }   
        setTotalPerson(Number(value))        
    }
    
    const handleKeyUpPersonInput=(valuePersonInput:number)=>{
        setTotalPerson(valuePersonInput)                
    }

    useEffect(()=>{
        if(valueTipInput as number>0){
            setValueTip(0)            
        }
    },[valueTipInput, valueTip])

        
    useEffect(()=>{
        if(!valueBill || !totalPerson &&(!valueTip &&!valueTipInput)){
            return
        }
        
        const tip = valueTip|| valueTipInput as number

        if(tip <=0 || totalPerson as number <=0){
            return
        }

       
        const percentCalc = (valueBill* tip)/100
              
        const divisionForPerson = (percentCalc/ (totalPerson as number)).toFixed(2)
        
        const totalBill = valueBill+percentCalc
        const calcTotalBillForPerson = (totalBill / (totalPerson as number)).toFixed(2)
        setTipAmount(Number(divisionForPerson))
        setTotalBill(Number(calcTotalBillForPerson))

    },[valueBill, valueTip, totalPerson, valueTipInput])

    
    useEffect(()=>{
        if(!valueBill  && !valueTip && !valueTipInput){
            setIsDisabled(true)            
        }else{
            setIsDisabled(false)
        }

        
        if((!valueBill || valueBill as number <=0) && (valueTip >0  || valueTipInput as number >0) ){
            setHasError(true)
            return
        }else  {
            setHasError(false)
        }
        
       

    },[valueBill, totalPerson,valueTip, valueTipInput])

    
    
    const handleClearForm = ()=>{
        setValueBill(0)
        setValueTipInput(0)
        setTipAmount(0)
        setTotalPerson(0)
        setValueTip(0)
        setTotalBill(0)
        setTipAmount(0)                
    }
    
  
    return(
        <main className="main-container">
           <section className="form-area">
           <FormBill value={valueBill as number} onGetValueBill={handleKeyUpBillInput} onChangeValueBill={handleChangeBillInput} hasError={hasError} />
            <SelectTipArea 
                onChangeValueTip={handleChangeTipValue}
                onChangeNumberPerson={handleChangeNumberPerson}
                onGetValueTip={handleKeyUPTipInput} 
                onGetButtonValue={handleClickTipValue}
                onGetValueNumberPerson={handleKeyUpPersonInput}    
                totalPerson={totalPerson}
                valueTip={valueTipInput}
                hasError={hasError}
                
           />
           </section>
            <SummaryTip tipAmount={tipAmount} totalTip={totalBill} >
            <Button disabled={isDisabled}  className={isDisabled?'btn-disabled':'btn-summary'} text='RESET' onClick={handleClearForm}/>
            </SummaryTip>
           
        </main>
    )
}