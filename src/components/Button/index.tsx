import { ButtonHTMLAttributes } from "react"
import './style.css'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    isSelected?: boolean;
    text: string;
}

export const Button = ({ isSelected, text,name, onClick}:IProps)=>{
    
    return(
        <button 
        className={`btn-tip ${isSelected? 'btn-tip-selected':''}`}
        onClick={onClick} name={name}
        >
            {text}
        </button>
    )
}