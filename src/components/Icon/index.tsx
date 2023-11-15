import { ImgHTMLAttributes } from "react"

export const Icon: React.FC<ImgHTMLAttributes<HTMLImageElement>>=({src, alt, width, height})=>{
    return(
        <img src={src} alt={alt} width={width} height={height} />
    )
}