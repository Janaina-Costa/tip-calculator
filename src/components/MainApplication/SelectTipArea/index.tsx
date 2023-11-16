/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '../../Button'
import './style.css'
import { tipData } from '../../../data/tipData'
import { Form } from '../../Form'
import  { useState } from 'react'

interface IProps {
    onGetValueTip: (value: number) => void
    onGetButtonValue:(value:number)=>void
}
interface ITipProps{
    id:string
    tip:string,
    isSelected:boolean
}


export const SelectTipArea = ({ onGetValueTip, onGetButtonValue }: IProps) => {
    const[dataTip, setDataTip] = useState<ITipProps[]>(tipData)
    const [tipValue, setTipValue]=useState<number>()

    const handleKeyUp = (valueInput: number) => {
        onGetValueTip(valueInput)

    }

    const handleButtonClick = (id:string, name:any)=>{
        const buttonValue = name.split('')
        buttonValue.pop()
        const value = buttonValue.join('')
    
        
     setDataTip(prev=>{       
     return  prev.map(item=> item.id === id? {...item, isSelected:!item.isSelected}:item)
     })
    
    Object.values(dataTip).filter(item=>{
        if(item.id !== id && item.isSelected){
            return setDataTip(prev=>prev.map(tip=>tip.id !== id && tip.isSelected?{...tip, isSelected:!tip.isSelected}:tip)
    )}
    })

    setTipValue(Number(value))
    
    if(!tipValue){
        return
    }
    onGetButtonValue(tipValue)
    
      
}
       
    
    return (
        <div className='container-tip'>
            <p className='container-tip-title'>Selecione a gorjeta %</p>
            <div className="wrapper-tip-button">
                {dataTip.map(tip => (
                    <>
                        <Button id={tip.id} text={tip.tip} isSelected={tip.isSelected} onClick={(e)=>handleButtonClick(tip.id, e.target.name)} name={tip.tip} />
                    </>
                ))}
                <Form placeholder='Custom' type='number' onGetValue={handleKeyUp} />
            </div>
        </div >
    )
}