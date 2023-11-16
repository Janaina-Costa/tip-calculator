import { FormBill } from './FormBill'
import { SelectTipArea } from './SelectTipArea'
import { SummaryTip } from './Summary'
import './style.css'

export const MainApplication=()=>{

    const handleKeyUpBillInput=(valueBillInput:number)=>{
        if(!valueBillInput){
            return
        }
        console.log('peguei', valueBillInput);
        
    }

    const handleKeyUPTipInput =(valueTipInput:number)=>{
        console.log('tip=', valueTipInput);
        
    }

    const handleClickTipValue =(valueButton:number)=>{
        console.log('desconto',valueButton);
        
    }

    const handleKeyUpPersonInput=(valuePersonInput:number)=>{
        console.log('total de pessoas', valuePersonInput);
        
    }

    return(
        <main className="main-container">
            <FormBill onGetValueBill={handleKeyUpBillInput}/>
            <SelectTipArea 
                onGetValueTip={handleKeyUPTipInput} 
                onGetButtonValue={handleClickTipValue}
                onGetValueNumberPerson={handleKeyUpPersonInput}
           />
            <SummaryTip/>
        </main>
    )
}