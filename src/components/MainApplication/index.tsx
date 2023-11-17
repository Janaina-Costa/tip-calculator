import { useEffect, useState } from 'react'
import { FormBill } from './FormBill'
import { SelectTipArea } from './SelectTipArea'
import { SummaryTip } from './Summary'
import './style.css'

export const MainApplication=()=>{
    const [valueBill, setValueBill] = useState<number>(0)
    const[valueTip, setValueTip] = useState<number>(0)
    const [totalPerson, setTotalPerson] = useState<number>(0)
    const [tipAmount, setTipAmount] = useState<number>(0)
    const [totalBill, setTotalBill] = useState<number>(0)
    

    const handleKeyUpBillInput=(valueBillInput:number)=>{
        if(!valueBillInput){
            return
        }
        setValueBill(valueBillInput)        
    }
  
    const handleClickTipValue =(valueButton:number)=>{
        if(!valueButton){
            return
        }
        setValueTip(valueButton)
        
    }
        

    const handleKeyUPTipInput =(valueTipInput:number)=>{
        if(!valueTipInput){
            return
        }
        setValueTip(valueTipInput)
        
    }
   
    
    const handleKeyUpPersonInput=(valuePersonInput:number)=>{
        setTotalPerson(valuePersonInput)        
    }

    
    useEffect(()=>{
        if(!valueBill || !valueTip || !totalPerson){
            return
        }
        const percentCalc = (valueBill* valueTip)/100
        const divisionForPerson = (percentCalc/ totalPerson).toFixed(2)
        
        const totalBill = valueBill+percentCalc
        const calcTotalBillForPerson = (totalBill / totalPerson).toFixed(2)
        setTipAmount(Number(divisionForPerson))
        setTotalBill(Number(calcTotalBillForPerson))
    },[valueBill, valueTip, totalPerson])
    
    
    const handleClearForm = ()=>{
        setTotalBill(0)
        setTipAmount(0)
        console.log(('cliquei'));
        
    }
      
    console.log(tipAmount);
    return(
        <main className="main-container">
            <FormBill onGetValueBill={handleKeyUpBillInput}/>
            <SelectTipArea 
                onGetValueTip={handleKeyUPTipInput} 
                onGetButtonValue={handleClickTipValue}
                onGetValueNumberPerson={handleKeyUpPersonInput}
           />
            <SummaryTip tipAmount={tipAmount} totalTip={totalBill} onClick={handleClearForm} />
           
        </main>
    )
}