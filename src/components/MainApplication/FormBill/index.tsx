import { Form } from "../../Form"
import { Label } from "../../Label"
import cifrao from '../../../assets/icons/cifrao.svg'
import './style.css'


interface IProps{
    onGetValueBill:(value:number)=>void
}

export const FormBill = ({onGetValueBill}:IProps)=>{

    const handleKeyUP = (value:number)=>{
        onGetValueBill(value)
    }
    return(
        <div className="containerForm">
            <Label title='Conta' htmlFor='input-bill' />

            <Form  
            placeholder="0" 
            type="number" 
            onGetValue={handleKeyUP}
            id='input-bill'
            title='Conta'
            icon={cifrao}
            alt='Simbolo de cifrão'
            />
        </div>
    )
}