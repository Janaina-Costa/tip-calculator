import './style.css'

interface IProps{
    htmlFor?:string
    title?: string;
}

export const Label = ({htmlFor,title}:IProps)=>{
    return(
        <label className="label-container" htmlFor={htmlFor}>{title}</label>
    )
}