import { ReactNode } from 'react'
import './style.css'
interface IProps{
    tipAmount: number,
    totalTip: number,
    children:ReactNode
}

export const SummaryTip =({tipAmount,totalTip,children}:IProps)=>{
    
    return(
        <div className="container-summary">
            <div className="wrapper-summary">
                <div className="tip-amount">
                    <div className="wrapper-paragraph">
                    <p className='title-amount'>Valor da gorjeta</p>
                    <p className='comment'>/ pessoa</p>
                    </div>
                    <p className='value-amount'><span>R$</span>{tipAmount}</p>
                </div>

                <div className="total">
                <div className="wrapper-paragraph">
                    <p className='title-total'>Total a pagar</p>
                    <p className='comment'>/ pessoa</p>
                </div>
                    <p className='value-total'><span>R$</span>{totalTip}</p>
                </div>
                {children}
            </div>
        </div>
    )
}