import { Button } from '../../Button'
import './style.css'
import { tipData } from '../../../data/tipData'
import { Form } from '../../Form'

interface IProps {
    onGetValueTip: (value: number) => void
}

export const SelectTipArea = ({ onGetValueTip }: IProps) => {
    const handleKeyUp = (valueInput: number) => {
        onGetValueTip(valueInput)

    }
    return (
        <div className='container-tip'>
            <p className='container-tip-title'>Selecione a gorjeta %</p>
            <div className="wrapper-tip-button">
                {tipData.map(tip => (
                    <>
                        <Button text={tip.tip} isSelected={tip.isSelected} />
                    </>
                ))}
                <Form placeholder='Custom' type='number' onGetValue={handleKeyUp} />
            </div>
        </div >
    )
}