import { Button } from '../../Button'
import './style.css'
import { tipData } from '../../../data/tipData'
import { Form } from '../../Form'

export const SelectTipArea = ()=>{
    return(
        <div className="containerTip">
            {tipData.map(tip=>(
                <>
                    <Button text={tip.tip}isSelected={tip.isSelected}  />
                </>
            ))}
            <Form placeholder='Custom' type='number' onGetValue={()=>console.log('lalala')} />
        </div>
    )
}