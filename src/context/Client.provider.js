import React, { useState, createContext } from 'react'
import { baseCliente } from '../environments' 
import axios from 'axios'


const ClientContext = createContext({})

function ClientProvider(props) {

    const [client, setCliente] = useState({id: 1})


    const getCliente = (cliente) => {
        axios.get(`${baseCliente}/${cliente}`)
            .then((response) => {
                setCliente(response.data)
            })
            .catch((error) => {
                console.error(error.messege)
            })
    } 

    const setAtualizaCliente = (atualiza) => {
        axios.put(`${baseCliente}/atualizar/${client.id}`, atualiza)
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


    return (
        <ClientContext.Provider
            value={{ client, logado, getCliente, setAtualizaCliente }}>
            {props.children}
        </ClientContext.Provider>
    )

}

export { ClientProvider }
export default ClientContext 
