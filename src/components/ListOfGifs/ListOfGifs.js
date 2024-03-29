import React from "react"
import './Styles.css'
import Gif from "../Gif/Gif"

export default function ListOfGifs({gifs}){
    return <div className="ListOfGifs">
    {gifs.map(({id, title, url}) =>
    <Gif
        id={id}
        key={id}
        title={title}
        url={url} 
    />
    )}
    </div>
    
}