/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {  ChangeEvent, FormHTMLAttributes, useState } from "react"
import './style.css'
import { Input } from "./Input"

interface IProps extends FormHTMLAttributes<HTMLFormElement>{
    title:string,
    icon?:string,
    type:string,
    alt:string,
    onGetValue:(value:number)=>void,
    htmlFor:string
}

export const Form = ({title, alt,icon, type, id, htmlFor, onGetValue}:IProps)=>{
    const [valueInput, setValue]= useState(0)
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
            onGetValue(valueInput)
        }
    }

    return(
        <div  className="containerForm">
                
            <Input
                id={id}
                type={type} 
                placeholder='0'
                onChange={handleChangeValue} 
                onKeyUp={handleGetValueInput}
                onBlur={handleOnBlur} 
                onFocus={handleOnFocus}
                isOnFocused={isOnfocus}
                htmlFor={htmlFor}
                title={title}
                alt={alt}
                icon={icon}  
                value={valueInput}           
            />
            
          
        </div>
    )
}