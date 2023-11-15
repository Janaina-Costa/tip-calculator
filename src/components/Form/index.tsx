/* eslint-disable @typescript-eslint/no-explicit-any */
import {  FormHTMLAttributes } from "react"
import './style.css'
import { Input } from "./Input"

interface IProps extends FormHTMLAttributes<HTMLFormElement>{
    title:string,
    icon?:string,
    type:string,
    alt:string,
    value:number|string,
    isOnFocused:boolean,
    onChange:(e:any)=>void,
    onBlur:()=>void,
    onFocus:()=>void,
}

export const Form = ({title,alt,isOnFocused, placeholder,icon, onChange, onSubmit, onBlur, onFocus, type, id, value }:IProps)=>{
    return(
        <form action="" onSubmit={onSubmit} className="containerForm">
                
            <Input
                id={id}
                type={type} 
                placeholder={placeholder} 
                onChange={onChange} 
                onBlur={onBlur} 
                onFocus={onFocus}
                isOnFocused={isOnFocused}
                htmlFor=''
                title={title}
                alt={alt}
                icon={icon}
                value={value}                
            />
            
          
        </form>
    )
}