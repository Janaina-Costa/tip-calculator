import { FormBill } from './FormBill'
import { SelectTipArea } from './SelectTipArea'
import './style.css'

export const MainApplication=()=>{

    const handleKeyUpBillInput=(valueInput:number)=>{
        console.log('peguei', valueInput);
        
    }

    const handleKeyUPTipInput =(valueTipInput:number)=>{
        console.log('tip=', valueTipInput);
        
    }

    return(
        <main className="main-container">
            <FormBill onGetValueBill={handleKeyUpBillInput}/>
           <SelectTipArea onGetValueTip={handleKeyUPTipInput}/>

        </main>
    )
}