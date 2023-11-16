import { FormBill } from './FormBill'
import { SelectTipArea } from './SelectTipArea'
import './style.css'

export const MainApplication=()=>{

    const handleKeyUpBillInput=(valueInput:number)=>{
        if(!valueInput){
            return
        }
        console.log('peguei', valueInput);
        
    }

    const handleKeyUPTipInput =(valueTipInput:number)=>{
        console.log('tip=', valueTipInput);
        
    }

    const handleClickTipValue =(valueButton:number)=>{
        console.log('desconto',valueButton);
        
    }

    return(
        <main className="main-container">
            <FormBill onGetValueBill={handleKeyUpBillInput}/>
           <SelectTipArea onGetValueTip={handleKeyUPTipInput} onGetButtonValue={handleClickTipValue}/>

        </main>
    )
}