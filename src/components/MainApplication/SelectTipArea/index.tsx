/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '../../Button'
import './style.css'
import { tipData } from '../../../data/tipData'
import { Form } from '../../Form'
import  { useState } from 'react'

interface IProps {
    onGetValueTip: (value: number) => void
}
interface ITipProps{
    id:string
    tip:string,
    isSelected:boolean
}


export const SelectTipArea = ({ onGetValueTip }: IProps) => {
    const[dataTip, setDataTip] = useState<ITipProps[]>(tipData)

    const handleKeyUp = (valueInput: number) => {
        onGetValueTip(valueInput)

    }

    const handleButtonClick = (id:string)=>{
        
     setDataTip(prev=>{       
     return  prev.map(item=> item.id === id? {...item, isSelected:!item.isSelected}:item)
     })
    
    Object.values(dataTip).filter(item=>{
        if(item.id !== id && item.isSelected){
            return setDataTip(prev=>prev.map(tip=>tip.id !== id && tip.isSelected?{...tip, isSelected:!tip.isSelected}:tip)
    )}
    })

}
       
    
    return (
        <div className='container-tip'>
            <p className='container-tip-title'>Selecione a gorjeta %</p>
            <div className="wrapper-tip-button">
                {dataTip.map(tip => (
                    <>
                        <Button id={tip.id} text={tip.tip} isSelected={tip.isSelected} onClick={()=>handleButtonClick(tip.id)} name={tip.tip} />
                    </>
                ))}
                <Form placeholder='Custom' type='number' onGetValue={handleKeyUp} />
            </div>
        </div >
    )
}