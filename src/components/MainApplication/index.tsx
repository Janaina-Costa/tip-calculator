/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from '../Form'
import './style.css'
import cifrao from '/public/icons/cifrao.svg'

export const MainApplication=()=>{

    const handleKeyUp=(valueInput:number)=>{
        console.log('peguei', valueInput);
        
    }

    return(
        <main className="main-container">
           <Form
            id='input-bill'
            htmlFor='input-bill'
            title='Conta'
            icon={cifrao}
            alt='Simbolo de cifrão'
            type='number'
            onGetValue={handleKeyUp}
           />


        </main>
    )
}