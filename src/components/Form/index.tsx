import { FormHTMLAttributes } from "react"

interface IProps extends FormHTMLAttributes<HTMLFormElement>{
    title:string,
    icon?:string,
    type:string,
    onChange:()=>void,
    onBlur:()=>void,
    onFocus:()=>void,
}

export const Form = ({title, placeholder,icon, onChange, onSubmit, onBlur, onFocus, type='text' }:IProps)=>{
    return(
        <form action="" onSubmit={onSubmit}>
            <label htmlFor="">{title}</label>
           <div className="wrapper-input">
            {icon}
            <input 
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