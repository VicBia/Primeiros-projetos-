import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import './style.css'

function Post(props) {
    const [info, setInfo] = useState()

    useEffect(() => {
        async function getInfo(){
            const response = await axios.get(props.conteudo)
            setInfo(response.data)
        }
        getInfo()
    },[])
    useEffect(() => {
    console.log(info)
    },[info])

    return(
    <div className="card" id={info?.types[0].type.name}>
        <div className="col1">
            <div className="nome">
                <h2>{props.titulo}</h2>
            </div>
            <div className="conteudo">
                {info?  info.types.map((tipo) => {
                return(<li key={tipo.slot} id="card" className={tipo.type.name}>
                    {tipo.type.name}
                    </li>) 
                }) : <p>Carregando</p>}
            </div>
        </div>
        <div>
            <img src={info?.sprites.front_default}/>
        </div>
    </div>
    )
}

export default Post