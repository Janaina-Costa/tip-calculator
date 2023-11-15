import { ReactElement, ReactNode } from "react"
import './style.css'

interface IProps{
    children:ReactNode| string| ReactElement
}

export const Header = ({children}:IProps)=>{
    return(
        <header className="container">
            <div className="logo">{children} </div>
        </header>
    )
}