/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '../../Button'
import './style.css'
import { tipData } from '../../../data/tipData'
import { Form } from '../../Form'
import  { useState } from 'react'
import { Label } from '../../Label'
import person from '../../../assets/icons/person.svg'

interface IProps {
    onGetValueTip: (value: number) => void
    onGetButtonValue:(value:number)=>void
    onGetValueNumberPerson:(value:number)=>void
}
interface ITipProps{
    id:string
    tip:number,
    isSelected:boolean
}


export const SelectTipArea = ({ onGetValueTip, onGetButtonValue, onGetValueNumberPerson }: IProps) => {
    const[dataTip, setDataTip] = useState<ITipProps[]>(tipData)

    const handleKeyUp = (valueInput: number) => {
        onGetValueTip(valueInput)

    }
    const handleKeyUpNumberPerson=(valueInput:number)=>{
        onGetValueNumberPerson(valueInput)
    }


    const handleButtonClick = (id:string, valueButton:number)=>{
                
        setDataTip(prev=>{       
     return  prev.map(item=> item.id === id? {...item, isSelected:!item.isSelected}:item)
     })
    
    Object.values(dataTip).filter(item=>{
        if(item.id !== id && item.isSelected){
            return setDataTip(prev=>prev.map(tip=>tip.id !== id && tip.isSelected?{...tip, isSelected:!tip.isSelected}:tip)
    )}
})
    
    
    onGetButtonValue(valueButton)
    
      
}
       
    
    return (
        <div className='container-tip'>
            <p className='container-tip-title'>Selecione a gorjeta %</p>
            <div className="wrapper-tip-button">
                {dataTip.map(tip => (
                    <>
                        <Button id={tip.id} text={`${String(tip.tip)}%`} isSelected={tip.isSelected} onClick={(e:any)=>handleButtonClick(tip.id, e.target.value )} value={tip.tip} className='btn-tip'/>
                    </>
                ))}
                <Form placeholder='Custom' type='number' onGetValue={handleKeyUp} />
            </div>
            <div className="wrapper-person">
                <Label htmlFor='person-number' title='Numero de Pessoas'/>
            <Form 
                type='number' 
                alt='Imagem de um icone de perfil de pessoa'
                icon={person}
                placeholder='0'
                onGetValue={handleKeyUpNumberPerson}

            />
            </div>
        </div >
    )
}