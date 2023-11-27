/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {  ChangeEvent, FormHTMLAttributes, useState } from "react"
import { Input } from "./Input"

interface IProps extends FormHTMLAttributes<HTMLFormElement>{
    icon?:string,
    type:string,
    alt?:string,
    htmlFor?:string,
    value?:number,
    hasError?:boolean,
    min?:number,
    onChange:(e:any)=>void,
    onGetValue:(value:number)=>void,
}

export const Form = ({ alt,icon, type, id, onGetValue, placeholder, onChange, value, hasError, min}:IProps)=>{
    const[isOnfocus, setIsOnFocus] =useState<boolean>(false)
       
    const handleChangeValue = (e:ChangeEvent<HTMLInputElement>)=>{
       onChange(e)
    }

    const handleOnFocus=()=>{ 
        setIsOnFocus(true)        
    }

    const handleOnBlur=()=>{
        setIsOnFocus(false)
    }
    
    const handleGetValueInput = (event:React.KeyboardEvent<HTMLInputElement>)=>{
        if(!value){
            return
        }
        const {code} = event
        if(code === 'Enter' || code === 'NumpadEnter'){            
            onGetValue(value)
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
                value={value}   
                hasError={hasError}   
                min={min}  
            />
            
    )
}