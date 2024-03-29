import { useEffect,useState } from "react";
import getGifs from "../sevices/getGifs";


export function useGifs({keyword}){

    const [loading, setLoading] = useState(false);
        const [gifs, setGifs] = useState([]);
    
        useEffect(()=>{
            setLoading(true);
            getGifs({keyword})
                .then(gifs =>{
                    setGifs(gifs)
                    setLoading(false)
                })
        },[keyword])
        return {loading,gifs}
}