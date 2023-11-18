import './style.css'

interface IProps{
    htmlFor?:string
    title?: string;
    errorMessage?:string
    hasError?:boolean
}

export const Label = ({htmlFor,title, errorMessage, hasError}:IProps)=>{
    return(
        <div className="container-label">
            <label className="label" htmlFor={htmlFor}>{title}</label>
            {hasError? <p className='error-message'>{errorMessage}</p>: ''}
        </div>
    )
}