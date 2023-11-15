/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from '../Form'
import { Label } from '../Label'
import { SelectTipArea } from './SelectTipArea'
import './style.css'
import cifrao from '/public/icons/cifrao.svg'

export const MainApplication=()=>{

    const handleKeyUp=(valueInput:number)=>{
        console.log('peguei', valueInput);
        
    }

    return(
        <main className="main-container">
            <div  className="containerForm">
                <Label title='Conta' htmlFor='input-bill' />
                <Form
                    id='input-bill'
                    title='Conta'
                    icon={cifrao}
                    alt='Simbolo de cifrão'
                    type='number'
                    onGetValue={handleKeyUp}
                    placeholder='0'
                />

            </div>
           <SelectTipArea/>

        </main>
    )
}