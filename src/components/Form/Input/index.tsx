import { InputHTMLAttributes } from "react"
import { Icon } from "../../Icon";
import './style.css'

interface IProps extends InputHTMLAttributes<HTMLInputElement>{
    htmlFor:string
    title: string;
    isOnFocused:boolean,
    alt:string,
    icon?:string,
    type:string,
}


export const Input = ({id, type='text', placeholder, onChange, onBlur, onFocus, onKeyUp,title, htmlFor, icon,  alt, isOnFocused, value}:IProps)=>{
    return(
        <>
            <label htmlFor={htmlFor}>{title}</label>

            <div className={`wrapper-input ${isOnFocused? 'input-focus':''}`}>

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
            />

        </div>
        </>
    )
}