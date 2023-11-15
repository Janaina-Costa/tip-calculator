import { Form } from '../Form'
import './style.css'

export const MainApplication=()=>{
    return(
        <main className="main-container">
            <Form
             icon='' 
             onBlur={()=>console.log('uiii')} 
             onFocus={()=>console.log('')} type='number'/>


        </main>
    )
}