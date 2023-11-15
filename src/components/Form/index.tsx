import { FormHTMLAttributes } from "react"
import './style.css'

interface IProps extends FormHTMLAttributes<HTMLFormElement>{
    title:string,
    icon?:string,
    type:string,
    alt:string,
    isOnFocused:boolean,
    onChange:()=>void,
    onBlur:()=>void,
    onFocus:()=>void,
}

export const Form = ({title,alt,isOnFocused, placeholder,icon, onChange, onSubmit, onBlur, onFocus, type='text' }:IProps)=>{
    return(
        <form action="" onSubmit={onSubmit} className="containerForm">
            <label htmlFor="input-bill">{title}</label>
           <div className={`wrapper-input ${isOnFocused? 'input-focus':''}`}>
            <img src={icon} alt={alt} />
            <input 
                id="input-bill"
                type={type} 
                placeholder={placeholder} 
                onChange={onChange} 
                onBlur={onBlur} 
                onFocus={onFocus}
                />
           </div>
        </form>
    )
}