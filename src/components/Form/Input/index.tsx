import { InputHTMLAttributes } from "react"
import { Icon } from "../../Icon";
import './style.css'

interface IProps extends InputHTMLAttributes<HTMLInputElement>{
    isOnFocused:boolean,
    alt?:string,
    icon?:string,
    type:string,
    hasError?:boolean
}

export const Input = ({id, type='text', placeholder, onChange, onBlur, onFocus, onKeyUp, icon,  alt, isOnFocused, value, hasError, min}:IProps)=>{
    return(
        <>
            <div 
            className={
            `wrapper-input 
            ${isOnFocused? 'input-focus':
            hasError?'input-error':''}`
            }>
            <Icon src={icon} alt={alt}/>
            <input 
            id={id} 
            type={type}
            placeholder={placeholder} 
            onChange={onChange} 
            onBlur={onBlur} 
            onFocus={onFocus} 
            onKeyUp={onKeyUp} 
            value={value}   
            min={min} 
            />

        </div>
        </>
    )
}