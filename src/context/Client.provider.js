import React, { useState, createContext, useEffect } from 'react'
import { baseCliente } from '../environments' 
import axios from 'axios'


const ClientContext = createContext({})

function ClientProvider(props) {

    const [client, setCliente] = useState({})

    useEffect(() => {
        getCliente(1)
        setCliente(JSON.parse(localStorage.getItem('user')))
    },[ ])

    const getCliente = (cliente) => {
        axios.get(`${baseCliente}/${cliente}`)
            .then((response) => {
                setCliente(response.data) 
                localStorage.user = JSON.stringify(response.data)
            })
            .catch((error) => {
                console.error(error.messege)
            })
    } 

    const setAtualizaCliente = (atualiza) => {
        axios.put(`${baseCliente}/atualizar`, atualiza)
        .then((response) => {
            setCliente(response.data)
        })
        .catch((error) => {
            console.error(error)
        })
    }

    const logado = (cliente) => {
        setCliente(cliente)
        localStorage.nome = "jeff"
    }

    function BuscaClient() {
        setCliente(JSON.parse(localStorage.getItem('user')))
    }

    return (
        <ClientContext.Provider
            value={{ client, logado, getCliente, setAtualizaCliente, BuscaClient }}>
            {props.children}
        </ClientContext.Provider>
    )

}

export { ClientProvider }
export default ClientContext 
