import { useEffect, useState } from "react";
import {getGifs} from '../helpers/GetGifs'
export const useFecthGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages(category)
    }, [])
    return {
        images,
        isLoading
    }
}
