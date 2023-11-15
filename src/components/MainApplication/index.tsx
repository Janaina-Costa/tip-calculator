import { Form } from '../Form'
import './style.css'
import cifrao from '/public/icons/cifrao.svg'
import  { ChangeEvent, useState } from 'react'

export const MainApplication=()=>{
    const[isOnfocus, setIsOnFocus] =useState<boolean>(false)
    const [value, setValue]= useState<number>()

    const handleChangeValue = (e:ChangeEvent<HTMLInputElement>)=>{
        const{value}= e.target
        const limit = 16
        if(value.length>limit){
            return
        }
               
        setValue(Number(value))
    }

    const handleOnFocus=()=>{ 
        setIsOnFocus(true)        
    }

    const handleOnBlur=()=>{
        setIsOnFocus(false)
    }


    return(
        <main className="main-container">
            <Form
             icon={cifrao} 
             alt='Ícone de dinheiro'
             onBlur={handleOnBlur} 
             onFocus={handleOnFocus} 
             type='number'
             onChange={handleChangeValue}
             title='Conta'
             isOnFocused={isOnfocus}
             value={value as number}
             
             />


        </main>
    )
}