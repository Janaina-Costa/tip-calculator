/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "../../Form"
import { Label } from "../../Label"
import cifrao from '../../../assets/icons/cifrao.svg'
import './style.css'
import { ChangeEvent } from "react"


interface IProps{
    value:number
    onChangeValueBill:(e:any)=>void
    onGetValueBill:(value:number)=>void
    hasError:boolean
}

export const FormBill = ({onGetValueBill, onChangeValueBill, value, hasError}:IProps)=>{

    const handleKeyUP = (value:number)=>{
        onGetValueBill(value)
    }

    const handleChangeValue = (e:ChangeEvent<HTMLInputElement>)=>{
        onChangeValueBill(e)
    }
    return(
        <div className="containerForm">
            <Label 
            title='Conta' 
            htmlFor='input-bill' 
            hasError={hasError} 
            errorMessage="Valor invalido"/>

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
            hasError = {hasError}
            min={0}
            />
        </div>
    )
}