import { Form } from '../Form'
import './style.css'
import cifrao from '../../../public/icons/cifrao.svg'
import { useState } from 'react'

export const MainApplication=()=>{
    const[isOnfocus, setIsOnFocus] =useState<boolean>(false)
    
    const handleOnFocus=()=>{ 
        setIsOnFocus(true)
        console.log('entrei', isOnfocus);
    }
    const handleOnBlur=()=>{
        setIsOnFocus(false)
        console.log('sai', isOnfocus);
    }

    return(
        <main className="main-container">
            <Form
             icon={cifrao} 
             alt='Ícone de dinheiro'
             onBlur={handleOnBlur} 
             onFocus={handleOnFocus} 
             type='number'
             onChange={()=>console.log('')}
             title='Conta'
             isOnFocused={isOnfocus}
             />


        </main>
    )
}