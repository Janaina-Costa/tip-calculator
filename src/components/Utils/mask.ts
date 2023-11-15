/* eslint-disable @typescript-eslint/no-explicit-any */
export const FormatterCurrency = ( value:any)=>{
    let e: any
    value = e.target.value.replace(/\D/g,"");
    value = (value/100).toFixed(2)
    value = value.replace('.',',')
    value = value.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,")
    value = value.replace(/(\d)(\d{3}),/g, "$1.$2,");
    return e.target.value = value
}