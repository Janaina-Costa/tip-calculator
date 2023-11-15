/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {  ChangeEvent, FormHTMLAttributes, useState } from "react"
import './style.css'
import { Input } from "./Input"

interface IProps extends FormHTMLAttributes<HTMLFormElement>{
    icon?:string,
    type:string,
    alt?:string,
    onGetValue:(value:number)=>void,
    htmlFor?:string
}

export const Form = ({ alt,icon, type, id, onGetValue, placeholder}:IProps)=>{
    const [valueInput, setValue]= useState<number|null>()
    const[isOnfocus, setIsOnFocus] =useState<boolean>(false)

       
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
    
    const handleGetValueInput = (event:React.KeyboardEvent<HTMLInputElement>)=>{
        const {code} = event
        if(code === 'Enter' || code === 'NumpadEnter'){
            onGetValue(valueInput as number)
        }
    }

    return(
                                    
            <Input
                id={id}
                type={type} 
                placeholder={placeholder}
                onChange={handleChangeValue} 
                onKeyUp={handleGetValueInput}
                onBlur={handleOnBlur} 
                onFocus={handleOnFocus}
                isOnFocused={isOnfocus}
                alt={alt}
                icon={icon}  
                value={valueInput as number}           
            />
            
    )
}