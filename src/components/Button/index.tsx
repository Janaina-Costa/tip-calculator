import { ButtonHTMLAttributes } from "react"
import './style.css'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    isSelected?: boolean;
    text: string;
}

export const Button = ({ isSelected, text, onClick}:IProps)=>{
    return(
        <button 
        className={`btn-tip ${isSelected? 'btn-tip-selected':''}`}
        onClick={onClick}
        >
            <span className="btn-tip-text">{text}</span>
        </button>
    )
}