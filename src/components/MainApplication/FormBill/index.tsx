/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "../../Form"
import { Label } from "../../Label"
import cifrao from '../../../assets/icons/cifrao.svg'
import './style.css'
import { ChangeEvent } from "react"


interface IProps{
    onGetValueBill:(value:number)=>void
    onChangeValueBill:(e:any)=>void
    value:number
}

export const FormBill = ({onGetValueBill, onChangeValueBill, value}:IProps)=>{

    const handleKeyUP = (value:number)=>{
        onGetValueBill(value)
    }

    const handleChangeValue = (e:ChangeEvent<HTMLInputElement>)=>{
        onChangeValueBill(e)
    }
    return(
        <div className="containerForm">
            <Label title='Conta' htmlFor='input-bill' />

            <Form  
            placeholder="0" 
            type="number" 
            id='input-bill'
            title='Conta'
            icon={cifrao}
            alt='Simbolo de cifrão'
            value={value}
            onGetValue={handleKeyUP}
            onChange={handleChangeValue}
            />
        </div>
    )
}