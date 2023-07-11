import { createContext, useContext, useState } from "react";

const ImageContext = createContext();

const ImageContextProvider = ({children})=>{

    const [images,setImages] = useState([]);

    const data = {}

    return <ImageContext.Provider value={data}>{children}</ImageContext.Provider>
}

export default ImageContextProvider

export const useCustomImage = ()=> useContext(ImageContext);