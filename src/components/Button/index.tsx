import { ButtonHTMLAttributes } from "react"
import './style.css'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    isSelected?: boolean;
    text: string;
}

export const Button = ({ isSelected, text,name,className, onClick}:IProps)=>{
    
    return(
        <button 
        className={`btn-default ${isSelected? 'btn-tip-selected':className} `}
        onClick={onClick} name={name}
        >
            {text}
        </button>
    )
}