/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '../../Button'
import './style.css'
import { tipData } from '../../../data/tipData'
import { Form } from '../../Form'
import  { ChangeEvent, useState } from 'react'
import { Label } from '../../Label'
import person from '../../../assets/icons/person.svg'

interface IProps {
    valueTip?:number
    totalPerson?:number
    onGetValueTip: (value: number) => void
    onGetButtonValue:(value:number)=>void
    onGetValueNumberPerson:(value:number)=>void
    onChangeValueTip:(e:any)=>void
    onChangeNumberPerson:(e:any)=>void
    hasError?:boolean
}
interface ITipProps{
    id:string
    tip:number,
    isSelected:boolean
}


export const SelectTipArea = ({ onGetValueTip, onGetButtonValue, onGetValueNumberPerson, onChangeValueTip, onChangeNumberPerson, totalPerson, valueTip, hasError }: IProps) => {
    const[dataTip, setDataTip] = useState<ITipProps[]>(tipData)

    const handleChangeInput = (e:ChangeEvent<HTMLInputElement>)=>{
        onChangeValueTip(e)
    }

    const handleKeyUp = (valueInput: number) => {        
        onGetValueTip(valueInput)
    }

    const handleChangeNumberPerson =(e:ChangeEvent<HTMLInputElement>)=>{
        onChangeNumberPerson(e)
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
    onGetButtonValue(Number(valueButton))
}
    return (
        <div className='container-tip'>
            <p className='container-tip-title'>Selecione a gorjeta %</p>
            <div className="wrapper-tip-button">
                {dataTip.map(tip => (                   
                        <Button 
                        key={tip.id}
                        id={tip.id} 
                        text={`${String(tip.tip)}%`} 
                        isSelected={tip.isSelected} 
                        onClick={(e:any)=>handleButtonClick(tip.id, e.target.value )} value={tip.tip} 
                        className='btn-tip'
                        />
                ))}
                <Form placeholder='Digite %' type='number' onGetValue={handleKeyUp}  onChange={handleChangeInput} value={valueTip} />
            </div>

            <div className="wrapper-person">
                <Label htmlFor='person-number' title='Numero de Pessoas' hasError={hasError} errorMessage='Adicione ao menos uma pessoa'  />
                <Form 
                    type='number' 
                    alt='Imagem de um icone de perfil de pessoa'
                    icon={person}
                    placeholder='0'
                    onGetValue={handleKeyUpNumberPerson}
                    onChange={handleChangeNumberPerson}
                    value={totalPerson}
                    hasError={hasError}
                    min={0}
                />
            </div>
        </div >
    )
}