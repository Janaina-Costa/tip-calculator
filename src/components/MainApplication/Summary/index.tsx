import { Button } from '../../Button'
import './style.css'
interface IProps{
    tipAmount: number,
    totalTip: number
}

export const SummaryTip =({tipAmount,totalTip}:IProps)=>{
    return(
        <div className="container-summary">
            <div className="wrapper-summary">
                <div className="tip-amount">
                    <div className="wrapper-paragraph">
                    <p className='title-amount'>Tip Amount </p>
                    <p className='comment'>/ person</p>
                    </div>
                    <p className='value-amount'><span>R$</span>{tipAmount}</p>
                </div>

                <div className="total">
                <div className="wrapper-paragraph">
                    <p className='title-total'>Total</p>
                    <p className='comment'>/ person</p>
                </div>
                    <p className='value-total'><span>R$</span>{totalTip}</p>
                </div>
                <Button className='btn-summary' text='RESET'/>
            </div>
        </div>
    )
}